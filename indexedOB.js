import store from '../../store/index'

/**
 * 数据库操作 
 * @param {function} open_dataBase              打开数据库            -- 回调
 * @param {function} delete_dataBase            删除数据库            -- 回调
 * 
 * 表操作
 * @param {function} get_table                  获取表对象             -- 同步
 * @param {function} created                    创建表                 -- 回调
 * @param {function} readAll                    遍历表                 -- 同步
 * @param {function} add                        增加数据               -- 回调
 * @param {function} update                     更新数据               -- 回调
 * @param {function} get_index                  获取指定索引数据        -- 同步
 * @param {function} get_index_callback         获取指定索引数据        -- 回调
 * @param {function} get_main                   获取指定自增主键数据    -- 同步
 * @param {function} get_count                  获取此表有多少条信息    -- 同步
 * @param {function} remove                     删除指定索引            -- 回调
 * @param {function} addIndex                   增加索引                -- 回调
 * @param {function} check_list                 检查是否存在表          -- 回调
**/

/**
 * 打开数据库  没有就创建      数据库对象  request.result
 * @param {string} name 数据库名称  
 * @param {number} version 数据库版本 
**/
function open_dataBase(name, version) {
    var request = window.indexedDB.open(name, version);
    request.onerror = function (event) {
        console.log('打开数据库报错',event); 
    };
    // request.onupgradeneeded = function (event) {
    //    console.log('第一次打开数据库，创建表啊',event); 
    // }
    // request.onsuccess = function (event) {
    //     console.log('打开数据库成功',event);
    // };
    return request
  }
  /**
   * 删除数据库 
   * @param {string} name 数据库名称
  **/
  function delete_dataBase(name) {
    var request = window.indexedDB.deleteDatabase(name);
    request.onerror = function (event) { console.log('删除数据库报错'); };
    request.onsuccess  = function (event) { console.log('删除数据库成功'); };
    return request
  }
  /**
   * 关闭数据库 
   * @param {object} database 数据库对象
  **/
  function close(database) {
    return new Promise((resolve,reject)=>{
        database.close();
        resolve('成功关闭')
    })
  }
  
  /**
   * 获取表对象
   * @param {object} database 数据库对象
   * @param {string} table_name 表名
  **/
  function get_table(database,table_name){
    return new Promise((resolve,reject)=>{
        let request = database.transaction([table_name], "readwrite").objectStore(table_name);
        request.onsuccess = function (event) {
            resolve(request.result)
        };
    })
  }
  /**
   * 创建表
   * @param {object} database 数据库对象
   * @param {string} table_name 表名
   * @param {boolean} mode 是否使用表自带的自增数字主键  ture代表使用  --废弃
   * @param {string} main 指定表的主键索引
   * @param {string} index 指定表的索引
  **/
  function created(database,table_name,main,index){
    // 检测是否已经有这个表
    if (!database.objectStoreNames.contains(table_name)) {
        // 使用自己数据的属性作为主键,主键必须为唯一值 使用数据库自带的自增数字主键
         var objectStore = database.createObjectStore(table_name, { keyPath: main, autoIncrement: true });
         objectStore.createIndex(index, index, { unique: true });
    }else{
      console.log('已有此',table_name,'了')
    }
  }
  
  /**
   * 遍历表       
   * @param {object} database 数据库对象
   * @param {string} table_name 表名
  **/
  function readAll(database,table_name) {
    return new Promise((resolve,reject)=>{
        var data = [];
        var objectStore = database.transaction([table_name], "readonly").objectStore(table_name);
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                // console.log(cursor);
                data.push(cursor.value)
                cursor.continue();
            } else {
                // console.log('没有更多数据了！',data);
                resolve(data)
            }
        }
    })
  }
  
  
  /**
   * 增加数据
   * @param {object} database 数据库对象
   * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
   * @param {object} data 增加的信息  
  **/
  function add(database,table_name,data) {
    let request = database.transaction([table_name], "readwrite").objectStore(table_name)
    request.add(data);
    request.onsuccess = function (event) {
      console.log('数据写入成功');
    };
    request.onerror = function (event) {
      console.log('数据写入失败');
    }
    return request
  }
  
  /**
   * 更新数据
   * @param {object} database 数据库对象
   * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
   * @param {object} data 更新的信息 会更新数据库相同主键的数据如果没找到相同主键则创建一条该数据  { id: 1, name: '李四', age: 35, email: 'lisi.com' }  
  **/
  function update(database,table_name,data) {
    let request = database.transaction([table_name], "readwrite").objectStore(table_name).put(data);
    request.onsuccess = function (event) {
        console.log('数据更新成功');
    };
    request.onerror = function (event) {
        console.log('数据更新失败');
    }
    return request
  }
  
  /**
   * 获取指定自增主键数据
   * @param {object} database 数据库对象
   * @param {string} table_name 表名
   * @param {string} index 主键名称
  **/
  function get_main(database,table_name,index) {
    return new Promise((resolve,reject)=>{
        let request = database.transaction([table_name], "readonly").objectStore(table_name).get(index);
        request.onsuccess = function (event) {
            resolve(request.result);
        };
    })
  }
  /**
   * 获取指定索引数据
   * @param {object} database 数据库对象
   * @param {string} table_name 表名
   * @param {string} indexName 索引名称
   * @param {string} index 索引名称
  **/
  function get_index(database,table_name,indexName,index) {
    return new Promise((resolve,reject)=>{
        let request = database.transaction([table_name], "readonly").objectStore(table_name).index(indexName).get(index);
        request.onsuccess = function (event) {
            resolve(request.result);
        };
    })
  }
  /**
   * 获取指定索引数据
   * @param {object} database 数据库对象
   * @param {string} table_name 表名
   * @param {string} indexName 索引名称
   * @param {string} index 索引名称
  **/
  function get_index_callback(database,table_name,indexName,index) {
    let request = database.transaction([table_name], "readonly").objectStore(table_name).index(indexName).get(index);
    return request
  }
  /**
   * 获取此表有多少条信息
   * @param {object} database 数据库对象
   * @param {string} table_name 表名
  **/
  function get_count(database,table_name) {
    return new Promise((resolve,reject)=>{
        let request = database.transaction([table_name], "readonly").objectStore(table_name).count(); 
        request.onsuccess = function (event) {
            resolve(request.result)
        };
    })
  }
  
  /**
   * 删除指定索引
   * @param {object} database 数据库对象
   * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
   * @param {string} index 索引 可是主键也可以是索引  
  **/
  function remove(database,table_name,index) {
     let request = database.transaction([table_name], "readwrite").objectStore(table_name).delete(index);
     return request
  }
  
  /**
   * 增加索引
   * @param {object} database 数据库对象
   * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
   * @param {string} index 索引名  
  **/
  function addIndex(database,table_name) {
    // unique 代表索引是否是唯一值 true真 false假
    database.transaction([table_name], 'readonly').objectStore(table_name).createIndex(index, index, { unique: true });
  }

  /**
   * 检查是否存在表
   * @param {object} database 数据库对象
   * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
  **/
  function check_list(database,table_name) {
    // unique 代表索引是否是唯一值 true真 false假
    return database.objectStoreNames.contains(table_name)
  }
  

export default {
    open_dataBase,
    delete_dataBase,
    get_table,
    created,
    readAll,
    add,
    update,
    get_index,
    get_index_callback,
    get_main,
    remove,
    addIndex,
    get_count,
    check_list,
    close,
};



//                   --  联系人表
// 账号名作为数据库
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
//                   --  聊天数据表账号名 --- 聊天数据  
