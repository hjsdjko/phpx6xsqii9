<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231121/4577495c378443ad95aab1ad5fe253e2.png)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"flex-end"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3)","margin":"0 100px","borderRadius":"0","background":"#fff","width":"40%","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"0 auto 20px","color":"#000","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"22px","textShadow":"none","fontWeight":"500"}'>在线租房管理系统注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangdong'" prop="fangdongzhanghao">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('fangdongzhanghao')?'required':''">房东账号：</div>
				<el-input v-model="registerForm.fangdongzhanghao"  placeholder="请输入房东账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangdong'" prop="mima">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangdong'" prop="mima2">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangdong'" prop="fangdongxingming">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('fangdongxingming')?'required':''">房东姓名：</div>
				<el-input v-model="registerForm.fangdongxingming"  placeholder="请输入房东姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangdong'" prop="xingbie">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in fangdongxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangdong'" prop="zhaopian">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('zhaopian')?'required':''">照片：</div>
                <file-upload
					tip="点击上传照片"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.zhaopian?registerForm.zhaopian:''"
					@change="fangdongzhaopianUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangdong'" prop="lianxidianhua">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('lianxidianhua')?'required':''">联系电话：</div>
				<el-input v-model="registerForm.lianxidianhua"  placeholder="请输入联系电话" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="yonghuming">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('yonghuming')?'required':''">用户名：</div>
				<el-input v-model="registerForm.yonghuming"  placeholder="请输入用户名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="mima2">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="xingming">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('xingming')?'required':''">姓名：</div>
				<el-input v-model="registerForm.xingming"  placeholder="请输入姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="xingbie">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yonghuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="touxiang">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yonghutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="shouji">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('shouji')?'required':''">手机：</div>
				<el-input v-model="registerForm.shouji"  placeholder="请输入手机" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yonghu'" prop="shenfenzheng">
				<div v-if="true" :style='{"width":"120px","padding":"0 5px 0 0","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('shenfenzheng')?'required':''">身份证：</div>
				<el-input v-model="registerForm.shenfenzheng"  placeholder="请输入身份证" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"none","margin":"20px auto 5px","color":"#fff","display":"block","outline":"none","borderRadius":"5px","background":"#000","width":"80%","fontSize":"16px","height":"40px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"none","margin":"20px auto 5px","color":"#fff","display":"block","outline":"none","borderRadius":"5px","background":"#000","width":"80%","fontSize":"16px","height":"40px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","margin":"0 auto","color":"#9e9e9e","textAlign":"center","display":"block","width":"80%","lineHeight":"2","fontSize":"12px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            fangdongxingbieOptions: [],
            yonghuxingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='fangdong'){
				this.registerForm = {
					fangdongzhanghao: '',
					mima: '',
					mima2: '',
					fangdongxingming: '',
					xingbie: '',
					zhaopian: '',
					lianxidianhua: '',
				}
			}
			if(this.tableName=='yonghu'){
				this.registerForm = {
					yonghuming: '',
					mima: '',
					mima2: '',
					xingming: '',
					xingbie: '',
					touxiang: '',
					shouji: '',
					shenfenzheng: '',
				}
			}
			if ('fangdong' == this.tableName) {
				this.requiredRules.fangdongzhanghao = [{ required: true, message: '请输入房东账号', trigger: 'blur' }]
			}
			if ('fangdong' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('fangdong' == this.tableName) {
				this.requiredRules.lianxidianhua = [{ required: true, message: '请输入联系电话', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.yonghuming = [{ required: true, message: '请输入用户名', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.xingming = [{ required: true, message: '请输入姓名', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.shouji = [{ required: true, message: '请输入手机', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('fangdong' == this.tableName) {
			this.rules.fangdongzhanghao = [{ required: true, message: '请输入房东账号', trigger: 'blur' }];
		  }
		  if ('fangdong' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
			this.fangdongxingbieOptions = "男,女".split(',');
		  if ('fangdong' == this.tableName) {
			this.rules.lianxidianhua = [{ required: true, validator: this.$validate.isMobileNotNull, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.yonghuming = [{ required: true, message: '请输入用户名', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.xingming = [{ required: true, message: '请输入姓名', trigger: 'blur' }];
		  }
			this.yonghuxingbieOptions = "男,女".split(',');
		  if ('yonghu' == this.tableName) {
			this.rules.shouji = [{ required: true, validator: this.$validate.isMobileNotNull, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.shenfenzheng = [{ required: true, validator: this.$validate.isIdCard, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      fangdongzhaopianUploadChange(fileUrls) {
          this.registerForm.zhaopian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      yonghutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.fangdongzhanghao) && `fangdong` == this.tableName){
					this.$message.error(`房东账号不能为空`);
					return
				}
               if(`fangdong` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `fangdong` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.lianxidianhua) && `fangdong` == this.tableName){
					this.$message.error(`联系电话不能为空`);
					return
				}
					if(`fangdong` == this.tableName && this.registerForm.lianxidianhua &&(!this.$validate.isMobile2(this.registerForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
				if((!this.registerForm.yonghuming) && `yonghu` == this.tableName){
					this.$message.error(`用户名不能为空`);
					return
				}
               if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `yonghu` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.xingming) && `yonghu` == this.tableName){
					this.$message.error(`姓名不能为空`);
					return
				}
				if((!this.registerForm.shouji) && `yonghu` == this.tableName){
					this.$message.error(`手机不能为空`);
					return
				}
					if(`yonghu` == this.tableName && this.registerForm.shouji &&(!this.$validate.isMobile2(this.registerForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
					if(`yonghu` == this.tableName && this.registerForm.shenfenzheng &&(!this.$validate.isIdCard2(this.registerForm.shenfenzheng))){
						this.$message.error(`身份证应输入身份证格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20231121/4577495c378443ad95aab1ad5fe253e2.png);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 0;
						padding: 0 10px;
						box-shadow: none;
						outline: none;
						color: #000;
						width: 350px;
						font-size: 14px;
						border-width: 0 0 2px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 0;
						padding: 0 10px;
						box-shadow: none;
						outline: none;
						color: #000;
						width: 350px;
						font-size: 14px;
						border-width: 0 0 2px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 0;
						padding: 0 10px 0 30px;
						box-shadow: none;
						outline: none;
						color: #000;
						width: 350px;
						font-size: 14px;
						border-width: 0 0 2px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 0;
						padding: 0 10px 0 30px;
						box-shadow: none;
						outline: none;
						color: #000;
						width: 350px;
						font-size: 14px;
						border-width: 0 0 2px;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px solid #D7D7D7;
		  		  cursor: pointer;
		  		  border-radius: 0;
		  		  color: #000;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px solid #D7D7D7;
		  		  cursor: pointer;
		  		  border-radius: 0;
		  		  color: #000;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px solid #D7D7D7;
		  		  cursor: pointer;
		  		  border-radius: 0;
		  		  color: #000;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 110px;
				position: absolute;
				content: "*";
			}
</style>
