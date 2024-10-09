import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import fangdongList from '../pages/fangdong/list'
import fangdongDetail from '../pages/fangdong/detail'
import fangdongAdd from '../pages/fangdong/add'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import fangwuleixingList from '../pages/fangwuleixing/list'
import fangwuleixingDetail from '../pages/fangwuleixing/detail'
import fangwuleixingAdd from '../pages/fangwuleixing/add'
import fangwuzulinList from '../pages/fangwuzulin/list'
import fangwuzulinDetail from '../pages/fangwuzulin/detail'
import fangwuzulinAdd from '../pages/fangwuzulin/add'
import zufangjiluList from '../pages/zufangjilu/list'
import zufangjiluDetail from '../pages/zufangjilu/detail'
import zufangjiluAdd from '../pages/zufangjilu/add'
import zulinhetongList from '../pages/zulinhetong/list'
import zulinhetongDetail from '../pages/zulinhetong/detail'
import zulinhetongAdd from '../pages/zulinhetong/add'
import kanfangjiluList from '../pages/kanfangjilu/list'
import kanfangjiluDetail from '../pages/kanfangjilu/detail'
import kanfangjiluAdd from '../pages/kanfangjilu/add'
import lianxijiluList from '../pages/lianxijilu/list'
import lianxijiluDetail from '../pages/lianxijilu/detail'
import lianxijiluAdd from '../pages/lianxijilu/add'
import tuifangjiluList from '../pages/tuifangjilu/list'
import tuifangjiluDetail from '../pages/tuifangjilu/detail'
import tuifangjiluAdd from '../pages/tuifangjilu/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'fangdong',
					component: fangdongList
				},
				{
					path: 'fangdongDetail',
					component: fangdongDetail
				},
				{
					path: 'fangdongAdd',
					component: fangdongAdd
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'fangwuleixing',
					component: fangwuleixingList
				},
				{
					path: 'fangwuleixingDetail',
					component: fangwuleixingDetail
				},
				{
					path: 'fangwuleixingAdd',
					component: fangwuleixingAdd
				},
				{
					path: 'fangwuzulin',
					component: fangwuzulinList
				},
				{
					path: 'fangwuzulinDetail',
					component: fangwuzulinDetail
				},
				{
					path: 'fangwuzulinAdd',
					component: fangwuzulinAdd
				},
				{
					path: 'zufangjilu',
					component: zufangjiluList
				},
				{
					path: 'zufangjiluDetail',
					component: zufangjiluDetail
				},
				{
					path: 'zufangjiluAdd',
					component: zufangjiluAdd
				},
				{
					path: 'zulinhetong',
					component: zulinhetongList
				},
				{
					path: 'zulinhetongDetail',
					component: zulinhetongDetail
				},
				{
					path: 'zulinhetongAdd',
					component: zulinhetongAdd
				},
				{
					path: 'kanfangjilu',
					component: kanfangjiluList
				},
				{
					path: 'kanfangjiluDetail',
					component: kanfangjiluDetail
				},
				{
					path: 'kanfangjiluAdd',
					component: kanfangjiluAdd
				},
				{
					path: 'lianxijilu',
					component: lianxijiluList
				},
				{
					path: 'lianxijiluDetail',
					component: lianxijiluDetail
				},
				{
					path: 'lianxijiluAdd',
					component: lianxijiluAdd
				},
				{
					path: 'tuifangjilu',
					component: tuifangjiluList
				},
				{
					path: 'tuifangjiluDetail',
					component: tuifangjiluDetail
				},
				{
					path: 'tuifangjiluAdd',
					component: tuifangjiluAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
