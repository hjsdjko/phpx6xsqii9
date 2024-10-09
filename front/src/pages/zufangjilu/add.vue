<template>
<div :style='{"width":"80%","padding":"20px","margin":"10px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"width":"100%","position":"relative"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="订单编号" prop="dingdanbianhao">
              <el-input v-model="ruleForm.dingdanbianhao" placeholder="订单编号" disabled></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="房屋名称" prop="fangwumingcheng">
            <el-input v-model="ruleForm.fangwumingcheng" 
                placeholder="房屋名称" clearable :disabled=" false  ||ro.fangwumingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="房屋类型" prop="fangwuleixing">
            <el-input v-model="ruleForm.fangwuleixing" 
                placeholder="房屋类型" clearable :disabled=" false  ||ro.fangwuleixing"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="房屋图片" v-if="type!='cross' || (type=='cross' && !ro.fangwutupian)" prop="fangwutupian">
            <file-upload
            tip="点击上传房屋图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.fangwutupian?ruleForm.fangwutupian:''"
            @change="fangwutupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="房屋图片" prop="fangwutupian">
                <img v-if="ruleForm.fangwutupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.fangwutupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.fangwutupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="位置" prop="weizhi">
            <el-input v-model="ruleForm.weizhi" 
                placeholder="位置" clearable :disabled=" false  ||ro.weizhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="楼层" prop="louceng">
            <el-input v-model="ruleForm.louceng" 
                placeholder="楼层" clearable :disabled=" false  ||ro.louceng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="房东账号" prop="fangdongzhanghao">
            <el-input v-model="ruleForm.fangdongzhanghao" 
                placeholder="房东账号" clearable :disabled=" false  ||ro.fangdongzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="联系电话" prop="lianxidianhua">
            <el-input v-model="ruleForm.lianxidianhua" 
                placeholder="联系电话" clearable :disabled=" false  ||ro.lianxidianhua"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="租金" prop="zujin">
            <el-input v-model.number="ruleForm.zujin" 
                placeholder="租金" clearable :disabled="true  ||ro.zujin"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="租赁月数" prop="zulinyueshu">
            <el-input v-model.number="ruleForm.zulinyueshu" 
                placeholder="租赁月数" clearable :disabled=" false  ||ro.zulinyueshu"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="租房押金" prop="zufangyajin">
            <el-input v-model.number="ruleForm.zufangyajin" 
                placeholder="租房押金" clearable :disabled="true  ||ro.zufangyajin"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="订单金额" prop="dingdanjine">
              <el-input v-model="dingdanjine" placeholder="订单金额" disabled></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}'  label="租房状态" prop="zufangzhuangtai">
            <el-select v-model="ruleForm.zufangzhuangtai" placeholder="请选择租房状态" :disabled="true  ||ro.zufangzhuangtai" >
              <el-option
                  v-for="(item,index) in zufangzhuangtaiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="用户名" prop="yonghuming">
            <el-input v-model="ruleForm.yonghuming" 
                placeholder="用户名" clearable :disabled=" false  ||ro.yonghuming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="手机" prop="shouji">
            <el-input v-model="ruleForm.shouji" 
                placeholder="手机" clearable :disabled=" false  ||ro.shouji"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="身份证" prop="shenfenzheng">
            <el-input v-model="ruleForm.shenfenzheng" 
                placeholder="身份证" clearable :disabled=" false  ||ro.shenfenzheng"></el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"5px","background":"#57A7A5","width":"128px","lineHeight":"40px","fontSize":"16px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"none","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"rgba(64, 158, 255, 1)","borderRadius":"5px","background":"#9E9E9E","width":"128px","lineHeight":"40px","fontSize":"16px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				dingdanbianhao : false,
				fangwumingcheng : false,
				fangwuleixing : false,
				fangwutupian : false,
				weizhi : false,
				louceng : false,
				fangdongzhanghao : false,
				lianxidianhua : false,
				zujin : false,
				zulinyueshu : false,
				zufangyajin : false,
				dingdanjine : false,
				zufangzhuangtai : false,
				yonghuming : false,
				shouji : false,
				shenfenzheng : false,
				shhf : false,
				ispay : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          dingdanbianhao: this.getUUID(),
          fangwumingcheng: '',
          fangwuleixing: '',
          fangwutupian: '',
          weizhi: '',
          louceng: '',
          fangdongzhanghao: '',
          lianxidianhua: '',
          zujin: '',
          zulinyueshu: '',
          zufangyajin: Number('1000') ,
          dingdanjine: '',
          zufangzhuangtai: '未退房' ,
          yonghuming: '',
          shouji: '',
          shenfenzheng: '',
          ispay: '',
        },
        zufangzhuangtaiOptions: [],


        rules: {
          dingdanbianhao: [
          ],
          fangwumingcheng: [
          ],
          fangwuleixing: [
          ],
          fangwutupian: [
          ],
          weizhi: [
          ],
          louceng: [
          ],
          fangdongzhanghao: [
          ],
          lianxidianhua: [
            { validator: this.$validate.isMobile, trigger: 'blur' },
          ],
          zujin: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          zulinyueshu: [
            { required: true, message: '租赁月数不能为空', trigger: 'blur' },
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          zufangyajin: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          dingdanjine: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          zufangzhuangtai: [
          ],
          yonghuming: [
          ],
          shouji: [
          ],
          shenfenzheng: [
          ],
          shhf: [
          ],
          ispay: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



        dingdanjine:{

            get: function () {
                return 1*this.ruleForm.zujin*this.ruleForm.zulinyueshu+parseFloat(this.ruleForm.zufangyajin==""?0:this.ruleForm.zufangyajin)
            }
        },
    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='dingdanbianhao'){
              this.ruleForm.dingdanbianhao = obj[o];
              this.ro.dingdanbianhao = true;
              continue;
            }
            if(o=='fangwumingcheng'){
              this.ruleForm.fangwumingcheng = obj[o];
              this.ro.fangwumingcheng = true;
              continue;
            }
            if(o=='fangwuleixing'){
              this.ruleForm.fangwuleixing = obj[o];
              this.ro.fangwuleixing = true;
              continue;
            }
            if(o=='fangwutupian'){
              this.ruleForm.fangwutupian = obj[o].split(",")[0];
              this.ro.fangwutupian = true;
              continue;
            }
            if(o=='weizhi'){
              this.ruleForm.weizhi = obj[o];
              this.ro.weizhi = true;
              continue;
            }
            if(o=='louceng'){
              this.ruleForm.louceng = obj[o];
              this.ro.louceng = true;
              continue;
            }
            if(o=='fangdongzhanghao'){
              this.ruleForm.fangdongzhanghao = obj[o];
              this.ro.fangdongzhanghao = true;
              continue;
            }
            if(o=='lianxidianhua'){
              this.ruleForm.lianxidianhua = obj[o];
              this.ro.lianxidianhua = true;
              continue;
            }
            if(o=='zujin'){
              this.ruleForm.zujin = obj[o];
              this.ro.zujin = true;
              continue;
            }
            if(o=='zulinyueshu'){
              this.ruleForm.zulinyueshu = obj[o];
              this.ro.zulinyueshu = true;
              continue;
            }
            if(o=='zufangyajin'){
              this.ruleForm.zufangyajin = obj[o];
              this.ro.zufangyajin = true;
              continue;
            }
            if(o=='dingdanjine'){
              this.ruleForm.dingdanjine = obj[o];
              this.ro.dingdanjine = true;
              continue;
            }
            if(o=='zufangzhuangtai'){
              this.ruleForm.zufangzhuangtai = obj[o];
              this.ro.zufangzhuangtai = true;
              continue;
            }
            if(o=='yonghuming'){
              this.ruleForm.yonghuming = obj[o];
              this.ro.yonghuming = true;
              continue;
            }
            if(o=='shouji'){
              this.ruleForm.shouji = obj[o];
              this.ro.shouji = true;
              continue;
            }
            if(o=='shenfenzheng'){
              this.ruleForm.shenfenzheng = obj[o];
              this.ro.shenfenzheng = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.yonghuming!=''&&json.yonghuming) || json.yonghuming==0){
                this.ruleForm.yonghuming = json.yonghuming;
				this.ro.yonghuming = true;
            }
            if((json.shouji!=''&&json.shouji) || json.shouji==0){
                this.ruleForm.shouji = json.shouji;
				this.ro.shouji = true;
            }
            if((json.shenfenzheng!=''&&json.shenfenzheng) || json.shenfenzheng==0){
                this.ruleForm.shenfenzheng = json.shenfenzheng;
				this.ro.shenfenzheng = true;
            }
          }
        });
        this.zufangzhuangtaiOptions = "已退房,未退房".split(',')

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`zufangjilu/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
		this.ruleForm.ispay = '未支付'
			if(this.ruleForm.dingdanbianhao){
				this.ruleForm.dingdanbianhao = String(this.ruleForm.dingdanbianhao)
			}
			this.ruleForm.dingdanjine = this.dingdanjine
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('zufangjilu/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`zufangjilu/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`zufangjilu/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      fangwutupianUploadChange(fileUrls) {
          this.ruleForm.fangwutupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #000;
	  font-weight: 500;
	  width: 100px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 100px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #E2E3E5;
	  border-radius: 0;
	  padding: 0 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 500px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #E2E3E5;
	  border-radius: 0;
	  padding: 0 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 500px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #E2E3E5;
	  border-radius: 0;
	  padding: 0 10px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 500px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #E2E3E5;
	  border-radius: 0;
	  padding: 0 10px 0 30px;
	  box-shadow: none;
	  outline: none;
	  color: none;
	  width: 500px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #E2E3E5;
	  cursor: pointer;
	  border-radius: 0;
	  color: #000;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #E2E3E5;
	  cursor: pointer;
	  border-radius: 0;
	  color: #000;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #E2E3E5;
	  cursor: pointer;
	  border-radius: 0;
	  color: #000;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #E2E3E5;
	  border-radius: 0;
	  padding: 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 500px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
