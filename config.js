"use strict";
var config =  {
     //默认字体颜色
    fontColor: '#47280c',
    //背景图片
    background:'images/bg-00.jpg',

    // title: '',
    // titleFontSize: '60px',
    // titleColor:'#fff',

    // subTitle: '',
    // subTitleFontSize: '50px',
    // subTitleColor:'#fff',
    
    rewardTitleFontSize:'56px',
    rewardTitleColor:'#fff',
    rewardAreaTop: "", //10%
    rewardWelcomeMessage: "",

    onceEndMessage:"本轮抽奖结束，更多精彩在下一轮！",
    allEndMessage:"抽奖全部结束，新年快，恭喜发财!",

    //抽奖滚动时长 单位秒，自动停止,0表示只能手动停止
    //本系统手动停止始终存在
    rollingTime:0, 

    resultPath:'C:/ZFile/luckyDraw', //结果截图保存路径
    tasks:[
        //一个任务可以添加多抽奖活动，
        //每个抽奖活动消费一定数量的人员，
        //消费的人员不出现在后面的活动中
        //每个任务使用 users.txt中的名单
        {
            title:'爱丁顿年会抽奖',
            except:[], //排除users.txt中的名单
            rewards:[
                {
                    title:'六等奖',  //奖项名称
                    count:15,     //奖项数量
                    capacity:8,//一次抽取数量[1，count]
                    namesOfLine:4 //获奖区每行显示几个名字 [1,2,3,4,6,12]
                },
                {
                    title:'五等奖',  //奖项名称
                    count:12,     //奖项数量
                    capacity:6,//一次抽取数量[1，count]
                    namesOfLine:4//获奖区每行显示几个名字 [1,2,3,4,6,12]
                },
                {
                    title:'四等奖',  //奖项名称
                    count:10,     //奖项数量
                    capacity:5,//一次抽取数量[1，count]
                    namesOfLine:4  //获奖区每行显示几个名字 [1,2,3,4,6,12]
                },
                {
                    title:'三等奖', //奖项名称
                    count:6,     //奖项数量
                    capacity:6,//一次抽取数量[1，count]
                    namesOfLine:4//获奖区每行显示几个名字 [1,2,3,4,6,12]
                },
                {
                    title:'二等奖',  //奖项名称
                    count:3,//奖项数量
                    capacity:3,//一次抽取数量[1，count]
                    namesOfLine:3   //获奖区每行显示几个名字 [1,2,3,4,6,12]
                },
                {
                    title:'一等奖', //奖项名称
                    count:1,     //奖项数量
                    capacity:1,//一次抽取数量[1，count]
                    namesOfLine:1    //获奖区每行显示几个名字 [1,2,3,4,6,12]
                }
            ]
        },
        
        // {
        //     title:'幸运百分百',
        //     except:['胡歌','李易峰'], //排除users.txt中的名单
        //     rewards:[
        //         {
        //             title:'幸运奖', //奖项名称
        //             count:1,     //奖项数量
        //             capacity:1,  //一次抽取数量[1，count]
        //             namesOfLine:1 //获奖区每行显示几个名字 [1,2,3,4,6,12]
        //         }
        //     ]
        // }
    ]

}
module.exports = {
    config:config
}