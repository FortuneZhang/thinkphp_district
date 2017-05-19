<?php
namespace District\Controller;

use Think\Controller;

/*
 * api controller 不需要用户登陆验证
 * api2 controller需要用户登陆验证，否则会出现结果为0
 */


class ApiController extends Controller
{
    private $result;

    public function _initialize()
    {
        $this->result = array(
            'code' => 0,
            'msg' => 'error',
            'list' => array(
                'pagecount' => 0,
                'totalcount' => 0,
                'list' => array()
            ),
            'obj' => null,
            'count'=>0,
        );
    }

    public function index()
    {
        $this->result['msg'] = '请求成功';
        $this->ajaxReturn($this->result);
    }



    public function provinces(){
        $districts = M('District')->field('id,name,province_id,city_id')->where(array('province_id' => 0, 'is_active' => 1, 'is_deleted' => 0))->select();
        $this->result['code'] = 1;
        $this->result['list']['list'] = $districts;
        $this->result['list']['totalcount'] = count($districts);
        $this->result['list']['pagecount'] = count($districts);
        $this->ajaxReturn($this->result);
    }

    public function provinceAreas(){
        //只供直辖市使用
        $province_id = I('post.province_id',-1);
        $districts = M('District')->field('id,name,province_id,city_id')->where(array('province_id' => $province_id,'city_id'=>array('neq',0), 'is_active' => 1, 'is_deleted' => 0))->select();
        $this->result['code'] = 1;
        $this->result['list']['list'] = $districts;
        $this->result['list']['totalcount'] = count($districts);
        $this->result['list']['pagecount'] = count($districts);
        $this->ajaxReturn($this->result);
    }

    public function citys(){
        $province_id = I('post.province_id',-1);
        $districts = M('District')->field('id,name,province_id,city_id')->where(array('province_id' => $province_id,'city_id' => 0, 'is_active' => 1, 'is_deleted' => 0))->select();
        $this->result['code'] = 1;
        $this->result['list']['list'] = $districts;
        $this->result['list']['totalcount'] = count($districts);
        $this->result['list']['pagecount'] = count($districts);
        $this->ajaxReturn($this->result);
    }

    public function citySiblings(){
        $city_id = I('post.city_id',-1);
        $M_District = M('District');
        $province_id = $M_District->field('province_id')->find($city_id);
        $districts = $M_District->field('id,name,province_id,city_id')->where(array('province_id' => $province_id['province_id'],'city_id' => 0, 'is_active' => 1, 'is_deleted' => 0))->select();
        $this->result['code'] = 1;
        $this->result['list']['list'] = $districts;
        $this->result['list']['totalcount'] = count($districts);
        $this->result['list']['pagecount'] = count($districts);
        $this->ajaxReturn($this->result);

    }

    public function areas(){
        $city_id = I('post.city_id');
        $districts = M('District')->field('id,name,province_id,city_id')->where(array('city_id' => $city_id, 'is_active' => 1, 'is_deleted' => 0))->select();
        $this->result['code'] = 1;
        $this->result['list']['list'] = $districts;
        $this->result['list']['totalcount'] = count($districts);
        $this->result['list']['pagecount'] = count($districts);
        $this->ajaxReturn($this->result);
    }

    public function areaSiblings()
    {
        $area_id = I('post.area_id',-1);
        $M_District = M('District');
        $city_id = $M_District->field('city_id')->find($area_id);
        $districts = $M_District->field('id,name,province_id,city_id')->where(array('city_id' => $city_id['city_id'], 'is_active' => 1, 'is_deleted' => 0))->select();
        $this->result['code'] = 1;
        $this->result['list']['list'] = $districts;
        $this->result['list']['totalcount'] = count($districts);
        $this->result['list']['pagecount'] = count($districts);
        $this->ajaxReturn($this->result);
    }

    public function districtCircle(){
        $district_id = I('post.district_id');

        $districts = M('District')->field('id')->where(array('city_id' => $district_id))->select();
        $district_ids = array();
        $district_ids[] = $district_id;
        foreach ($districts as $district) {
            $district_ids[] = $district['id'];
        }

        $circles = M('DistrictCircle')->field('id,name,district_id,lat,lon')->where(array('district_id' => array('in',$district_ids),  'is_deleted' => 0))->select();
        $this->result['code'] = 1;
        $this->result['list']['list'] = $circles;
        $this->result['list']['totalcount'] = count($circles);
        $this->result['list']['pagecount'] = count($circles);
        $this->ajaxReturn($this->result);
    }


    public function districtCircleSiblings(){
        $circle_id = I('post.circle_id');
        $M_DistrictCircle = M('DistrictCircle');
        $district_id = $M_DistrictCircle->field('district_Id')->find($circle_id);

        $circles = $M_DistrictCircle->field('id,name,district_id,lat,lon')->where(array('district_id' => $district_id['district_id'],  'is_deleted' => 0))->select();
        $this->result['code'] = 1;
        $this->result['list']['list'] = $circles;
        $this->result['list']['totalcount'] = count($circles);
        $this->result['list']['pagecount'] = count($circles);
        $this->ajaxReturn($this->result);
    }


    public function subways(){
        $district_id = I('post.district_id');
        $subways = M('Subway')->field('id,name,district_id')->where(array('district_id' => $district_id, 'is_deleted' => 0))->order("list_order desc,id desc")->select();
        $this->result['code'] = 1;
        $this->result['list']['list'] = $subways;
        $this->result['list']['totalcount'] = count($subways);
        $this->result['list']['pagecount'] = count($subways);
        $this->ajaxReturn($this->result);
    }

    public function subwaysBySite(){
        $site_name = I('post.site_name');
        $subways = M()->table(array('rft_subway' => 's', 'rft_subway_site' => 'ss'))->field('s.id,s.name,s.district_id')
            ->where(array('ss.name' => $site_name, 'ss.is_deleted' => 0, 's.id=ss.subway_id'))->select();

        $this->result['code'] = 1;
        $this->result['list']['list'] = $subways;
        $this->result['list']['totalcount'] = count($subways);
        $this->result['list']['pagecount'] = count($subways);
        $this->ajaxReturn($this->result);

    }

    public function subwaySites(){
        $subway_id = I('post.subway_id');
        $sites = M('SubwaySite')->field('id,name,subway_id')->where(array('subway_id' => $subway_id, 'is_deleted' => 0))->order('list_order desc,id desc')->select();
        $this->result['code'] = 1;
        $this->result['list']['list'] = $sites;
        $this->result['list']['totalcount'] = count($sites);
        $this->result['list']['pagecount'] = count($sites);
        $this->ajaxReturn($this->result);
    }




}
