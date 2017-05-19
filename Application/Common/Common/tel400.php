<?php



/*
 * return
 * {
 *  "result": "true",
 *  "message": null,
 *  "data":
 *  {
 *       "deptId": "116854968655",
 *       "deptName':'Auto',
 *  }
 *}
 */
function saveNewDept($name='Auto')
{

    $M_Tel400 = D('Admin/Tel400');

    $dept = $M_Tel400->getOneReportNumber();
    $params = array(
        'num'=>$GLOBALS['tel400'],
        'deptName'=>$name,
        'parentDeptId' => $GLOBALS['tel400'],
        'colorRingLsh'=>0,
        'ivrKey'=>$dept['num'],
        'isChild'=>0,
        'childKeyLen'=>7,
        'childinType'=>0,
        'salesAlerttoneLsh'=>1,
    );

    $ret = curlPost($GLOBALS['tel400_host'].'/saveDept.do', $params);
    $ret = json_decode($ret, true);
    $ret['data']['deptName'] = $name;
    $ret['num'] = $dept['num'];
    return $ret;


}

function delDept($deptId)
{
    $params = array(
        'num' => $GLOBALS['tel400'],
        'deptId' => $deptId,
    );

    $delRet = curlPost($GLOBALS['tel400_host'].'/delDept.do', $params);
    $delRet = json_decode($delRet, true);
    return $delRet;
}

function addUser($deptName='Auto',$deptId, $tel,$report_num)
{
    $M_Tel400 = D('Admin/Tel400');


    $params = array(
        'num' => $GLOBALS['tel400'],
        'deptId'=>$deptId,
        'password'=>'',
        'reportNum' => $report_num,
        'userName'=>'name'.$tel,
        'bindPhone'=>$tel,
        'agentType'=>1,
        'selectedAgentIds'=>'',
    );
    $ret = curlPost($GLOBALS['tel400_host'] . '/saveUserAgentBindIvr.do', $params);
    $ret = json_decode($ret,true);

    if ($ret['result']) {
        $data = array(
            'tel' => $tel,
            'dept_name'=> $deptName,
            'dept_id' => $deptId,
            'agent_id' => $ret['data']['agentId'],
            'report_num' => $report_num,
            'is_deleted' => 0,
        );
        $M_Tel400->saveOneReportNumber($data);
        $ret['report_num'] = $report_num;
    }
    return $ret;
}

function delAgentAndUser($tel,$agent_id)
{

    $params = array(
        'num' => $GLOBALS['tel400'],
        'agentId'=>$agent_id,
    );
    $ret = curlPost($GLOBALS['tel400_host'] . '/deleteUserAgent.do', $params);
    $ret = json_decode($ret,true);
    
    return $ret;
}



