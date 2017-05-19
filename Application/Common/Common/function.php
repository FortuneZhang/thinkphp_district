<?php
$GLOBALS['tel400'] = '4008889960';

$GLOBALS['tel400_host'] = 'http://210.14.79.50/platform/iface';

function get_ip_place()
{
    $city_from_cookie = cookie('city');
    if (empty($city_from_cookie)) {
        $ip = get_client_ip();
        if ($ip == '127.0.0.1') {
            $ip = '221.195.112.150';
        }
        $res = file_get_contents('http://ip.taobao.com/service/getIpInfo.php?ip=' . $ip);
        $res = json_decode($res, true);
        if ($res['code'] == '0') {
            $city = $res['data']['city'];

        } else {
            $city = '北京市';
        }
    }else{
        $city = $city_from_cookie;
        unset($city_from_cookie);
    }
    $m = M('city')->where(array('name' => $city))->find();
    if (!$m) {
        $city = '%' . str_replace('市', '', $city) . '%';
        $m = M('city')->where(array('name' => array('like', $city)))->find();
    }
    return $m;

}

function getUpdateData($user_id)
{
    return array('updated_at' => time(), 'updator_id' => $user_id, 'is_deleted' => 1);
}

function get_tag6_map($tag)
{
    $array = array(
        '1' => '独栋',
        '独栋' => '1',
        '2' => '写字楼',
        '写字楼' => '2',
        '3' => '众创空间',
        '众创空间' => '3',
        '众创' => '3',
        '4' => '厂房',
        '厂房' => '4',
        '5' => '商铺',
        '商铺' => '5',
        '6' => '土地',
        '土地' => 6
    );
    if (in_array($tag, $array)) {
        return $array[$tag];
    }else{
        return -1;
    }
}

function getTag6Map($tag)
{
    return get_tag6_map($tag);
}

function sendVcodeMsg($tel)
{
    require_once 'ChuanglanSmsHelper/ChuanglanSmsApi.php';
    $vcode = D('Admin/Vcode')->generate($tel);
    if ($vcode['code'] == 0) {
        return $vcode;
    }

    $clapi  = new ChuanglanSmsApi();
    $result1 = $clapi->sendSMS($tel, '您好，您的验证码是'.$vcode['code'],'true');

    $result = $clapi->execResult($result1);
    if ($result[1]==0) {
        return array('code' => 1, 'msg' => '验证码发送成功');
    }else{
        return array('code' => 0, 'msg' => '服务器故障,请稍后重试','result'=>$result,'result1'=>$result1);
    }
}

function checkIsPhone($phone){
    return preg_match("/^1[3456789]{1}\d{9}$/", $phone);
}

function get400ByTel($tel)
{
    include_once 'tel400.php';
    $dept = saveNewDept($tel);
  
    if (empty($dept) || !$dept['result']) {
        return array('400' => '', 'code' => '500',);
    }

    $user = addUser($dept['data']['deptName'],$dept['data']['deptId'], $tel,$dept['num']);
    if ($user['result']) {
        return array('400' => $GLOBALS['tel400']. '转' .$user['report_num'],'result'=>true);
    }else{
        return array('400' => '', 'result' => false,);
    }
}

function delAgentById($tel,$agent_id)
{
    include_once 'tel400.php';
    $ret = delAgentAndUser($tel, $agent_id);
    return $ret;
}

function delDeptById($dept_id)
{
    include_once 'tel400.php';
    return delDept($dept_id);
}

function validatePhone($tel)
{
    return preg_match("/^1[3456789]{1}\d{9}$/", $tel);
}

function validateEmail($email)
{
    $pattern = "/^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$/i";
    return preg_match($pattern, $email);
}

function curlPost($url,$postFields){
    $postFields = http_build_query($postFields);
    $ch = curl_init ();
    curl_setopt ( $ch, CURLOPT_POST, 1 );
    curl_setopt ( $ch, CURLOPT_HEADER, 0 );
    curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
    curl_setopt ( $ch, CURLOPT_URL, $url );
    curl_setopt ( $ch, CURLOPT_POSTFIELDS, $postFields );
    $result = curl_exec ( $ch );
    curl_close ( $ch );
    return $result;
}

function curlGet($url)
{
    $ch = curl_init($url) ;
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true) ; // 获取数据返回
    curl_setopt($ch, CURLOPT_BINARYTRANSFER, true) ; // 在启用 CURLOPT_RETURNTRANSFER 时候将获取数据返回
    $output = curl_exec($ch) ;

    return $output;
}
/**
+----------------------------------------------------------
 * 采集远程文件
+----------------------------------------------------------
 * @access public
+----------------------------------------------------------
 * @param string $remote 远程文件名
 * @param string $local 本地保存文件名
+----------------------------------------------------------
 * @return mixed
+----------------------------------------------------------
 */
function curlDownload($remote,$local) {
    $cp = curl_init($remote);
    $fp = fopen($local,"w");
    curl_setopt($cp, CURLOPT_FILE, $fp);
    curl_setopt($cp, CURLOPT_HEADER, 0);
    curl_exec($cp);
    curl_close($cp);
    fclose($fp);
}

/*
*功能：php多种方式完美实现下载远程图片保存到本地
*参数：文件url,保存文件名称，使用的下载方式
*当保存文件名称为空时则使用远程文件原来的名称
*/
function getImage($url,$filename='',$type=0){
    if($url==''){return false;}
    if($filename==''){
        $ext=strrchr($url,'.');
        if($ext!='.gif' && $ext!='.jpg'){return false;}
        $filename=time().$ext;
    }
    //文件保存路径
    if($type){
        $ch=curl_init();
        $timeout=5;
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout);
        $img=curl_exec($ch);
        curl_close($ch);
    }else{
        ob_start();
        readfile($url);
        $img=ob_get_contents();
        ob_end_clean();
    }
    $size=strlen($img);
    //文件大小
    $fp2=@fopen($filename,'a');
    fwrite($fp2,$img);
    fclose($fp2);
    return $filename;
}




function getWxLoginLink()
{
    $status = urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING']);

    $appid = C('APPID');
    $redirect_url = urlencode('http://www.xuanzhizhongguo.com' . '/index.php/Home/Login/wxLoginStep2');
    $url = "https://open.weixin.qq.com/connect/qrconnect?appid={$appid}&redirect_uri={$redirect_url}&response_type=code&scope=snsapi_login&state={$status}#wechat_redirect";
    return $url;
}
function getWxLoginLinkOnPhone()
{
    $status = urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING']);

    $appid = C('APPID');
    $redirect_url = urlencode('http://www.xuanzhizhongguo.com' . '/index.php/Home/Login/wxLoginStep2');
    $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={$appid}&redirect_uri={$redirect_url}&response_type=code&scope=snsapi_login&state={$status}#wechat_redirect";
    return $url;
}

function getReportTypeMap($key){
    $reportType = array(
        '0'=>'标注价格与实际不符',
        '1'=>'虚假信息',
        '2'=>'电话号码不正确',
        '3'=>'违法信息',
        '4'=>'房屋已租或已售',
        '5'=>'其他',
        '其他'=>'5',
        '房屋已租或已售'=>'4',
        '违法信息'=>'3',
        '电话号码不正确'=>'2',
        '虚假信息'=>'1',
        '标注价格与实际不符'=>'0',
    );
    return $reportType[$key];
}

function getArticleClassifyMap($key){
    $articleClassify = array(
        '1' => '行业要闻',
        '2' => '选址攻略',
        '3' => '政策解读',
        '4' => '项目考察',
        '5' => '高端访谈',
        '6' => '招商路演',
        '7' => '图解选址',
        '8' => '见见世面',
        '行业要闻' => '1',
        '选址攻略' => '2',
        '政策解读' => '3',
        '项目考察' => '4',
        '高端访谈' => '5',
        '招商路演' => '6',
        '图解选址' => '7',
        '见见世面' => '8',
    );
    return $articleClassify[$key];
}

function getLoginUserInfo(){
    $member_type = session(C('SESSION_USER_TYPE'));
    if ($member_type == 'm') {
        $member_id = session(C('SESSION_USER_ID'));
    }else{
        $member_id = session(C('SESSION_ADMIN_ID'));
    }
    return array('type' => $member_type, 'id' => $member_id);
}

function getMemberInfo($creator_id, $creator_type)
{
    if ($creator_type == 'm') {
        $member = M('Member')->field('id,nickname,thumb,introduction,rank,mobile,mobile400')->find($creator_id);
    } else {
        $member = M('Admin')->field('id,nickname')->find($creator_id);
        $member['thumb'] = '/Public/user_default.jpg';
        $member['introduction'] = C('ADMININTRODUCTION');
        $member['rank'] = C('ADMINRANK');
        $member['mobile400'] = C('ADMINMOBILE400');
    }
    $member['house_count'] = M('House')->where(array('creator_id'=>$creator_id,'creator_type'=>$creator_type,'is_allowed'=>1,'is_deleted'=>0))->count();
    return $member;
}


function uuid($prefix = '')
{
    $chars = md5(uniqid(mt_rand(), true));
    $uuid  = substr($chars,0,8) . '-';
    $uuid .= substr($chars,8,4) . '-';
    $uuid .= substr($chars,12,4) . '-';
    $uuid .= substr($chars,16,4) . '-';
    $uuid .= substr($chars,20,12);
    return $prefix . $uuid;
}
