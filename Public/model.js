var Article = {'Gonglue':{}} //资讯表

var Building = {'CYY': {}, 'XZL': {}, 'SP': {}, 'ZCKJ': {}, 'CF': {}}; //楼盘 CYY、XZL等为编辑使用
var House = {'CYY': {}, 'XZL': {}, 'SP': {}, 'ZCKJ': {}, 'CF': {}, 'TUDI': {}}; //房源，CYY、XZL等为编辑使用
var SlierShow = {}; // 幻灯图片
var Ad = {}; //广告
var Question = {}; //问答
var District = {}; //地区
var Bid = {}; //委托
var User = {}; //用户



function global_error(XMLHttpRequest, textStatus, errorThrown) {
    window.location.reload();
    // if(typeof(XMLHttpRequest) == 'object') {
    //     XMLHttpRequest = JSON.stringify(XMLHttpRequest);
    // }
    // if(typeof(textStatus) == 'object') {
    //     textStatus = JSON.stringify(textStatus);
    // }
    // if(typeof(errorThrown) == 'object') {
    //     errorThrown = JSON.stringify(errorThrown);
    // }
    // alert('XMLHttpRequest' + XMLHttpRequest);
    // alert('textStatus' + textStatus);
    // alert('errorThrown' + errorThrown);
    // //alert('与服务器通信出现错误！请刷新后重试');
}

Article.index_page = function (success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {};
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/index',
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
Article.Gonglue.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/gonglueEdit',
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
Article.detail = function (id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        id: id
    };
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/gonglue',
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
Article.myGonglue = function(params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myGonglue',
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
Article.commonGonglue = function(params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/commonGonglue',
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
Article.commonList = function(params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/articleCommonList',
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

Article.indexPageArticle = function( success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/customerArticle',
        data: {'position':'index'},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};
Article.customerArticle = function(params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/customerArticle',
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
Article.customerAndCommonArticle = function(params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/customerAndCommonArticle',
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

Article.Gonglue.check_exist_by_title = function (title, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        'title':title
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Publish/gonglueCheckTitle',
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
Building.CYY.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/buildingCYYEdit',
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
Building.CYY.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/buildingCyyEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

Building.XZL.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/buildingXZLEdit',
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
Building.XZL.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/buildingXzlEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

Building.CF.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/buildingCFEdit',
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
Building.CF.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/buildingCfEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

Building.SP.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/buildingSPEdit',
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
Building.SP.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/buildingSpEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

Building.ZCKJ.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/buildingZCKJEdit',
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
Building.ZCKJ.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/buildingZckjEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

Building.myBuilding = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myBuilding',
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

Building.commonList = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/buildingCommonList',
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

Building.customerBuilding = function(params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/customerBuilding',
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

Building.searchBuilding = function(params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/buildingSearch',
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
Building.sameBuilding = function(building_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/sameBuilding',
        data: {'building_id':building_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

Building.districtBuildings = function(params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/districtBuildings',
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


House.CYY.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseCYYEdit',
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
House.CYY.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseCyyEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

House.XZL.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseXZLEdit',
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
House.XZL.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseXzlEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

House.CF.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseCFEdit',
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
House.CF.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseCfEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

House.SP.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseSPEdit',
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
House.SP.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseSpEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

House.ZCKJ.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseZCKJEdit',
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
House.ZCKJ.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseZckjEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

House.TUDI.save = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseTUDIEdit',
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
House.TUDI.detail = function (id, success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'id': id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Publish/houseTudiEditDetail',
        data: params,
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

House.myHouse = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myHouse',
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
House.commonList = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/houseCommonList',
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
House.customerHouse = function(params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/customerHouse',
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

House.searchHouse = function(params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/houseSearch',
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
House.sameHouse = function(house_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/sameHouse',
        data: {house_id:house_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

House.samePriceHouse = function(house_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/samePriceHouse',
        data: {house_id:house_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};


Question.detail = function (id,success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        'id':id
    };
    $.ajax({
        type: 'POST',
        url:  '/index.php/Home/Api/question',
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
Question.save = function (params,success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url:  '/index.php/Home/Publish/questionEdit',
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
Question.commonList = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/commonQuestion',
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
Question.CustomerList = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/customerQuestion',
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

Question.addAnswer = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/addAnswer',
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

Question.answers = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/answers',
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

Question.setBestAnswer = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/setBestAnswer',
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



District.provinces = function (success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
    };
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
District.areas = function (city_id,success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        city_id:city_id
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/areas',
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
District.areaSiblings = function (area_id,success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        area_id:area_id
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/areaSiblings',
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
District.districtCircle = function (district_id,success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        district_id:district_id
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/districtCircle',
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
District.districtCircleSiblings = function (circle_id,success_callback,error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {
        circle_id:circle_id
    };
    $.ajax({
        type: 'POST',
        url:'/index.php/Home/Api/districtCircleSiblings',
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


User.bidCenter = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/bidCenter',
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
User.myBids = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myBids',
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
User.myBideds = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myBideds',
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
User.bidDetail = function (bid_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/bidDetail',
        data: {'bid_id':bid_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.bidFeedback = function(params,success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/bidFeedback',
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
User.myCollectionMember = function (params,success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myCollectionMember',
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
User.addCollectionMember = function(member_id,success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/addCollectionMember',
        data: {'member_id':member_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};
User.cancelCollectionMember = function(id,success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/cancelCollectionMember',
        data: {'id':id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.cancelCollectionMemberByMemberId = function(member_id,success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/cancelCollectionMemberByMemberId',
        data: {'member_id':member_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.myCollectionBuilding = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myCollectionBuilding',
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
User.addCollectionBuilding = function (building_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/addCollectionBuilding',
        data: {'building_id':building_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.delCollectionBuilding = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/delCollectionBuilding',
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

User.delCollectionBuildingByBuildingId = function (building_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/delCollectionBuildingByBuildingId',
        data: {'building_id':building_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};


User.myCollectionHouse = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myCollectionHouse',
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
User.addCollectionHouse = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/addCollectionHouse',
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

User.toggleCollectionHouse = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/toggleCollectionHouse',
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

User.delCollectionHouse = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/delCollectionHouse',
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

User.delCollectionHouseByHouseId = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/delCollectionHouseByHouseId',
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

User.myCollectionArticle = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myCollectionArticle',
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
User.addCollectionArticle = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/addCollectionArticle',
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

User.delCollectionArticle = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/delCollectionArticle',
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

User.toggleCollectionArticle = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/toggleCollectionArticle',
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


User.myCollectionQuestion = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myCollectionQuestion',
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

User.toggleCollectionQuestion = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/toggleCollectionQuestion',
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

User.addCollectionQuestion = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/addCollectionQuestion',
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

User.delCollectionQuestion = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/delCollectionQuestion',
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

User.myQuestion = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myQuestion',
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

User.myQuestionDetail = function (id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myQuestionDetail',
        data: {'id':id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.myQuestionChangeCloseStatus = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/changeMyQuestionCloseStatus',
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

User.myQuestionFiller = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myQuestionFiller',
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

User.myQuestionDelete = function (id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myQuestionDelete',
        data: {'id':id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};



User.myMessage = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myMessage',
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

User.getMyMessageDetail = function (id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/getMyMessageDetail',
        data: {'id':id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.delMyMessage = function (id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/delMyMessage',
        data: {'id':id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.delMyBuilding = function(id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/delMyBuilding',
        data: {'id':id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};
User.delMyHouse = function(id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/delMyHouse',
        data: {'id':id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.delMyGonglue = function(id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/delMyGonglue',
        data: {'id':id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.bidAndMe = function (bid_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/bidAndMe',
        data: {'bid_id': bid_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.myHouseForBid = function (bid_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/myHouseForBid',
        data: {'bid_id': bid_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};
User.useMyHouseToBided = function (house_id,bid_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    if(house_id == '' || bid_id == '') {
        return;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/useMyHouseToBided',
        data: {'bid_id': bid_id,'house_id':house_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};


User.user = function (user_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/user',
        data: {'user_id': user_id},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.loginByPhone = function (phone, vcode, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Login/loginByPhone',
        data: {'phone': phone,'vcode':vcode},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.registerByPhone = function (phone, vcode, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Login/registerByPhone',
        data: {'phone': phone,'vcode':vcode},
        dataType: "json",
        success: function (data) {
            success_callback(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            error_callback(XMLHttpRequest, textStatus, errorThrown);
        }
    });
};

User.customerRight = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/customerRight',
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

User.report = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/report',
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

Util.sendVcode = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/Api/sendVcode',
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

User.yuyue = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/yuyue',
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

User.isMeCollectionMember = function (member_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'member_id': member_id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/isMeCollectionMember',
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
User.isMeCollectionHouse = function (house_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'house_id': house_id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/isMeCollectionHouse',
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

User.isMeCollectionBuilding = function (building_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'building_id': building_id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/isMeCollectionBuilding',
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

User.isMeCollectionArticle = function (article_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'article_id': article_id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/isMeCollectionArticle',
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

User.isMeCollectionQuestion = function (question_id, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    var params = {'question_id': question_id};
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/isMeCollectionQuestion',
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


User.uploadImg = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/uploadImg',
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

User.uploadCard = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/uploadCard',
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

User.bindPhone = function (params, success_callback, error_callback) {
    if (!error_callback) {
        error_callback = global_error;
    }
    $.ajax({
        type: 'POST',
        url: '/index.php/Home/UserCenter/bindPhone',
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

