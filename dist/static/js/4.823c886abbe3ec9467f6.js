webpackJsonp([4],{"7rqY":function(e,t){},wd9o:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=l("mtWM"),a={data:function(){return{loading:!1,score:"",id:"",activeIndex:"3",Form:{},activeName:"one",sys_sshy:this.$route.params.data.sys_sshy,sys_sshy_qt:this.$route.params.data.sys_sshy_qt,sys_xmlx:this.$route.params.data.sys_xmlx,sys_xtjg:this.$route.params.data.sys_xtjg,sys_name:this.$route.params.data.sys_name,sys_unit:this.$route.params.data.sys_unit,sys_xtjs:this.$route.params.data.sys_xtjs,sys_dbjb:this.$route.params.data.sys_dbjb,sys_mpsc:this.$route.params.data.sys_mpsc,sys_mmzd:this.$route.params.data.sys_mmzd,sys_ysbs:this.$route.params.data.sys_ysbs,sys_rzys:this.$route.params.data.sys_rzys,sys_djbh:this.$route.params.data.sys_djbh,sys_dwdz:this.$route.params.data.sys_dwdz,sys_dbsj:this.$route.params.data.sys_dbsj,sys_sxsj:this.$route.params.data.sys_sxsj,sys_cpjg:this.$route.params.data.sys_cpjg,dynamicYwyyForm:this.$route.params.data.dynamicYwyyForm,sys_rzys_disableb:Boolean(this.$route.params.data.sys_ysbs-1),mpjb_fwd:this.$route.params.data.mpjb_fwd,mpjb_ydd:this.$route.params.data.mpjb_ydd,xtyhqk:this.$route.params.data.sys_xtyh,xtyhqk_yh_options:[{value:"1",label:"运维人员"},{value:"2",label:"系统管理员"},{value:"3",label:"普通用户"},{value:"4",label:"公众用户"}],xtyhqk_dlfs_options:[{value:"1",label:"PC浏览器"},{value:"2",label:"PC客户端"},{value:"3",label:"手机APP"},{value:"4",label:"微信小程序"},{value:"5",label:"SSH后台登录"}],xtyhqk_sfrz_options:[{value:"1",label:"U盘证书"},{value:"2",label:"用户名+口令"},{value:"3",label:"手机短信"},{value:"4",label:"邮箱验证"},{value:"5",label:"直接访问，无需认证"}],xtyhqk_szwl_options:[{value:"1",label:"互联网"},{value:"2",label:"政务外网"},{value:"3",label:"专网"},{value:"4",label:"内网"}],wlhhj:this.$route.params.data.sys_wlhhj,wlhhj_sfrz_options:[{value:"1",label:"用户名+口令"},{value:"2",label:"IC卡"},{value:"3",label:"U盘证书"},{value:"4",label:"手机短信"},{value:"5",label:"生物技术 "},{value:"6",label:"人工登记"}],wlhtx:this.$route.params.data.sys_wlhtx,wlhtx_type_options:[{value:"1",label:"互联网"},{value:"2",label:"内网"},{value:"3",label:"专网"},{value:"4",label:"政务外网"}],wlhtx_txzt_options:[{value:"1",label:"运维人员"},{value:"2",label:"PC浏览器"},{value:"3",label:"PC-客户端"},{value:"4",label:"移动APP"},{value:"5",label:"微信小程序"}],wlhtx_sfrz_options:[{value:"1",label:"U盘证书"},{value:"2",label:"用户名+口令"},{value:"3",label:"手机短信"},{value:"4",label:"邮箱验证"},{value:"5",label:"直接访问，无需认"},{value:"6",label:"服务器证书"},{value:"7",label:"设备证书"}],sbhjs_fwq:this.$route.params.data.sys_fwq,sbhjs_sfrz_options:[{value:"1",label:"用户名+口令"},{value:"2",label:"U盘证书"},{value:"3",label:"生物识别"},{value:"4",label:"手机短信"}],sbhjs_zysb:this.$route.params.data.sys_sbhjs,sbhjs_type_options:[{value:"1",label:"密码产品/密码设备"},{value:"2",label:"具有密码功能的网络及安全设备"},{value:"3",label:"采用密码技术的其他产品"},{value:"4",label:"没有密码功能的网络及安全设备"},{value:"5",label:"虚拟设备和系统"}],yyhsj_ywyy_zysj:this.$route.params.data.sys_ywyy,yyhsj_ywyy_zysjqk:this.$route.params.data.sys_zysj,zysjqk_sjlx_options:[{value:"1",label:"鉴别数据"},{value:"2",label:"重要业务数据"},{value:"3",label:"重要审计数据"},{value:"4",label:"个人敏感信息"},{value:"5",label:"法律法规规定的其他重要数据"},{value:"6",label:"访问控制信息"}],sbqd:this.$route.params.data.sbqd}},methods:{submit:function(){var e=this;this.loading=!0,s.a.post("/api/download",{data:{sys_name:this.sys_name,sys_unit:this.sys_unit,sys_sshy:this.sys_sshy,sys_sshy_qt:this.sys_sshy_qt,sys_xmlx:this.sys_xmlx,sys_xtjg:this.sys_xtjg,sys_xtjs:this.sys_xtjs,sys_dbjb:this.sys_dbjb,sys_mpsc:this.sys_mpsc,sys_mmzd:this.sys_mmzd,sys_ysbs:this.sys_ysbs,sys_djbh:this.sys_djbh,sys_dwdz:this.sys_dwdz,sys_sxsj:this.sys_sxsj,sys_dbsj:this.sys_dbsj,sys_cpjg:this.sys_cpjg,sys_rzys:this.sys_rzys_disableb?3:this.sys_rzys,mpjb_fwd:this.mpjb_fwd,mpjb_ydd:this.mpjb_ydd,sys_xtyh:this.xtyhqk,sys_wlhhj:this.wlhhj,sys_wlhtx:this.wlhtx,sys_fwq:this.sbhjs_fwq,sys_sbhjs:this.sbhjs_zysb,sys_ywyy:this.yyhsj_ywyy_zysj,sys_zysj:this.yyhsj_ywyy_zysjqk,sbqd:this.sbqd}},{responseType:"blob",headers:{token:window.sessionStorage.token}}).then(function(t){e.loading=!1;var l=document.createElement("a"),s=t.data;l.download=e.sys_name+"方案.docx",l.href=URL.createObjectURL(s),l.click()}).catch(function(t){e.loading=!1,alert("通信错误，请联系管理员")})},dynamicYwyyChange:function(e,t){this.dynamicYwyyForm.ywyy.find(function(t){return t.key===e}).value=t},removeDomain:function(e){var t=this.dynamicYwyyForm.ywyy.indexOf(e);-1!==t&&this.dynamicYwyyForm.ywyy.splice(t,1)},addDomain:function(){this.dynamicYwyyForm.ywyy.push({value:"",key:""})},handlextyhqk:function(){this.xtyhqk.push({ywyy:"",yh:"",dlfs:["1"],sfrz:["2"],szwl:["1","4"],sl:1})},handlewlhhj:function(){this.wlhhj.push({jfmc:"",jflx:"2",mj:"2",sfrz:["2"],spjk:"2",zjsb:"1"})},handlewlhtx:function(){this.wlhtx.push({type:"",txzt:"",sfrz:["2"],zysj:"1",sl:"",sm:"",cpdx:""})},handlesbhjsfwq:function(){this.sbhjs_fwq.push({sbmc:"",czxt:"1",sjk:"2",sl:"1",ppxh:"",ycyw:"1",sfrz:["1"],blj:"1"})},handlesbhjszysb:function(){this.sbhjs_zysb.push({type:"",sbmc:"",ppxh:"",sl:"1",gmsf:"2",smzs:"2",ycyw:"1",sfrz:["1"],blj:"1"})},handleyyhsjywyy:function(){this.yyhsj_ywyy_zysj.push({ywyy:"",gnms:"",fwfs:"1",bkfr:"1",jtqk1:"",dzqm:"1",jtqk2:""})},handleyyhsjzysj:function(){this.yyhsj_ywyy_zysjqk.push({ywyy:"",sjlx:"",sjnr:"",bhxq:"机密性、完整性、不可否认性",ccjm:"3",sjl:"",csjm:"4",ll:""})},handleSelect:function(e,t){var l=this;if(1==e){var s=this;this.$confirm("您正在离开此界面，是否需要保存？（点击右上角关闭为直接离开）","提示",{confirmButtonText:"帮我保存",cancelButtonText:"直接离开",type:"warning"}).then(function(){s.saveChoose(),s.$router.push({path:"/choose"})}).catch(function(){s.$router.push({path:"/choose"})})}else if(2==e);else if(3==e);else if(4==e){var a=this;this.$confirm("您正在离开此界面，是否需要保存？（点击右上角关闭为直接离开）","提示",{confirmButtonText:"帮我保存",cancelButtonText:"直接离开",type:"warning"}).then(function(){a.saveChoose(),a.$router.push({name:"upload",params:{xmmc:l.sys_name}})}).catch(function(){a.$router.push({name:"upload",params:{xmmc:l.sys_name}})})}else if(5==e){var r=this;this.$confirm("您正在离开此界面，是否需要保存？（点击右上角关闭为直接离开）","提示",{confirmButtonText:"帮我保存",cancelButtonText:"直接离开",type:"warning"}).then(function(){r.saveChoose(),r.$router.push({name:"pingfen",params:{xmmc:l.sys_name}})}).catch(function(){r.$router.push({name:"pingfen",params:{xmmc:l.sys_name}})})}},xtyhqkDelete:function(e){this.xtyhqk.splice(e,1)},wlhtxDelete:function(e){this.wlhtx.splice(e,1)},wlhhjDelete:function(e){this.wlhhj.splice(e,1)},sbhjs_fwqDelete:function(e){this.sbhjs_fwq.splice(e,1)},sbhjs_zysbDelete:function(e){this.sbhjs_zysb.splice(e,1)},yyhsj_ywyy_zysjDelete:function(e){this.yyhsj_ywyy_zysj.splice(e,1)},yyhsj_ywyy_zysjqkDelete:function(e){this.yyhsj_ywyy_zysjqk.splice(e,1)},saveChoose:function(){var e=this;this.loading=!0,s.a.post("/api/saveQuestionnaireResult",{data:{sys_name:this.sys_name,sys_unit:this.sys_unit,sys_sshy:this.sys_sshy,sys_sshy_qt:this.sys_sshy_qt,sys_xmlx:this.sys_xmlx,sys_xtjg:this.sys_xtjg,sys_xtjs:this.sys_xtjs,sys_dbjb:this.sys_dbjb,sys_mpsc:this.sys_mpsc,sys_mmzd:this.sys_mmzd,sys_ysbs:this.sys_ysbs,sys_djbh:this.sys_djbh,sys_dwdz:this.sys_dwdz,sys_sxsj:this.sys_sxsj,sys_dbsj:this.sys_dbsj,sys_cpjg:this.sys_cpjg,sys_rzys:this.sys_rzys_disableb?3:this.sys_rzys,mpjb_fwd:this.mpjb_fwd,mpjb_ydd:this.mpjb_ydd,dynamicYwyyForm:this.dynamicYwyyForm,sys_xtyh:this.xtyhqk,sys_wlhhj:this.wlhhj,sys_wlhtx:this.wlhtx,sys_fwq:this.sbhjs_fwq,sys_sbhjs:this.sbhjs_zysb,sys_ywyy:this.yyhsj_ywyy_zysj,sys_zysj:this.yyhsj_ywyy_zysjqk,sbqd:this.sbqd}},{headers:{token:window.sessionStorage.token}}).then(function(t){e.loading=!1,"ok"==t.data.retcode?e.$message({message:"保存成功",type:"success"}):e.$message.error("保存失败，请保留该界面状态并联系管理员")}).catch(function(t){e.loading=!1,alert("通信错误，请联系管理员"),console.error(t)})},generateSBQD:function(){var e=this;this.loading=!0,s.a.post("/api/SBQDdownload",{data:{sys_name:this.sys_name,sys_unit:this.sys_unit,sys_sshy:this.sys_sshy,sys_sshy_qt:this.sys_sshy_qt,sys_xmlx:this.sys_xmlx,sys_xtjg:this.sys_xtjg,sys_xtjs:this.sys_xtjs,sys_dbjb:this.sys_dbjb,sys_mpsc:this.sys_mpsc,sys_mmzd:this.sys_mmzd,sys_ysbs:this.sys_ysbs,sys_djbh:this.sys_djbh,sys_rzys:this.sys_rzys_disableb?3:this.sys_rzys,mpjb_fwd:this.mpjb_fwd,mpjb_ydd:this.mpjb_ydd,dynamicYwyyForm:this.dynamicYwyyForm,sys_xtyh:this.xtyhqk,sys_wlhhj:this.wlhhj,sys_wlhtx:this.wlhtx,sys_fwq:this.sbhjs_fwq,sys_sbhjs:this.sbhjs_zysb,sys_ywyy:this.yyhsj_ywyy_zysj,sys_zysj:this.yyhsj_ywyy_zysjqk,sbqd:this.sbqd}},{responseType:"blob",headers:{token:window.sessionStorage.token}}).then(function(t){e.loading=!1;var l=document.createElement("a"),s=t.data;l.download=e.sys_name+"设备清单.xlsx",l.href=URL.createObjectURL(s),l.click()}).catch(function(t){e.loading=!1,alert("系统错误，请联系管理员")})},changeRZYSbyYSBS:function(e){this.sys_rzys_disableb=1!=e,this.sys_rzys=""}},mounted:function(){if(null==this.sys_name)return alert("正在返回最前端"),void this.$router.push({path:"/choose"})}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[l("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal","background-color":"#141016","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[l("el-menu-item",{attrs:{index:"1"}},[l("i",{staticClass:"el-icon-back",staticStyle:{"font-size":"20px",cursor:"pointer"}}),e._v("返回主页")]),e._v(" "),l("el-menu-item",{attrs:{index:"2",disabled:!0}},[e._v("项目基本信息")]),e._v(" "),l("el-menu-item",{attrs:{index:"3"}},[e._v("当前调研表")]),e._v(" "),l("el-menu-item",{attrs:{index:"4"}},[e._v("文件管理")]),e._v(" "),l("el-menu-item",{attrs:{index:"5"}},[e._v("评分系统")])],1),e._v(" "),l("br"),e._v(" "),l("div",{staticStyle:{"margin-left":"30px"}},[l("el-form",{attrs:{model:e.Form,"label-width":"0px","label-position":"left"}},[l("el-form-item",[e._v("\n    系统名称  \n    "),l("el-input",{staticStyle:{width:"30%"},attrs:{disabled:!0},model:{value:e.sys_name,callback:function(t){e.sys_name=t},expression:"sys_name"}}),e._v("\n      "),l("el-button",{attrs:{type:"success"},on:{click:e.saveChoose}},[e._v("保存表单")]),e._v("\n     "),l("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("生成方案")]),e._v("\n     "),l("el-button",{attrs:{type:"primary"},on:{click:e.generateSBQD}},[e._v("生成设备清单")]),e._v("\n                  表单中*号为必填项目\n  ")],1)],1)],1),e._v(" "),l("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"基本情况",name:"one"}},[l("div",{staticStyle:{"margin-left":"30px","margin-right":"30px"}},[l("el-form",{attrs:{model:e.Form,"label-width":"120px","label-position":"left"}},[l("el-form-item",{attrs:{label:"*责任单位"}},[l("el-input",{staticStyle:{width:"20%"},attrs:{placeholder:"请输入责任单位"},model:{value:e.sys_unit,callback:function(t){e.sys_unit=t},expression:"sys_unit"}})],1),e._v(" "),l("br"),e._v(" "),l("el-form-item",{attrs:{label:"*确定所属行业"}},[l("el-radio-group",{model:{value:e.sys_sshy,callback:function(t){e.sys_sshy=t},expression:"sys_sshy"}},[l("el-radio",{attrs:{label:"1"}},[e._v("公安")]),e._v(" "),l("el-radio",{attrs:{label:"2"}},[e._v("医疗")]),e._v(" "),l("el-radio",{attrs:{label:"3"}},[e._v("电信")]),e._v(" "),l("el-radio",{attrs:{label:"4"}},[e._v("金融")]),e._v(" "),l("el-radio",{attrs:{label:"5"}},[e._v("能源")]),e._v(" "),l("el-radio",{attrs:{label:"6"}},[e._v("教育")]),e._v(" "),l("el-radio",{attrs:{label:"7"}},[e._v("交通")]),e._v(" "),l("el-radio",{attrs:{label:"8"}},[e._v("政务")]),e._v(" "),l("el-radio",{attrs:{label:"9"}},[e._v("工控")]),e._v(" "),l("el-radio",{attrs:{label:"10"}},[e._v("其他\n              "),l("el-input",{staticStyle:{width:"140px"},attrs:{size:"mini",placeholder:""},model:{value:e.sys_sshy_qt,callback:function(t){e.sys_sshy_qt=t},expression:"sys_sshy_qt"}})],1)],1)],1),e._v(" "),l("br"),e._v(" "),l("el-form-item",{attrs:{label:"*确定项目类型"}},[l("el-radio-group",{model:{value:e.sys_xmlx,callback:function(t){e.sys_xmlx=t},expression:"sys_xmlx"}},[l("el-radio",{attrs:{label:"1"}},[e._v("非云平台")]),e._v(" "),l("br"),e._v(" "),l("el-radio",{attrs:{label:"2"}},[e._v("云平台过密评")]),e._v(" "),l("br"),e._v(" "),l("el-radio",{attrs:{label:"3"}},[e._v("云租户过密评")])],1)],1),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),l("el-row",[l("el-col",{attrs:{span:5}},[l("el-form-item",{attrs:{label:"*等保级别"}},[l("el-radio-group",{model:{value:e.sys_dbjb,callback:function(t){e.sys_dbjb=t},expression:"sys_dbjb"}},[l("el-radio",{attrs:{label:"1"}},[e._v("二级")]),e._v(" "),l("br"),e._v(" "),l("el-radio",{attrs:{label:"2"}},[e._v("三级")])],1)],1)],1)],1),e._v(" "),l("br"),e._v(" "),e._l(e.dynamicYwyyForm.ywyy,function(t,s){return l("el-form-item",{key:t.key,attrs:{label:"业务应用"+s,prop:"ywyy"+s+"value"}},[l("el-input",{staticStyle:{width:"400px"},on:{change:function(l){return e.dynamicYwyyChange(s,t)}},model:{value:t.value,callback:function(l){e.$set(t,"value",l)},expression:"i.value"}}),e._v(" "),l("el-button",{on:{click:function(l){return l.preventDefault(),e.removeDomain(t)}}},[e._v("删除")])],1)}),e._v(" "),l("el-form-item",[l("el-button",{on:{click:e.addDomain}},[e._v("新增业务")])],1)],2)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"系统用户情况",name:"three"}},[l("div",{staticStyle:{"margin-left":"30px","margin-right":"30px"}},[l("el-form",{attrs:{"label-width":"120px"}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"系统用户情况"}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.handlextyhqk()}}})],1)],1)],1),e._v(" "),l("el-row",[l("el-table",{attrs:{data:e.xtyhqk,border:"","header-cell-style":{background:"#b8bbbf",color:"#606266"}}},[l("el-table-column",{attrs:{align:"center",label:"*业务应用",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:t.row.ywyy,callback:function(l){e.$set(t.row,"ywyy",l)},expression:"scope.row.ywyy"}},e._l(e.dynamicYwyyForm.ywyy,function(e){return l("el-option",{key:e.value,attrs:{value:e.value}})}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"*用户/角色",width:"140px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.yh,callback:function(l){e.$set(t.row,"yh",l)},expression:"scope.row.yh"}},e._l(e.xtyhqk_yh_options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*登录方式(多选)",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox-group",{model:{value:t.row.dlfs,callback:function(l){e.$set(t.row,"dlfs",l)},expression:"scope.row.dlfs"}},e._l(e.xtyhqk_dlfs_options,function(t){return l("el-checkbox",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label)+"\n                  ")])}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*身份认证方式(多选)"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox-group",{model:{value:t.row.sfrz,callback:function(l){e.$set(t.row,"sfrz",l)},expression:"scope.row.sfrz"}},e._l(e.xtyhqk_sfrz_options,function(t){return l("el-checkbox",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label)+"\n                  ")])}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*所在网络(多选)",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox-group",{model:{value:t.row.szwl,callback:function(l){e.$set(t.row,"szwl",l)},expression:"scope.row.szwl"}},e._l(e.xtyhqk_szwl_options,function(t){return l("el-col",{key:t.value,attrs:{span:10}},[l("div",[l("el-checkbox",{attrs:{label:t.value}},[e._v(e._s(t.label)+"\n                      ")]),e._v(" "),l("br")],1)])}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"数量",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input-number",{attrs:{min:1,max:1e5,size:"small"},model:{value:t.row.sl,callback:function(l){e.$set(t.row,"sl",l)},expression:"scope.row.sl"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"操作",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.xtyhqkDelete(t.$index)}}},[e._v("删除")])]}}])})],1)],1)],1),e._v(" "),l("div",[l("br"),e._v(" "),l("el-alert",{attrs:{title:"请注意业务应用的对应关系",type:"warning",description:"请保证系统用户情况中的【业务应用】与应用和数据（业务应用、重要数据）中的【业务应用】保持一致","show-icon":""}}),e._v(" "),l("br")],1)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"物理和环境",name:"four"}},[l("div",{staticStyle:{"margin-left":"30px","margin-right":"30px"}},[l("el-form",{attrs:{"label-width":"120px"}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"物理和环境"}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.handlewlhhj()}}})],1)],1)],1),e._v(" "),l("el-row",[l("el-table",{attrs:{data:e.wlhhj,border:"","header-cell-style":{background:"#b8bbbf",color:"#606266"}}},[l("el-table-column",{attrs:{align:"center",label:"*机房名称",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{placeholder:"请输入机房名称"},model:{value:t.row.jfmc,callback:function(l){e.$set(t.row,"jfmc",l)},expression:"scope.row.jfmc"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*门禁",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.mj,callback:function(l){e.$set(t.row,"mj",l)},expression:"scope.row.mj"}},[l("el-row",[l("el-col",{attrs:{span:8}},[l("el-radio",{attrs:{label:"1"}},[e._v("国密电子")]),e._v(" "),l("el-radio",{attrs:{label:"2"}},[e._v("普通电子")])],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-radio",{attrs:{label:"3"}},[e._v("非电子")]),e._v(" "),l("el-radio",{attrs:{label:"4"}},[e._v("无")])],1)],1)],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*身份认证方式(多选)"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox-group",{model:{value:t.row.sfrz,callback:function(l){e.$set(t.row,"sfrz",l)},expression:"scope.row.sfrz"}},e._l(e.wlhhj_sfrz_options,function(t){return l("el-checkbox",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label)+"\n                  ")])}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*视频监控",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.spjk,callback:function(l){e.$set(t.row,"spjk",l)},expression:"scope.row.spjk"}},[l("div",[l("el-radio",{attrs:{label:"1"}},[e._v("国密")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"2"}},[e._v("普通")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"3"}},[e._v("无")])],1),e._v(" "),l("br")])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"操作",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.wlhhjDelete(t.$index)}}},[e._v("删除")])]}}])})],1)],1)],1)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"网络和通信",name:"five"}},[l("div",{staticStyle:{"margin-left":"30px","margin-right":"30px"}},[e._v('\n\n      测评对象是跨网络访问的通信信道，特别指从不受保护的网络区域访问被测系统，一般从通信主体和所在网络类型来分析，网络类型分为互联网(完全公开)、办公局域网(如公务员办公接入政务外网、医生办公接入医院局域网等)、内网(如机房内网络、某些专线网络)等。如果通信主体是XXX机房、XXX设备、XXX系统，请手动输入并注意一定要具有"机房"、"设备"、"系统"关键词。只有互联网有移动端对应通道。\n      '),l("el-form",{attrs:{"label-width":"120px"}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"网络和通信"}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.handlewlhtx()}}})],1)],1)],1),e._v(" "),l("el-row",[l("el-table",{attrs:{data:e.wlhtx,border:"","header-cell-style":{background:"#b8bbbf",color:"#606266"}}},[l("el-table-column",{attrs:{align:"center",label:"*网络类型",width:"145px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.type,callback:function(l){e.$set(t.row,"type",l)},expression:"scope.row.type"}},e._l(e.wlhtx_type_options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"*通信主体（可手动输入）",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:t.row.txzt,callback:function(l){e.$set(t.row,"txzt",l)},expression:"scope.row.txzt"}},e._l(e.wlhtx_txzt_options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"*测评对象"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.row.cpdx,callback:function(l){e.$set(t.row,"cpdx",l)},expression:"scope.row.cpdx"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*身份认证方式(多选)"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox-group",{model:{value:t.row.sfrz,callback:function(l){e.$set(t.row,"sfrz",l)},expression:"scope.row.sfrz"}},[l("el-col",{attrs:{span:25}},e._l(e.wlhtx_sfrz_options,function(t){return l("el-checkbox",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label)+"\n                    ")])}),1)],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"操作",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.wlhtxDelete(t.$index)}}},[e._v("删除")])]}}])})],1)],1)],1)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"设备和计算（服务器）",name:"six"}},[l("div",{staticStyle:{"margin-left":"30px","margin-right":"30px"}},[e._v("\n        测评对象是设备,需要了解该信息系统涉及哪些设备？同品牌型号的专用设备归为一个测评对象,相同硬件、软件的服务器可归为一个测评对象。\n        "),l("br"),e._v(" "),l("el-form",{attrs:{"label-width":"310px"}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"设备和计算：目标信息系统所在的服务器情况"}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.handlesbhjsfwq()}}})],1)],1)],1),e._v(" "),l("el-row",[l("el-table",{attrs:{data:e.sbhjs_fwq,border:"","header-cell-style":{background:"#b8bbbf",color:"#606266"}}},[l("el-table-column",{attrs:{align:"center",label:"*设备名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.row.sbmc,callback:function(l){e.$set(t.row,"sbmc",l)},expression:"scope.row.sbmc"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"品牌型号"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.row.ppxh,callback:function(l){e.$set(t.row,"ppxh",l)},expression:"scope.row.ppxh"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"数量",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input-number",{attrs:{min:1,max:1e5,size:"small"},model:{value:t.row.sl,callback:function(l){e.$set(t.row,"sl",l)},expression:"scope.row.sl"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*操作系统",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.czxt,callback:function(l){e.$set(t.row,"czxt",l)},expression:"scope.row.czxt"}},[l("div",[l("el-radio",{attrs:{label:"1"}},[e._v("Linux")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"2"}},[e._v("Windows")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"3"}},[e._v("UNIX")])],1),e._v(" "),l("br")])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*数据库",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.sjk,callback:function(l){e.$set(t.row,"sjk",l)},expression:"scope.row.sjk"}},[l("el-col",{attrs:{span:12}},[l("el-radio",{attrs:{label:"1"}},[e._v("Oracle")]),e._v(" "),l("el-radio",{attrs:{label:"2"}},[e._v("MySQL")]),e._v(" "),l("el-radio",{attrs:{label:"3"}},[e._v("SQL Server")]),e._v(" "),l("el-radio",{attrs:{label:"7"}},[e._v("无")])],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-radio",{attrs:{label:"4"}},[e._v("MongoDB")]),e._v(" "),l("el-radio",{attrs:{label:"5"}},[e._v("DB2")]),e._v(" "),l("el-radio",{attrs:{label:"6"}},[e._v("PostgreSQL")])],1)],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"*是否支持远程运维",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.ycyw,callback:function(l){e.$set(t.row,"ycyw",l)},expression:"scope.row.ycyw"}},[l("div",[l("el-radio",{attrs:{label:"1"}},[e._v("是")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"2"}},[e._v("否")])],1)])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*运维人身份认证(多选)"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox-group",{model:{value:t.row.sfrz,callback:function(l){e.$set(t.row,"sfrz",l)},expression:"scope.row.sfrz"}},e._l(e.sbhjs_sfrz_options,function(t){return l("el-checkbox",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label)+"\n                    ")])}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"*通过堡垒机管理",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.blj,callback:function(l){e.$set(t.row,"blj",l)},expression:"scope.row.blj"}},[l("div",[l("el-radio",{attrs:{label:"1"}},[e._v("是")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"2"}},[e._v("否")])],1)])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"操作",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.sbhjs_fwqDelete(t.$index)}}},[e._v("删除")])]}}])})],1)],1)],1)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"设备和计算（专用设备）",name:"seven"}},[l("div",{staticStyle:{"margin-left":"30px","margin-right":"30px"}},[e._v("\n        密码产品/设备包括：服务器密码机、云密码机、签名验签服务器、时间戳服务器、证书认证系统、(手机盾)协同签名系统、安全电子签章系统、密钥管理系统等;具有密码功能的网络及安全设备包括：SSL VPN、IPSec\n        VPN、堡垒机等; 采用密码技术的其他产品包括：动态口令系统、统一身份认证系统、特权账号管理系统等，没有密码功能的网络及安全设备包括路由器、交换机、防火墙、入侵检测系统等，虚拟设备和系统包括云计算平台、超融合一体机等。\n        "),l("br"),e._v(" "),l("el-form",{attrs:{"label-width":"310px"}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"设备和计算：目标系统所涉及的专用设备情况"}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.handlesbhjszysb()}}})],1)],1)],1),e._v(" "),l("el-row",[l("el-table",{attrs:{data:e.sbhjs_zysb,border:"","header-cell-style":{background:"#b8bbbf",color:"#606266"}}},[l("el-table-column",{attrs:{align:"center",label:"*设备类型",width:"230px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.type,callback:function(l){e.$set(t.row,"type",l)},expression:"scope.row.type"}},e._l(e.sbhjs_type_options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"*设备名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.row.sbmc,callback:function(l){e.$set(t.row,"sbmc",l)},expression:"scope.row.sbmc"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"品牌型号"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.row.ppxh,callback:function(l){e.$set(t.row,"ppxh",l)},expression:"scope.row.ppxh"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"数量",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input-number",{attrs:{min:1,max:1e5,size:"small"},model:{value:t.row.sl,callback:function(l){e.$set(t.row,"sl",l)},expression:"scope.row.sl"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*是否有商密证书",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.smzs,callback:function(l){e.$set(t.row,"smzs",l)},expression:"scope.row.smzs"}},[l("el-col",{attrs:{span:20}},[l("el-radio",{attrs:{label:"1"}},[e._v("是")])],1),e._v(" "),l("el-col",{attrs:{span:1}},[l("el-radio",{attrs:{label:"2"}},[e._v("否")])],1)],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*运维人身份认证(多选)"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox-group",{model:{value:t.row.sfrz,callback:function(l){e.$set(t.row,"sfrz",l)},expression:"scope.row.sfrz"}},e._l(e.sbhjs_sfrz_options,function(t){return l("el-checkbox",{key:t.value,attrs:{label:t.value}},[e._v("\n                      "+e._s(t.label)+"\n                    ")])}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"*通过堡垒机管理",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.blj,callback:function(l){e.$set(t.row,"blj",l)},expression:"scope.row.blj"}},[l("div",[l("el-radio",{attrs:{label:"1"}},[e._v("是")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"2"}},[e._v("否")])],1)])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"操作",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.sbhjs_zysbDelete(t.$index)}}},[e._v("删除")])]}}])})],1)],1)],1)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"应用和数据（业务应用）",name:"eight"}},[l("div",{staticStyle:{"margin-left":"30px","margin-right":"30px"}},[e._v("\n        业务应用，按该系统对外提供的服务或子系统，包括且不限于Web服务、数据服务、接口服务等\n        "),l("br"),e._v(" "),l("el-form",{attrs:{"label-width":"310px"}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"应用和数据：测评对象是业务应用以及重要数据"}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.handleyyhsjywyy()}}})],1)],1)],1),e._v(" "),l("el-row",[l("el-table",{attrs:{data:e.yyhsj_ywyy_zysj,border:"","header-cell-style":{background:"#b8bbbf",color:"#606266"}}},[l("el-table-column",{attrs:{align:"center",label:"*业务应用",width:"flexColumnWidth('string',tableData)"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:t.row.ywyy,callback:function(l){e.$set(t.row,"ywyy",l)},expression:"scope.row.ywyy"}},e._l(e.dynamicYwyyForm.ywyy,function(e){return l("el-option",{key:e.value,attrs:{value:e.value}})}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"功能描述",width:"flexColumnWidth('string',tableData)"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.row.gnms,callback:function(l){e.$set(t.row,"gnms",l)},expression:"scope.row.gnms"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*操作需要不可否认性",width:"flexColumnWidth('string',tableData)"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.bkfr,callback:function(l){e.$set(t.row,"bkfr",l)},expression:"scope.row.bkfr"}},[l("div",[l("el-radio",{attrs:{label:"1"}},[e._v("没有需求")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"2"}},[e._v("有需求&未做")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"3"}},[e._v("有需求&已做")])],1)])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"操作",width:"flexColumnWidth('string',tableData)"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.yyhsj_ywyy_zysjDelete(t.$index)}}},[e._v("删除")])]}}])})],1)],1)],1),e._v(" "),l("div",[l("br"),e._v(" "),l("el-alert",{attrs:{title:"请注意业务应用的对应关系",type:"warning",description:"请保证系统用户情况中的【业务应用】与应用和数据（业务应用、重要数据）中的【业务应用】保持一致","show-icon":""}}),e._v(" "),l("br")],1)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"应用和数据（重要数据）",name:"nine"}},[l("div",{staticStyle:{"margin-left":"30px","margin-right":"30px"}},[l("el-form",{attrs:{"label-width":"110px"}},[l("el-row",[l("el-col",{attrs:{span:24}},[e._v("\n              必须有访问控制信息\n              "),l("el-form-item",{attrs:{label:"重要数据情况"}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.handleyyhsjzysj()}}})],1)],1)],1),e._v(" "),l("el-row",[l("el-table",{attrs:{data:e.yyhsj_ywyy_zysjqk,border:"","header-cell-style":{background:"#b8bbbf",color:"#606266"}}},[l("el-table-column",{attrs:{align:"center",label:"*业务应用",width:"230px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:t.row.ywyy,callback:function(l){e.$set(t.row,"ywyy",l)},expression:"scope.row.ywyy"}},e._l(e.dynamicYwyyForm.ywyy,function(e){return l("el-option",{key:e.value,attrs:{value:e.value}})}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"*数据类型",width:"240px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.sjlx,callback:function(l){e.$set(t.row,"sjlx",l)},expression:"scope.row.sjlx"}},e._l(e.zysjqk_sjlx_options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"数据内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.row.sjnr,callback:function(l){e.$set(t.row,"sjnr",l)},expression:"scope.row.sjnr"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"保护需求"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.row.bhxq,callback:function(l){e.$set(t.row,"bhxq",l)},expression:"scope.row.bhxq"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*存储加密",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.ccjm,callback:function(l){e.$set(t.row,"ccjm",l)},expression:"scope.row.ccjm"}},[l("div",[l("el-radio",{attrs:{label:"1"}},[e._v("国密")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"2"}},[e._v("非国密")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"3"}},[e._v("未加密")])],1)])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"left","header-align":"center",label:"*传输加密",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio-group",{model:{value:t.row.csjm,callback:function(l){e.$set(t.row,"csjm",l)},expression:"scope.row.csjm"}},[l("div",[l("el-radio",{attrs:{label:"1"}},[e._v("不涉及")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"2"}},[e._v("国密")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"3"}},[e._v("非国密")])],1),e._v(" "),l("br"),e._v(" "),l("div",[l("el-radio",{attrs:{label:"4"}},[e._v("未加密")])],1)])]}}])}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"操作",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.yyhsj_ywyy_zysjqkDelete(t.$index)}}},[e._v("删除")])]}}])})],1)],1)],1),e._v(" "),l("div",[l("br"),e._v(" "),l("el-alert",{attrs:{title:"请注意业务应用的对应关系",type:"warning",description:"请保证系统用户情况中的【业务应用】与应用和数据（业务应用、重要数据）中的【业务应用】保持一致","show-icon":""}}),e._v(" "),l("br")],1)],1)]),e._v(" "),l("el-tab-pane",{attrs:{label:"产品清单",name:"ten"}},[l("div",{staticStyle:{"margin-left":"30px","margin-right":"30px"}},[l("div",[l("br"),e._v(" "),l("el-alert",{attrs:{title:"设置数量为9999表示按需（可手动输入）",type:"info","show-icon":""}}),e._v(" "),l("br"),e._v(" "),[l("el-alert",{attrs:{title:"产品清单版本日期：2023.7.17",type:"warning",effect:"dark"}})]],2),e._v(" "),l("el-table",{attrs:{border:"",data:e.sbqd}},[l("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"50"}}),e._v(" "),l("el-table-column",{attrs:{label:"设备名称",align:"center",prop:"name"}}),e._v(" "),l("el-table-column",{attrs:{label:"基本型号",align:"center",prop:"jbxh"}}),e._v(" "),l("el-table-column",{attrs:{label:"类别",width:"120px",align:"center",prop:"lb"}}),e._v(" "),l("el-table-column",{attrs:{label:"数量",width:"180px",align:"center",prop:"num"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input-number",{attrs:{size:"small"},model:{value:t.row.num,callback:function(l){e.$set(t.row,"num",l)},expression:"scope.row.num"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"备注",width:"180px",align:"center",prop:"num"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{placeholder:"备注"},model:{value:t.row.remark,callback:function(l){e.$set(t.row,"remark",l)},expression:"scope.row.remark"}})]}}])})],1)],1)])],1)],1)},staticRenderFns:[]};var n=l("VU/8")(a,r,!1,function(e){l("7rqY")},null,null);t.default=n.exports}});
//# sourceMappingURL=4.823c886abbe3ec9467f6.js.map