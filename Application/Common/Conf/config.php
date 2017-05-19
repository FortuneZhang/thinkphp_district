<?php
return array(
    'DB_TYPE'                   =>  'mysql',     // 数据库类型
    'DB_HOST'                   =>  '127.0.0.1', // 服务器地址
    'DB_NAME'                   =>  'district',  // 数据库名
    'DB_USER'                   =>  'root',      // 用户名
    'DB_PWD'                    =>  'root' ,     //密码
    'DB_PREFIX'                 => 'rfz_',
    'DEFAULT_FILTER'            => 'htmlspecialchars',
    'APP_AUTOLOAD_PATH'         =>'@.TagLib',
    'SESSION_AUTO_START'        =>true,
    'USER_AUTH_ON'              =>true,
);
