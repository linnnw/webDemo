import Mock from 'mockjs'

var articles = [];

const Random = Mock.Random;

Mock.mock('msg',getData);


function getData(){


    for (let i = 0; i < 100; i++) {

        let newArticleObject = {
            date: Random.date(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串

            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名

            address: Random.county(true),

            id: i
        }
        articles.push(newArticleObject)

    }

    return {

        articles: articles

    }

}


//删除
Mock.mock('delete',batchremove);
function batchremove(config) {
    let body = JSON.parse(config.body)   //转换为json  .body获取传过来的对象
    let ids = [body.id]
    articles = articles.filter(item => !ids[0].includes(item.id))   //过滤数组中id为传过来id的数组
    // console.log(articles);
    return articles;

}

//新增

Mock.mock('insert',add);
function add(config) {
    let body = JSON.parse(config.body);   //转换为json  .body获取传过来的对象
    // console.log(body);

    articles.unshift(body);
    return articles

}
