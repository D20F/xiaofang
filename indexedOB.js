/**
 * 数据库操作 
 * @param {function} open_dataBase    打开数据库
 * @param {function} delete_dataBase  删除数据库
 * 
 * 表操作
 * @param {function} get_table        获取表对象
 * @param {function} created          创建表
 * @param {function} readAll          遍历表
 * @param {function} add              增加数据
 * @param {function} update           更新数据
 * @param {function} get              获取指定索引数据
 * @param {function} remove           删除指定索引
 * @param {function} addIndex         增加索引
**/

/**
 * 打开数据库  没有就创建      数据库对象  request.result
 * @param {string} name 数据库名称
**/
function open_dataBase(name) {
  var request = window.indexedDB.open(name, 1);
  request.onerror = function (event) { console.log('打开数据库报错',event); };
  request.onupgradeneeded = function (event) {
     console.log('打开数据库,数据库升级',event); 
     created(request.result,'chatrod',false,'name');
  }
  request.onsuccess = function (event) {

    console.log('打开数据库成功',event);
  };
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
}

/**
 * 获取表对象
 * @param {object} database 数据库对象
 * @param {string} table_name 表名
**/
function get_table(database,table_name){
  return database.transaction([table_name], "readwrite").objectStore(table_name);
}
/**
 * 创建表
 * @param {object} database 数据库对象
 * @param {string} table_name 表名
 * @param {boolean} mode 是否使用表自带的自增数字主键  ture代表使用
 * @param {string} index 指定表的主键索引
**/
function created(database,table_name,mode,index){
  // 检测是否已经有这个表
  if (!database.objectStoreNames.contains(table_name)) {
    if(mode){
      // 使用数据库自带的自增数字主键
       database.createObjectStore(table_name, { autoIncrement: true });
    }else{
      // 使用自己数据的属性作为主键   主键必须为唯一值
      database.createObjectStore(table_name, { keyPath: index });
    }
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
  database.transaction(table_name).objectStore(table_name).openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      console.log(cursor);
      cursor.continue();
    } else {
      console.log('没有更多数据了！');
    }
  }
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
}

/**
 * 更新数据
 * @param {object} database 数据库对象
 * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
 * @param {object} data 更新的信息 会更新数据库相同主键的数据如果没找到相同主键则创建一条该数据  { id: 1, name: '李四', age: 35, email: 'lisi.com' }  
**/
function update(database,table_name,data) {
  database.transaction([table_name], "readwrite").objectStore(table_name).put(data)
}

/**
 * 获取指定索引数据
 * @param {object} database 数据库对象
 * @param {string} table_name 表名
 * @param {string} index 索引名称
**/
function get(database,table_name,index) {
  return database.transaction([table_name], "readonly").objectStore(table_name).get(index);
}

/**
 * 删除指定索引
 * @param {object} database 数据库对象
 * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
 * @param {string} index 索引 可是主键也可以是索引  
**/
function remove(database,table_name,index) {
  database.transaction([table_name], "readwrite").objectStore(table_name).delete(index);
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








// const contactPerson = [
  // { 
  //   name: "",
  //   data:[
  //     {
  //       name: "test22222222",
  //       account: "test22222222",
  //       publicKey: "POG6PQgvhfScyVkaofZtDouiobrC37rN7y9udJqpq66bdN4tVtSH"
  //     },
  //   ]
  // },
// ];
// const chatRecord = [
//   { 
//     name: "",
//     data:{
//       name:{
//         name:'',
//         account:'',
//         info:[
//           {
//             id: "2020-4-25 17:32:17",
//             from: "e11111111111",
//             to: "test22222222",
//             content: "dOS9oA==",
//             state: 1,
//             create_time: "2020-4-25 17:32:17"
//           },
//         ],
//         you_info:[],
//         my_info:[],
//       }
//     }
//   },
// ];
