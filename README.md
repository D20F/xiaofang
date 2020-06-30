# 

牛牛
3张是10的倍数 2张10倍数
牛七
3张是10的倍数 2张是7点

牛牛 > 牛9 > 牛8 .. > 牛1 > 没牛

相同牌型庄家赢

百人牛牛
0 - 50 
一人一张发牌顺序
4人一人5牌 庄家5张
规则
下方胜负趋势
百人只有标准模式

两人牛牛
简单模式 标准模式




庄家
{
    cardtype:{   最大牌型
        type        牌型
        multiple    倍数
        Weights     权重
    },
    单牌数组:[
        {
            pukePoints  扑克点数
            Suit        花色
            Points      换算实际点数
        }
    ]
}




闲家 
[
    {
        cardtype:{   最大牌型
            type        牌型
            multiple    倍数
            Weights     权重
        },
        singleCardArr:[  单牌数组
            {
                pukePoints  扑克点数
                Suit        花色
                Points      换算实际点数
            }
        ]
    }
]