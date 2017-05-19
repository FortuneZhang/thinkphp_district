var District = {}; //地区



function global_error(XMLHttpRequest, textStatus, errorThrown) {

}




District.provinces = function (params,success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/provinces',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

District.provinceAreas = function (province_id,success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        province_id:province_id
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/provinceAreas',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};


District.citys = function (provice_id,success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        province_id:provice_id
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/citys',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};
District.citySiblings = function (city_id,success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        city_id:city_id
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/citySiblings',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

District.subwaysBySite = function(site_name,success_callback,error_callback){
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        site_name:site_name
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/subwaysBySite',
        data: params,
        dataType: "json",
        success: function (data) {
            var html = '';
            _.each(data['list']['list'], function (item) {
                html += '<li>'+item['name']+'</li>';
            });
            data['list']['lihtml'] = html;
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}
District.subways = function(district_id,success_callback,error_callback){
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        district_id:district_id
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/subways',
        data: params,
        dataType: "json",
        success: function (data) {
            var html = '';
            _.each(data['list']['list'], function (item) {
                html += '<li>'+item['name']+'</li>';
            });
            data['list']['lihtml'] = html;
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}
District.subwaySites = function(subway_id,success_callback,error_callback){
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        subway_id:subway_id
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/subwaySites',
        data: params,
        dataType: "json",
        success: function (data) {
            var html = '';
            _.each(data['list']['list'], function (item) {
                html += '<li>'+item['name']+'</li>';
            });
            data['list']['lihtml'] = html;
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

