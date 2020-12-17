Search.setIndex({docnames:["cdp_backend","cdp_backend.bin","cdp_backend.database","cdp_backend.infrastructure","cdp_backend.pipeline","cdp_backend.utils","cdp_backend.utils.resources","contributing","database_schema","event_data_ingestion_model","index","installation","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["cdp_backend.rst","cdp_backend.bin.rst","cdp_backend.database.rst","cdp_backend.infrastructure.rst","cdp_backend.pipeline.rst","cdp_backend.utils.rst","cdp_backend.utils.resources.rst","contributing.rst","database_schema.rst","event_data_ingestion_model.rst","index.rst","installation.rst","modules.rst"],objects:{"":{cdp_backend:[0,0,0,"-"]},"cdp_backend.bin":{create_cdp_database_uml:[1,0,0,"-"],create_ingestion_model_doc:[1,0,0,"-"]},"cdp_backend.bin.create_cdp_database_uml":{Args:[1,1,1,""],main:[1,2,1,""]},"cdp_backend.bin.create_ingestion_model_doc":{Args:[1,1,1,""],main:[1,2,1,""]},"cdp_backend.database":{models:[2,0,0,"-"],types:[2,0,0,"-"],validators:[2,0,0,"-"]},"cdp_backend.database.models":{Body:[2,1,1,""],Event:[2,1,1,""],EventMinutesItem:[2,1,1,""],EventMinutesItemFile:[2,1,1,""],File:[2,1,1,""],Matter:[2,1,1,""],MatterFile:[2,1,1,""],MatterSponsor:[2,1,1,""],MatterStatus:[2,1,1,""],MinutesItem:[2,1,1,""],Person:[2,1,1,""],Role:[2,1,1,""],Seat:[2,1,1,""],Session:[2,1,1,""],Transcript:[2,1,1,""],Vote:[2,1,1,""]},"cdp_backend.database.models.Body":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],description:[2,4,1,""],end_datetime:[2,4,1,""],external_source_id:[2,4,1,""],is_active:[2,4,1,""],name:[2,4,1,""],start_datetime:[2,4,1,""]},"cdp_backend.database.models.Event":{Example:[2,3,1,""],Meta:[2,4,1,""],agenda_uri:[2,4,1,""],body_ref:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],event_datetime:[2,4,1,""],external_source_id:[2,4,1,""],hover_thumbnail_ref:[2,4,1,""],minutes_uri:[2,4,1,""],static_thumbnail_ref:[2,4,1,""]},"cdp_backend.database.models.EventMinutesItem":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],decision:[2,4,1,""],event_ref:[2,4,1,""],external_source_id:[2,4,1,""],index:[2,4,1,""],minutes_item_ref:[2,4,1,""]},"cdp_backend.database.models.EventMinutesItemFile":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],event_minutes_item_ref:[2,4,1,""],external_source_id:[2,4,1,""],name:[2,4,1,""],uri:[2,4,1,""]},"cdp_backend.database.models.File":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],description:[2,4,1,""],media_type:[2,4,1,""],name:[2,4,1,""],uri:[2,4,1,""]},"cdp_backend.database.models.Matter":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],external_source_id:[2,4,1,""],matter_type:[2,4,1,""],name:[2,4,1,""],title:[2,4,1,""]},"cdp_backend.database.models.MatterFile":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],external_source_id:[2,4,1,""],matter_ref:[2,4,1,""],name:[2,4,1,""],uri:[2,4,1,""]},"cdp_backend.database.models.MatterSponsor":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],external_source_id:[2,4,1,""],matter_ref:[2,4,1,""],person_ref:[2,4,1,""]},"cdp_backend.database.models.MatterStatus":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],external_source_id:[2,4,1,""],matter_ref:[2,4,1,""],status:[2,4,1,""],update_datetime:[2,4,1,""]},"cdp_backend.database.models.MinutesItem":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],description:[2,4,1,""],external_source_id:[2,4,1,""],matter_ref:[2,4,1,""],name:[2,4,1,""]},"cdp_backend.database.models.Person":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],email:[2,4,1,""],external_source_id:[2,4,1,""],is_active:[2,4,1,""],name:[2,4,1,""],phone:[2,4,1,""],picture_ref:[2,4,1,""],router_string:[2,4,1,""],website:[2,4,1,""]},"cdp_backend.database.models.Role":{Example:[2,3,1,""],Meta:[2,4,1,""],body_ref:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],end_datetime:[2,4,1,""],external_source_id:[2,4,1,""],person_ref:[2,4,1,""],seat_ref:[2,4,1,""],start_datetime:[2,4,1,""],title:[2,4,1,""]},"cdp_backend.database.models.Seat":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],electoral_area:[2,4,1,""],electoral_type:[2,4,1,""],external_source_id:[2,4,1,""],image_ref:[2,4,1,""],name:[2,4,1,""]},"cdp_backend.database.models.Session":{Example:[2,3,1,""],Meta:[2,4,1,""],caption_uri:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],event_ref:[2,4,1,""],external_source_id:[2,4,1,""],session_datetime:[2,4,1,""],session_index:[2,4,1,""],video_uri:[2,4,1,""]},"cdp_backend.database.models.Transcript":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],confidence:[2,4,1,""],created:[2,4,1,""],file_ref:[2,4,1,""],session_ref:[2,4,1,""]},"cdp_backend.database.models.Vote":{Example:[2,3,1,""],Meta:[2,4,1,""],collection:[2,4,1,""],collection_name:[2,4,1,""],decision:[2,4,1,""],event_minutes_item_ref:[2,4,1,""],event_ref:[2,4,1,""],external_source_id:[2,4,1,""],in_majority:[2,4,1,""],matter_ref:[2,4,1,""],person_ref:[2,4,1,""]},"cdp_backend.database.types":{EventMinutesItemDecision:[2,1,1,""],IndexedField:[2,1,1,""],IndexedFieldSet:[2,1,1,""],Order:[2,1,1,""],VoteDecision:[2,1,1,""]},"cdp_backend.database.types.EventMinutesItemDecision":{FAILED:[2,4,1,""],PASSED:[2,4,1,""]},"cdp_backend.database.types.IndexedField":{name:[2,4,1,""],order:[2,4,1,""]},"cdp_backend.database.types.IndexedFieldSet":{fields:[2,4,1,""]},"cdp_backend.database.types.Order":{ASCENDING:[2,4,1,""],DESCENDING:[2,4,1,""]},"cdp_backend.database.types.VoteDecision":{ABSTAIN:[2,4,1,""],APPROVE:[2,4,1,""],REJECT:[2,4,1,""]},"cdp_backend.database.validators":{email_is_valid:[2,2,1,""],event_minutes_item_decision_is_valid:[2,2,1,""],model_is_unique:[2,2,1,""],resource_exists:[2,2,1,""],router_string_is_valid:[2,2,1,""],vote_decision_is_valid:[2,2,1,""]},"cdp_backend.infrastructure":{cdp_stack:[3,0,0,"-"]},"cdp_backend.infrastructure.cdp_stack":{CDPStack:[3,1,1,""]},"cdp_backend.pipeline":{ingestion_models:[4,0,0,"-"]},"cdp_backend.pipeline.ingestion_models":{Body:[4,1,1,""],EventIngestionModel:[4,1,1,""],EventMinutesItem:[4,1,1,""],Matter:[4,1,1,""],MinutesItem:[4,1,1,""],Person:[4,1,1,""],Role:[4,1,1,""],Seat:[4,1,1,""],Session:[4,1,1,""],SupportingFile:[4,1,1,""],Vote:[4,1,1,""]},"cdp_backend.pipeline.ingestion_models.Body":{description:[4,4,1,""],end_datetime:[4,4,1,""],external_source_id:[4,4,1,""],is_active:[4,4,1,""],name:[4,4,1,""],start_datetime:[4,4,1,""]},"cdp_backend.pipeline.ingestion_models.EventIngestionModel":{agenda_uri:[4,4,1,""],body:[4,4,1,""],event_minutes_items:[4,4,1,""],external_source_id:[4,4,1,""],hover_thumbnail_uri:[4,4,1,""],minutes_uri:[4,4,1,""],sessions:[4,4,1,""],static_thumbnail_uri:[4,4,1,""]},"cdp_backend.pipeline.ingestion_models.EventMinutesItem":{decision:[4,4,1,""],index:[4,4,1,""],matter:[4,4,1,""],minutes_item:[4,4,1,""],supporting_files:[4,4,1,""],votes:[4,4,1,""]},"cdp_backend.pipeline.ingestion_models.Matter":{external_source_id:[4,4,1,""],matter_type:[4,4,1,""],name:[4,4,1,""],sponsors:[4,4,1,""],title:[4,4,1,""]},"cdp_backend.pipeline.ingestion_models.MinutesItem":{description:[4,4,1,""],external_source_id:[4,4,1,""],name:[4,4,1,""]},"cdp_backend.pipeline.ingestion_models.Person":{email:[4,4,1,""],external_source_id:[4,4,1,""],is_active:[4,4,1,""],name:[4,4,1,""],phone:[4,4,1,""],picture_uri:[4,4,1,""],roles:[4,4,1,""],router_string:[4,4,1,""],seat:[4,4,1,""],website:[4,4,1,""]},"cdp_backend.pipeline.ingestion_models.Role":{body:[4,4,1,""],end_datetime:[4,4,1,""],external_source_id:[4,4,1,""],start_datetime:[4,4,1,""],title:[4,4,1,""]},"cdp_backend.pipeline.ingestion_models.Seat":{electoral_area:[4,4,1,""],electoral_type:[4,4,1,""],external_source_id:[4,4,1,""],image_uri:[4,4,1,""],name:[4,4,1,""]},"cdp_backend.pipeline.ingestion_models.Session":{caption_uri:[4,4,1,""],external_source_id:[4,4,1,""],session_datetime:[4,4,1,""],session_index:[4,4,1,""],video_uri:[4,4,1,""]},"cdp_backend.pipeline.ingestion_models.SupportingFile":{external_source_id:[4,4,1,""],name:[4,4,1,""],uri:[4,4,1,""]},"cdp_backend.pipeline.ingestion_models.Vote":{decision:[4,4,1,""],external_source_id:[4,4,1,""],person:[4,4,1,""]},"cdp_backend.utils":{constants_utils:[5,0,0,"-"],file_utils:[5,0,0,"-"],resources:[6,0,0,"-"]},"cdp_backend.utils.constants_utils":{get_all_class_attr_values:[5,2,1,""]},"cdp_backend.utils.file_utils":{get_media_type:[5,2,1,""]},cdp_backend:{bin:[1,0,0,"-"],database:[2,0,0,"-"],get_module_version:[0,2,1,""],infrastructure:[3,0,0,"-"],pipeline:[4,0,0,"-"],utils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:method","4":"py:attribute"},terms:{"401b":9,"6c67c2a897b0":9,"789a0c9f":9,"boolean":2,"class":[1,2,3,4,5],"default":[3,10],"gonz\u00e1lez":9,"import":[2,10],"int":4,"new":[2,4,7,10],"public":11,"return":[2,5],"short":7,"true":[4,9],"try":9,"while":[8,9],For:[2,4,8,9,10],The:[2,3,4,5,9,11],Then:7,Useful:2,aaf5:9,about:4,abstain:2,access:10,account:10,action:[7,10],activist:10,add:7,addition:4,admin:10,afternoon:[2,4],agenda_uri:[2,4],alex:9,all:[3,5,7,10],allow:9,alphabet:2,also:[2,4,7,9],alwai:[7,11],amend:9,anaconda:7,andrew:9,ani:[2,3,4,5,7,10],api:8,app:10,appreci:7,approv:[2,9],arg:[1,2],argpars:1,ascend:2,attach:9,attende:[2,4],attribut:5,auto:10,avail:[9,10],backend:[0,3,7,11],bare:9,base:[1,2,3,4],befor:10,below:9,bill:[2,4,9],bin:[0,12],bit:7,bodi:[2,4,9],body_ref:2,bool:[2,4],branch:7,bridg:9,bucket:3,budget:[2,4],bugfix:7,build:7,bump2vers:7,calcul:4,call:[3,8],can:[2,3,4,7,9,11],caption_uri:[2,4],cdp:[0,2,3,4,7,9,11],cdp_backend:[10,11],cdp_stack:[0,12],cdpstack:3,chair:[2,4,9],chang:[4,7,10],charact:2,check:7,checkout:7,citi:[2,4],citywid:[2,4],class_attr_valu:5,classmethod:2,clone:[7,11],cloud:[3,8],cls:5,code:10,collect:2,collection_nam:2,com:[3,7,9,10,11],combin:10,command:11,commit:7,committe:[2,4],commun:[9,10],compar:2,compil:10,compon:10,componentresourc:3,confer:[2,4],confid:2,constant:5,constants_util:[0,12],contain:[2,10],content:12,cookiecutt:10,copi:11,could:[2,4,5],council:[2,4,9,10],councildataproject:[10,11],creat:[2,3,7,10],create_cdp_database_uml:[0,12],create_ingestion_model_doc:[0,12],creation:3,credit:7,curl:11,current:4,data:10,databas:[0,3,4,10,12],date:7,datetim:[4,9],dd9c:9,debat:[2,4],decis:[2,4,9],dedic:10,definit:9,denot:8,deploy:10,descend:2,descript:[2,4,7],detail:[4,7,8],dev:[7,10],dev_releas:7,develop:9,diagram:8,did:4,differ:10,discuss:9,displai:9,district:[2,4,9],doc:[3,8],document:[2,4,8,9],doe:2,domain:10,don:11,done:7,dot:10,download:11,dqw4w9wgxcq:9,dure:[2,3,4,7,9],each:[8,9,10],earliest:4,easi:9,econom:9,edit:7,educ:9,either:11,elect:[2,4],electoral_area:[2,4],electoral_typ:[2,4],email:[2,4],email_is_valid:2,empow:10,enabl:3,end:9,end_datetim:[2,4],ensur:10,entir:[3,10],environ:7,etc:[2,3,4],event:[2,4],event_datetim:[2,4],event_minutes_item:[2,4,9],event_minutes_item_decision_is_valid:2,event_minutes_item_fil:2,event_minutes_item_ref:2,event_ref:2,eventingestionmodel:4,eventminutesitem:[2,4],eventminutesitemdecis:2,eventminutesitemfil:[2,4],everi:7,everyon:10,exampl:[2,4,9,10],exist:[2,4],external_source_id:[2,4],extra:3,fail:2,featur:7,field:[2,4,8,9],file:[2,3,4,7],file_ref:2,file_util:[0,12],fill:9,financ:[2,4,9],firebas:3,fireo:2,firestor:[3,8],firestore_loc:3,five:3,fork:7,found:[5,7],four:[2,4],free:10,from:[2,4,9],frontend:10,full:[2,4,9,10],gather:10,gcp:3,gcp_project:3,gcp_project_id:3,gener:[2,4,10],get:5,get_all_class_attr_valu:5,get_media_typ:5,get_module_vers:0,git:[7,10,11],github:[7,10,11],given:[2,7,9],goe:7,googl:3,govern:[9,10],granicu:9,graphviz:[7,10],greatli:7,guid:11,handl:7,has:[2,3,4,10],have:[2,4,10,11],head:10,help:7,here:[7,10],histor:[2,4],hold:10,host:[3,10],hous:9,hover_thumbnail_ref:2,hover_thumbnail_uri:4,how:[3,7],html:7,http:[3,9,10,11],hyphen:2,iana:5,imag:4,image_ref:2,image_uri:4,in_major:[2,4],includ:[2,4,7],index:[2,4,10],indexedfield:2,indexedfieldset:2,inf:9,inform:[9,10],infrastructur:[0,2,9,12],ingest:4,ingestion_model:[0,12],initi:[2,3,4],instanc:[2,3,10],intend:5,is_act:[2,4,9],is_uniqu:2,issu:10,item:[2,4],job:[2,4],journalist:10,kei:2,kwarg:2,land:10,larg:10,legisl:[2,4],legistar2:9,level:0,lewi:9,librari:7,licens:10,like:10,limit:3,lint:7,list:[3,4,5],littl:7,local:[7,10],locat:3,log:10,lorena:9,lowercas:2,m2r:7,made:10,main:[1,11],maintain:[7,10],major:7,make:[7,9],manag:[2,4],mani:[2,3],match:5,matter:[2,4,9],matter_fil:2,matter_ref:2,matter_sponsor:2,matter_statu:2,matter_typ:[2,4,9],matterfil:[2,4],mattersponsor:2,matterstatu:2,max:3,mayor:[2,4],media:5,media_typ:2,meet:[2,4,10],member:[2,4,10],meta:2,method:11,minimum:9,minor:7,minut:[2,4],minutes_item:[2,4,9],minutes_item_ref:2,minutes_uri:[2,4],minutesitem:[2,4],mit:10,mode:7,model:[0,8,10,12],model_is_uniqu:2,modul:[10,12],more:[8,9],morn:[2,4],mosqueda:9,most:[7,11],mtype:5,much:9,multipl:[2,4],municip:10,name:[2,3,4,9],namespac:1,need:10,none:[1,2,3,4,5],normal:[2,4],nosql:8,note:[3,4],now:7,object:[2,4,9],off:[2,4],offic:[2,4],onc:11,one:5,onli:2,open:10,oper:4,opt:3,option:[2,3,4,5],order:2,ordin:9,origin:7,other:[2,3,4,7,10],our:[7,8,9,10],out:9,overal:4,packag:[7,10,12],page:10,parallel:3,paramet:[2,3,5],particip:10,pass:[2,7,9],patch:7,pdf:9,pedersen:9,per:2,period:[2,4],person:[2,4,9],person_ref:2,phone:[2,4],pictur:4,picture_ref:2,picture_uri:4,pip:[7,10,11],pipelin:[0,10,12],pleas:[7,9,10],point:[2,7],posit:[2,4,9],possibl:[7,9],prefer:11,prefix:3,present:[2,4],presid:9,press:[2,4],primari:2,primarili:[2,4],prior:4,process:[4,9,10,11],project:[7,10],provid:[2,4,5,9,10],publish:7,pull:7,pulumi:3,push:7,pypi:7,python:[7,10,11],queryabl:9,raw:7,react:10,read:7,readi:7,recent:11,recommend:[3,7],refer:[2,4],referenc:[2,4],reject:[2,9],relat:[2,4,9,10],releas:[7,10],remind:7,remot:2,repo:[7,10,11],repositori:[10,11],repres:2,request:7,requir:[3,8],research:10,resolut:[2,4],resolv:7,resourc:[0,2,3,5,10],resource_exist:2,resourceopt:3,role:[2,4,9],router:2,router_str:[2,4],router_string_is_valid:2,run:[3,7,10,11],same:2,save:2,scale:9,schedul:[2,4],script:1,search:10,seat:[2,4,9],seat_ref:2,seattl:[3,9],see:[7,8,9,10],seen:9,serv:10,server:[3,10],servic:[3,9],session:[2,4,9],session_datetim:[2,4,9],session_index:[2,4],session_ref:2,set:[3,4,7,9],setup:11,should:[4,10],sign:2,simpli:10,simplifi:10,singl:10,softwar:10,someth:7,sourc:[0,1,2,3,4,5,10],special:[2,4],specif:[2,4,9],spend:[2,4],sponsor:[4,9],stabl:[7,10],stack:3,stai:10,start_datetim:[2,4],static_thumbnail_ref:2,static_thumbnail_uri:4,statu:2,status:2,still:8,storag:[3,4,10],store:[2,4,8,10],str:[0,2,3,4,5],string:2,subcommitte:[2,4],submit:[2,7],submodul:[0,12],subpackag:12,support:[2,9,10],supporting_fil:[4,9],supportingfil:4,sure:7,system:4,tag:7,tarbal:11,technic:[2,4],templat:10,teresa:9,term:[2,4],termin:11,test:[7,10],text:10,thei:[7,10],them:10,thi:[2,3,4,7,9,10,11],through:[7,11],tied:[2,4],tiff:7,time:[2,4],timelin:2,titl:[2,4,9],togeth:[2,4],tool:10,top:0,track:2,transcript:2,transport:[2,4,9],tupl:2,two:[2,4,9],tying:[2,4],type:[0,5,12],typescript:10,uml:8,under:[4,10],uniqu:2,upcom:[2,4],updat:[4,10],update_datetim:2,upload:[2,4],upstream:7,uri:[2,4,5,9],use:[3,10],used:[4,5,10],useful:8,using:3,usual:2,utcnow:4,util:[0,8,9,10,12],valid:[0,12],valu:[4,5],version:7,vice:9,video_uri:[2,4,9],view:8,virtualenv:7,visit:10,vote:[2,4,9],vote_decision_is_valid:2,votedecis:2,want:10,web:10,websit:[2,4,7],welcom:7,west2:3,west:9,when:[2,3,7],where:10,which:10,whole:4,work:[2,4,7,10],would:[3,10],write:10,written:10,wrong:7,you:[3,7,10,11],your:[7,11],your_development_typ:7,your_name_her:7,youtu:9},titles:["cdp_backend package","cdp_backend.bin package","cdp_backend.database package","cdp_backend.infrastructure package","cdp_backend.pipeline package","cdp_backend.utils package","cdp_backend.utils.resources package","Contributing","CDP Database Schema","Event Ingestion Model","Welcome to cdp-backend\u2019s documentation!","Installation","cdp_backend"],titleterms:{about:10,backend:10,bin:1,cdp:[8,10],cdp_backend:[0,1,2,3,4,5,6,12],cdp_stack:3,constants_util:5,content:[0,1,2,3,4,5,6],contribut:[7,10],create_cdp_database_uml:1,create_ingestion_model_doc:1,data:9,databas:[2,8],deploi:7,develop:[7,10],document:10,event:9,expand:9,file_util:5,from:11,get:7,implement:8,indic:10,infrastructur:[3,10],ingest:9,ingestion_model:4,instal:[7,10,11],item:9,minim:9,minut:9,model:[2,9],modul:[0,1,2,3,4,5,6],note:8,packag:[0,1,2,3,4,5,6],pipelin:4,releas:11,resourc:6,schema:8,sourc:11,stabl:11,start:7,submodul:[1,2,3,4,5],subpackag:[0,5],tabl:10,type:2,util:[5,6],valid:2,welcom:10}})