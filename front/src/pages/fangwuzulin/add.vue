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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="房屋名称" prop="fangwumingcheng">
            <el-input v-model="ruleForm.fangwumingcheng" 
                placeholder="房屋名称" clearable :disabled=" false  ||ro.fangwumingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}'  label="房屋类型" prop="fangwuleixing">
            <el-select v-model="ruleForm.fangwuleixing" placeholder="请选择房屋类型" :disabled=" false  ||ro.fangwuleixing" >
              <el-option
                  v-for="(item,index) in fangwuleixingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="房产证" prop="fangchanzheng">
            <file-upload
            tip="点击上传房产证"
            action="file/upload"
            :limit="1"
			:type="3"
            :multiple="true"
            :fileUrls="ruleForm.fangchanzheng?ruleForm.fangchanzheng:''"
            @change="fangchanzhengUploadChange"
            ></file-upload>
          </el-form-item>  
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="城市" prop="chengshi">
            <el-input v-model="ruleForm.chengshi" 
                placeholder="城市" clearable :disabled=" false  ||ro.chengshi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="位置" prop="weizhi">
            <el-input v-model="ruleForm.weizhi" 
                placeholder="位置" clearable :disabled=" false  ||ro.weizhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="朝向" prop="chaoxiang">
            <el-input v-model="ruleForm.chaoxiang" 
                placeholder="朝向" clearable :disabled=" false  ||ro.chaoxiang"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="楼层" prop="louceng">
            <el-input v-model="ruleForm.louceng" 
                placeholder="楼层" clearable :disabled=" false  ||ro.louceng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}'  label="状态" prop="zhuangtai">
            <el-select v-model="ruleForm.zhuangtai" placeholder="请选择状态" :disabled=" false  ||ro.zhuangtai" >
              <el-option
                  v-for="(item,index) in zhuangtaiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="设施" prop="sheshi">
            <el-input v-model="ruleForm.sheshi" 
                placeholder="设施" clearable :disabled=" false  ||ro.sheshi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="租金" prop="zujin">
            <el-input v-model.number="ruleForm.zujin" 
                placeholder="租金" clearable :disabled=" false  ||ro.zujin"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="房东账号" prop="fangdongzhanghao">
            <el-input v-model="ruleForm.fangdongzhanghao" 
                placeholder="房东账号" clearable :disabled=" false  ||ro.fangdongzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="房东姓名" prop="fangdongxingming">
            <el-input v-model="ruleForm.fangdongxingming" 
                placeholder="房东姓名" clearable :disabled=" false  ||ro.fangdongxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="联系电话" prop="lianxidianhua">
            <el-input v-model="ruleForm.lianxidianhua" 
                placeholder="联系电话" clearable :disabled=" false  ||ro.lianxidianhua"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="详情" prop="xiangqing">
            <editor 
                :style='{"padding":"0","boxShadow":"none","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.xiangqing" 
                class="editor" 
                action="file/upload">
            </editor>
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
				fangwumingcheng : false,
				fangwuleixing : false,
				fangwutupian : false,
				fangchanzheng : false,
				chengshi : false,
				weizhi : false,
				chaoxiang : false,
				louceng : false,
				zhuangtai : false,
				sheshi : false,
				zujin : false,
				xiangqing : false,
				fangdongzhanghao : false,
				fangdongxingming : false,
				lianxidianhua : false,
				sfsh : false,
				shhf : false,
				clicknum : false,
				storeupnum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          fangwumingcheng: '',
          fangwuleixing: '',
          fangwutupian: '',
          fangchanzheng: '',
          chengshi: '',
          weizhi: '',
          chaoxiang: '',
          louceng: '',
          zhuangtai: '可租' ,
          sheshi: '',
          zujin: '',
          xiangqing: '',
          fangdongzhanghao: '',
          fangdongxingming: '',
          lianxidianhua: '',
          clicknum: '',
          storeupnum: '',
        },
        fangwuleixingOptions: [],
        zhuangtaiOptions: [],


        rules: {
          fangwumingcheng: [
            { required: true, message: '房屋名称不能为空', trigger: 'blur' },
          ],
          fangwuleixing: [
            { required: true, message: '房屋类型不能为空', trigger: 'blur' },
          ],
          fangwutupian: [
            { required: true, message: '房屋图片不能为空', trigger: 'blur' },
          ],
          fangchanzheng: [
          ],
          chengshi: [
            { required: true, message: '城市不能为空', trigger: 'blur' },
          ],
          weizhi: [
            { required: true, message: '位置不能为空', trigger: 'blur' },
          ],
          chaoxiang: [
          ],
          louceng: [
          ],
          zhuangtai: [
            { required: true, message: '状态不能为空', trigger: 'blur' },
          ],
          sheshi: [
          ],
          zujin: [
            { required: true, message: '租金不能为空', trigger: 'blur' },
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          xiangqing: [
          ],
          fangdongzhanghao: [
          ],
          fangdongxingming: [
          ],
          lianxidianhua: [
            { validator: this.$validate.isMobile, trigger: 'blur' },
          ],
          sfsh: [
          ],
          shhf: [
          ],
          clicknum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          storeupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
		centerType: false,
      };
    },
    computed: {



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
            if(o=='fangchanzheng'){
              this.ruleForm.fangchanzheng = obj[o];
              this.ro.fangchanzheng = true;
              continue;
            }
            if(o=='chengshi'){
              this.ruleForm.chengshi = obj[o];
              this.ro.chengshi = true;
              continue;
            }
            if(o=='weizhi'){
              this.ruleForm.weizhi = obj[o];
              this.ro.weizhi = true;
              continue;
            }
            if(o=='chaoxiang'){
              this.ruleForm.chaoxiang = obj[o];
              this.ro.chaoxiang = true;
              continue;
            }
            if(o=='louceng'){
              this.ruleForm.louceng = obj[o];
              this.ro.louceng = true;
              continue;
            }
            if(o=='zhuangtai'){
              this.ruleForm.zhuangtai = obj[o];
              this.ro.zhuangtai = true;
              continue;
            }
            if(o=='sheshi'){
              this.ruleForm.sheshi = obj[o];
              this.ro.sheshi = true;
              continue;
            }
            if(o=='zujin'){
              this.ruleForm.zujin = obj[o];
              this.ro.zujin = true;
              continue;
            }
            if(o=='xiangqing'){
              this.ruleForm.xiangqing = obj[o];
              this.ro.xiangqing = true;
              continue;
            }
            if(o=='fangdongzhanghao'){
              this.ruleForm.fangdongzhanghao = obj[o];
              this.ro.fangdongzhanghao = true;
              continue;
            }
            if(o=='fangdongxingming'){
              this.ruleForm.fangdongxingming = obj[o];
              this.ro.fangdongxingming = true;
              continue;
            }
            if(o=='lianxidianhua'){
              this.ruleForm.lianxidianhua = obj[o];
              this.ro.lianxidianhua = true;
              continue;
            }
            if(o=='clicknum'){
              this.ruleForm.clicknum = obj[o];
              this.ro.clicknum = true;
              continue;
            }
            if(o=='storeupnum'){
              this.ruleForm.storeupnum = obj[o];
              this.ro.storeupnum = true;
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
            if((json.fangdongzhanghao!=''&&json.fangdongzhanghao) || json.fangdongzhanghao==0){
                this.ruleForm.fangdongzhanghao = json.fangdongzhanghao;
				this.ro.fangdongzhanghao = true;
            }
            if((json.fangdongxingming!=''&&json.fangdongxingming) || json.fangdongxingming==0){
                this.ruleForm.fangdongxingming = json.fangdongxingming;
				this.ro.fangdongxingming = true;
            }
            if((json.lianxidianhua!=''&&json.lianxidianhua) || json.lianxidianhua==0){
                this.ruleForm.lianxidianhua = json.lianxidianhua;
				this.ro.lianxidianhua = true;
            }
          }
        });
        this.$http.get('option/fangwuleixing/fangwuleixing', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.fangwuleixingOptions = res.data.data;
          }
        });
        this.zhuangtaiOptions = "已租,可租".split(',')

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
        this.$http.get(`fangwuzulin/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
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
						this.$http.get('fangwuzulin/list', {
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


								this.$http.post(`fangwuzulin/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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


						this.$http.post(`fangwuzulin/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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
      fangchanzhengUploadChange(fileUrls) {
          this.ruleForm.fangchanzheng = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
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
