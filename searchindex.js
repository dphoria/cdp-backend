Search.setIndex({docnames:["cdp_backend","cdp_backend.bin","cdp_backend.database","cdp_backend.file_store","cdp_backend.infrastructure","cdp_backend.pipeline","cdp_backend.utils","cdp_backend.utils.resources","contributing","database_schema","event_gather_pipeline","index","ingestion_models","installation","modules","transcript_model"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["cdp_backend.rst","cdp_backend.bin.rst","cdp_backend.database.rst","cdp_backend.file_store.rst","cdp_backend.infrastructure.rst","cdp_backend.pipeline.rst","cdp_backend.utils.rst","cdp_backend.utils.resources.rst","contributing.rst","database_schema.md","event_gather_pipeline.md","index.rst","ingestion_models.md","installation.rst","modules.rst","transcript_model.md"],objects:{"":{cdp_backend:[0,0,0,"-"]},"cdp_backend.bin":{clean_cdp_database:[1,0,0,"-"],clean_cdp_filestore:[1,0,0,"-"],create_cdp_database_uml:[1,0,0,"-"],create_cdp_event_gather_flow_viz:[1,0,0,"-"],create_cdp_ingestion_models_doc:[1,0,0,"-"],create_cdp_transcript_model_doc:[1,0,0,"-"],run_cdp_event_gather:[1,0,0,"-"]},"cdp_backend.bin.clean_cdp_database":{Args:[1,1,1,""],main:[1,2,1,""]},"cdp_backend.bin.clean_cdp_filestore":{Args:[1,1,1,""],main:[1,2,1,""]},"cdp_backend.bin.create_cdp_database_uml":{Args:[1,1,1,""],main:[1,2,1,""]},"cdp_backend.bin.create_cdp_event_gather_flow_viz":{Args:[1,1,1,""],fake_get_events_filled:[1,2,1,""],fake_get_events_many:[1,2,1,""],fake_get_events_minimal:[1,2,1,""],main:[1,2,1,""]},"cdp_backend.bin.create_cdp_ingestion_models_doc":{Args:[1,1,1,""],main:[1,2,1,""]},"cdp_backend.bin.create_cdp_transcript_model_doc":{Args:[1,1,1,""],main:[1,2,1,""]},"cdp_backend.bin.run_cdp_event_gather":{Args:[1,1,1,""],import_get_events_func:[1,2,1,""],main:[1,2,1,""]},"cdp_backend.database":{constants:[2,0,0,"-"],exceptions:[2,0,0,"-"],functions:[2,0,0,"-"],models:[2,0,0,"-"],types:[2,0,0,"-"],validators:[2,0,0,"-"]},"cdp_backend.database.constants":{EventMinutesItemDecision:[2,1,1,""],MatterStatusDecision:[2,1,1,""],Order:[2,1,1,""],VoteDecision:[2,1,1,""]},"cdp_backend.database.constants.EventMinutesItemDecision":{FAILED:[2,3,1,""],PASSED:[2,3,1,""]},"cdp_backend.database.constants.MatterStatusDecision":{ADOPTED:[2,3,1,""],IN_PROGRESS:[2,3,1,""],REJECTED:[2,3,1,""]},"cdp_backend.database.constants.Order":{ASCENDING:[2,3,1,""],DESCENDING:[2,3,1,""]},"cdp_backend.database.constants.VoteDecision":{ABSTAIN:[2,3,1,""],APPROVE:[2,3,1,""],REJECT:[2,3,1,""]},"cdp_backend.database.exceptions":{UniquenessError:[2,4,1,""]},"cdp_backend.database.exceptions.UniquenessError":{conflicting_ids:[2,5,1,""],pk_values:[2,5,1,""]},"cdp_backend.database.functions":{update_db_model:[2,2,1,""],upload_db_model:[2,2,1,""]},"cdp_backend.database.models":{Body:[2,1,1,""],Event:[2,1,1,""],EventMinutesItem:[2,1,1,""],EventMinutesItemFile:[2,1,1,""],File:[2,1,1,""],Matter:[2,1,1,""],MatterFile:[2,1,1,""],MatterSponsor:[2,1,1,""],MatterStatus:[2,1,1,""],MinutesItem:[2,1,1,""],Person:[2,1,1,""],Role:[2,1,1,""],Seat:[2,1,1,""],Session:[2,1,1,""],Transcript:[2,1,1,""],Vote:[2,1,1,""]},"cdp_backend.database.models.Body":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],description:[2,3,1,""],end_datetime:[2,3,1,""],external_source_id:[2,3,1,""],is_active:[2,3,1,""],name:[2,3,1,""],start_datetime:[2,3,1,""]},"cdp_backend.database.models.Event":{Example:[2,5,1,""],Meta:[2,3,1,""],agenda_uri:[2,3,1,""],body_ref:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],event_datetime:[2,3,1,""],external_source_id:[2,3,1,""],hover_thumbnail_ref:[2,3,1,""],minutes_uri:[2,3,1,""],static_thumbnail_ref:[2,3,1,""]},"cdp_backend.database.models.EventMinutesItem":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],decision:[2,3,1,""],event_ref:[2,3,1,""],external_source_id:[2,3,1,""],index:[2,3,1,""],minutes_item_ref:[2,3,1,""]},"cdp_backend.database.models.EventMinutesItemFile":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],event_minutes_item_ref:[2,3,1,""],external_source_id:[2,3,1,""],name:[2,3,1,""],uri:[2,3,1,""]},"cdp_backend.database.models.File":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],description:[2,3,1,""],media_type:[2,3,1,""],name:[2,3,1,""],uri:[2,3,1,""]},"cdp_backend.database.models.Matter":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],external_source_id:[2,3,1,""],matter_type:[2,3,1,""],name:[2,3,1,""],title:[2,3,1,""]},"cdp_backend.database.models.MatterFile":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],external_source_id:[2,3,1,""],matter_ref:[2,3,1,""],name:[2,3,1,""],uri:[2,3,1,""]},"cdp_backend.database.models.MatterSponsor":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],external_source_id:[2,3,1,""],matter_ref:[2,3,1,""],person_ref:[2,3,1,""]},"cdp_backend.database.models.MatterStatus":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],external_source_id:[2,3,1,""],matter_ref:[2,3,1,""],status:[2,3,1,""],update_datetime:[2,3,1,""]},"cdp_backend.database.models.MinutesItem":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],description:[2,3,1,""],external_source_id:[2,3,1,""],matter_ref:[2,3,1,""],name:[2,3,1,""]},"cdp_backend.database.models.Person":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],email:[2,3,1,""],external_source_id:[2,3,1,""],is_active:[2,3,1,""],name:[2,3,1,""],phone:[2,3,1,""],picture_ref:[2,3,1,""],router_string:[2,3,1,""],website:[2,3,1,""]},"cdp_backend.database.models.Role":{Example:[2,5,1,""],Meta:[2,3,1,""],body_ref:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],end_datetime:[2,3,1,""],external_source_id:[2,3,1,""],person_ref:[2,3,1,""],seat_ref:[2,3,1,""],start_datetime:[2,3,1,""],title:[2,3,1,""]},"cdp_backend.database.models.Seat":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],electoral_area:[2,3,1,""],electoral_type:[2,3,1,""],external_source_id:[2,3,1,""],image_ref:[2,3,1,""],name:[2,3,1,""]},"cdp_backend.database.models.Session":{Example:[2,5,1,""],Meta:[2,3,1,""],caption_uri:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],event_ref:[2,3,1,""],external_source_id:[2,3,1,""],session_datetime:[2,3,1,""],session_index:[2,3,1,""],video_uri:[2,3,1,""]},"cdp_backend.database.models.Transcript":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],confidence:[2,3,1,""],created:[2,3,1,""],file_ref:[2,3,1,""],session_ref:[2,3,1,""]},"cdp_backend.database.models.Vote":{Example:[2,5,1,""],Meta:[2,3,1,""],collection:[2,3,1,""],collection_name:[2,3,1,""],decision:[2,3,1,""],event_minutes_item_ref:[2,3,1,""],event_ref:[2,3,1,""],external_source_id:[2,3,1,""],in_majority:[2,3,1,""],matter_ref:[2,3,1,""],person_ref:[2,3,1,""]},"cdp_backend.database.types":{IndexedField:[2,1,1,""],IndexedFieldSet:[2,1,1,""]},"cdp_backend.database.types.IndexedField":{name:[2,3,1,""],order:[2,3,1,""]},"cdp_backend.database.types.IndexedFieldSet":{fields:[2,3,1,""]},"cdp_backend.database.validators":{UniquenessValidation:[2,1,1,""],create_constant_value_validator:[2,2,1,""],email_is_valid:[2,2,1,""],get_model_uniqueness:[2,2,1,""],resource_exists:[2,2,1,""],router_string_is_valid:[2,2,1,""]},"cdp_backend.database.validators.UniquenessValidation":{conflicting_models:[2,3,1,""],is_unique:[2,3,1,""]},"cdp_backend.file_store":{functions:[3,0,0,"-"]},"cdp_backend.file_store.functions":{get_file_uri:[3,2,1,""],initialize_gcs_file_system:[3,2,1,""],remove_local_file:[3,2,1,""],upload_file:[3,2,1,""]},"cdp_backend.infrastructure":{cdp_stack:[4,0,0,"-"]},"cdp_backend.infrastructure.cdp_stack":{CDPStack:[4,1,1,""]},"cdp_backend.pipeline":{event_gather_pipeline:[5,0,0,"-"],ingestion_models:[5,0,0,"-"],mock_get_events:[5,0,0,"-"],transcript_model:[5,0,0,"-"]},"cdp_backend.pipeline.event_gather_pipeline":{create_event_gather_flow:[5,2,1,""],create_or_get_audio:[5,2,1,""]},"cdp_backend.pipeline.ingestion_models":{Body:[5,1,1,""],EventIngestionModel:[5,1,1,""],EventMinutesItem:[5,1,1,""],IngestionModel:[5,1,1,""],Matter:[5,1,1,""],MinutesItem:[5,1,1,""],Person:[5,1,1,""],Role:[5,1,1,""],Seat:[5,1,1,""],Session:[5,1,1,""],SupportingFile:[5,1,1,""],Vote:[5,1,1,""]},"cdp_backend.pipeline.ingestion_models.Body":{description:[5,3,1,""],end_datetime:[5,3,1,""],external_source_id:[5,3,1,""],is_active:[5,3,1,""],name:[5,3,1,""],start_datetime:[5,3,1,""]},"cdp_backend.pipeline.ingestion_models.EventIngestionModel":{agenda_uri:[5,3,1,""],body:[5,3,1,""],event_minutes_items:[5,3,1,""],external_source_id:[5,3,1,""],hover_thumbnail_uri:[5,3,1,""],minutes_uri:[5,3,1,""],sessions:[5,3,1,""],static_thumbnail_uri:[5,3,1,""]},"cdp_backend.pipeline.ingestion_models.EventMinutesItem":{decision:[5,3,1,""],index:[5,3,1,""],matter:[5,3,1,""],minutes_item:[5,3,1,""],supporting_files:[5,3,1,""],votes:[5,3,1,""]},"cdp_backend.pipeline.ingestion_models.Matter":{external_source_id:[5,3,1,""],matter_type:[5,3,1,""],name:[5,3,1,""],result_status:[5,3,1,""],sponsors:[5,3,1,""],title:[5,3,1,""]},"cdp_backend.pipeline.ingestion_models.MinutesItem":{description:[5,3,1,""],external_source_id:[5,3,1,""],name:[5,3,1,""]},"cdp_backend.pipeline.ingestion_models.Person":{email:[5,3,1,""],external_source_id:[5,3,1,""],is_active:[5,3,1,""],name:[5,3,1,""],phone:[5,3,1,""],picture_uri:[5,3,1,""],roles:[5,3,1,""],router_string:[5,3,1,""],seat:[5,3,1,""],website:[5,3,1,""]},"cdp_backend.pipeline.ingestion_models.Role":{body:[5,3,1,""],end_datetime:[5,3,1,""],external_source_id:[5,3,1,""],start_datetime:[5,3,1,""],title:[5,3,1,""]},"cdp_backend.pipeline.ingestion_models.Seat":{electoral_area:[5,3,1,""],electoral_type:[5,3,1,""],external_source_id:[5,3,1,""],image_uri:[5,3,1,""],name:[5,3,1,""]},"cdp_backend.pipeline.ingestion_models.Session":{caption_uri:[5,3,1,""],external_source_id:[5,3,1,""],session_datetime:[5,3,1,""],session_index:[5,3,1,""],video_uri:[5,3,1,""]},"cdp_backend.pipeline.ingestion_models.SupportingFile":{external_source_id:[5,3,1,""],name:[5,3,1,""],uri:[5,3,1,""]},"cdp_backend.pipeline.ingestion_models.Vote":{decision:[5,3,1,""],external_source_id:[5,3,1,""],person:[5,3,1,""]},"cdp_backend.pipeline.mock_get_events":{get_events:[5,2,1,""]},"cdp_backend.pipeline.transcript_model":{TextBlockAnnotations:[5,1,1,""],TextBlockData:[5,1,1,""],Transcript:[5,1,1,""],TranscriptAnnotations:[5,1,1,""]},"cdp_backend.pipeline.transcript_model.TextBlockAnnotations":{confidence:[5,3,1,""]},"cdp_backend.pipeline.transcript_model.TextBlockData":{annotations:[5,3,1,""],end_time:[5,3,1,""],from_dict:[5,5,1,""],from_json:[5,5,1,""],schema:[5,5,1,""],speaker:[5,3,1,""],start_time:[5,3,1,""],text:[5,3,1,""],to_dict:[5,5,1,""],to_json:[5,5,1,""]},"cdp_backend.pipeline.transcript_model.Transcript":{annotations:[5,3,1,""],confidence:[5,3,1,""],created_datetime:[5,3,1,""],data:[5,3,1,""],from_dict:[5,5,1,""],from_json:[5,5,1,""],generator:[5,3,1,""],schema:[5,5,1,""],session_datetime:[5,3,1,""],to_dict:[5,5,1,""],to_json:[5,5,1,""]},"cdp_backend.utils":{constants_utils:[6,0,0,"-"],file_utils:[6,0,0,"-"],resources:[7,0,0,"-"]},"cdp_backend.utils.constants_utils":{get_all_class_attr_values:[6,2,1,""]},"cdp_backend.utils.file_utils":{external_resource_copy:[6,2,1,""],get_media_type:[6,2,1,""],split_audio:[6,2,1,""]},cdp_backend:{bin:[1,0,0,"-"],database:[2,0,0,"-"],file_store:[3,0,0,"-"],get_module_version:[0,2,1,""],infrastructure:[4,0,0,"-"],pipeline:[5,0,0,"-"],utils:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:attribute","4":"py:exception","5":"py:method"},terms:{"10t15":15,"119858":12,"1656":12,"16t05":15,"2021":[12,15],"401b":12,"495305":12,"495316":12,"634076":15,"6c67c2a897b0":12,"789a0c9f":12,"835":15,"912":15,"93325":15,"9421":5,"987":15,"999":15,"boolean":[2,6],"byte":5,"case":[2,10],"class":[1,2,4,5,6],"default":[4,5,10,11],"enum":5,"float":5,"function":[0,5,10,14],"gonz\u00e1lez":12,"import":[2,5],"int":5,"new":[2,5,8],"null":15,"public":13,"return":[2,3,5,6,10],"short":[8,10],"true":[3,5,12],"try":12,"while":[9,12,15],And:10,But:10,For:[2,5,9,11,12,15],GCS:5,The:[2,3,4,5,6,10,11,12,13],Then:8,These:10,Useful:[2,5],aaf5:12,about:[5,10],abstain:2,accompani:2,account:[2,3,5,11],action:8,activist:11,add:8,addition:5,adopt:[2,12],after:10,afternoon:[2,5],against:[2,5],agenda_uri:[2,5],alex:12,all:[2,4,5,6,8,10,11,12],allow:12,allow_nan:5,alphabet:2,alreadi:[2,6],also:[2,5,8,10,12,15],alwai:[8,13],amend:12,anaconda:8,andrew:12,ani:[2,4,5,6,8,10,11],annot:[5,15],api:[9,10,15],appear:5,appli:5,applic:11,appreci:8,approv:[2,12],archiv:15,arg:[1,2],argpars:1,ascend:2,attach:[5,10,12],attempt:10,attende:[2,5],attribut:6,audio:[5,6],audio_save_path:6,audio_uri:5,auto:11,autom:10,avail:[5,12],averag:5,b_uniqu:2,back:10,backend:[0,4,8,13],backfil:10,bare:12,base:[1,2,4,5],basic:5,becaus:10,befor:11,begin:5,below:[12,15],between:[5,12],bill:[2,5,12],bin:[0,14],bit:8,block:5,bodi:[2,5,12],body_ref:2,bool:[2,3,5,6],both:15,branch:8,bridg:12,brief_072219_2011957v:12,brown:15,brows:15,bucket:[3,4,5],budget:[2,5],bugfix:8,build:8,bump2vers:8,bytearrai:5,calcul:5,call:[4,9],callabl:[1,2,5],can:[2,4,5,8,12,13],caption:10,caption_uri:[2,5],cdp:[0,2,4,5,8,10,12,13,15],cdp_stack:[0,14],cdpstack:4,central:11,chair:[2,5,12],chang:[5,8],charact:2,check:[3,8],check_circular:5,checkout:8,citi:[2,5],citywid:[2,5],class_attr_valu:6,classmethod:[2,5],clean:10,clean_cdp_databas:[0,14],clean_cdp_filestor:[0,14],clone:[8,13],close:10,cloud:[3,4,5,9],cls:6,collect:[2,10],collection_nam:2,com:[4,5,8,11,12,13],command:13,commit:8,committe:[2,5],commun:[11,12],compar:2,componentresourc:4,comput:10,confer:[2,5],confid:[2,5,15],conflict:2,conflicting_id:2,conflicting_model:2,conflicting_result:2,connect:3,constant:[0,6,14],constant_cl:2,constants_util:[0,14],construct:5,contain:2,content:[12,14],context:[5,10],contribut:11,cookiecutt:10,copi:[6,13],core:[3,5,10],correct:5,correspond:12,could:[2,5,6],council:[2,5,10,11,12],councildataproject:13,creat:[2,4,5,8,10,11],create_cdp_database_uml:[0,14],create_cdp_event_gather_flow_viz:[0,14],create_cdp_ingestion_models_doc:[0,14],create_cdp_transcript_model_doc:[0,14],create_constant_value_valid:2,create_event_gather_flow:5,create_or_get_audio:5,created_datetim:[5,15],creation:4,credenti:[2,3,5],credentials_fil:[3,5],credit:8,creds_fil:2,curl:13,current:[5,6],dai:10,dask:10,daskexecutor:10,data:[2,5,10,11,15],databas:[0,4,5,11,14],dataclasses_json:5,date:8,datetim:[5,12],db_model:2,dd9c:12,debat:[2,5],decis:[2,5,12],dedic:11,definit:[12,15],delet:3,denot:9,deploy:[10,11],descend:2,descript:[2,5,8],destin:6,detail:[5,8,9,10,15],dev:[5,8,11],dev_releas:8,develop:[10,12],diagram:9,dict:[5,12],did:5,differ:[2,10,12],directori:6,discuss:12,displai:12,district:[2,5,12],doc:[4,5,9],document:[2,5,9,10,15],doe:2,don:[10,13],done:8,dot:11,download:13,dqw4w9wgxcq:12,dst:6,dtype:5,dump:5,dump_onli:5,dure:[2,4,5,8,12],each:[5,9,10,11,12],earliest:5,easi:[10,12],econom:12,edit:8,educ:12,either:13,elect:[2,5],electoral_area:[2,5],electoral_typ:[2,5],els:10,email:[2,5],email_is_valid:2,enabl:[4,15],encode_json:5,end:[5,6,12,15],end_datetim:[2,5],end_tim:[5,15],enough:10,ensur:11,ensure_ascii:5,entir:[4,5,10],environ:8,estim:5,etc:[2,4,5],event:[2,5],event_datetim:[2,5],event_gather_pipelin:[0,14],event_minutes_item:[2,5,12],event_minutes_item_fil:2,event_minutes_item_ref:2,event_ref:2,eventingestionmodel:[1,5,10],eventminutesitem:[2,5],eventminutesitemdecis:2,eventminutesitemfil:[2,5],everi:[8,10],everyon:15,exampl:[2,5,12],except:[0,14],exclud:5,executor:10,exist:[2,3,5,6],extern:6,external_resource_copi:6,external_source_id:[2,5],extra:4,fail:2,fake_get_events_fil:1,fake_get_events_mani:1,fake_get_events_minim:1,fals:[3,5,6],featur:8,ffmpeg:6,ffmpeg_stdout_path:6,field:[2,5,9,12],file:[2,3,4,5,6,8,10],file_ref:2,file_stor:[0,14],file_system:3,file_uri:3,file_util:[0,14],filenam:3,filepath:3,filestor:5,fill:12,financ:[2,5,12],find:15,firebas:4,fireo:2,firestor:[4,9],firestore_loc:4,five:4,flow:[5,10],follow:10,foot:10,fork:8,format:[5,10],found:[2,6,8,12],four:[2,5,10],free:11,from:[2,3,5,6,10,12],from_dict:5,from_json:5,frontend:15,full:[2,5,11,12],func:2,func_path:1,gather:[5,12],gcp:4,gcp_project:4,gcp_project_id:4,gcsf:3,gcsfilesystem:3,gener:[2,5,10,11,15],get:[3,6],get_all_class_attr_valu:6,get_ev:[5,10],get_events_func:5,get_file_uri:3,get_media_typ:6,get_model_uniqu:2,get_module_vers:0,git:[8,11,13],github:[8,11,13],give:10,given:[2,3,8,12],goal:11,goe:8,googl:[2,3,4,5],gov:12,govern:12,granicu:12,graphviz:[8,11],greatli:8,guarante:5,guid:13,handl:8,has:[2,4,5],hash:5,have:[2,5,11,13],head:11,hei:15,hello:15,help:8,here:8,histor:[2,5,10],hold:11,host:4,hous:12,hover_thumbnail_ref:2,hover_thumbnail_uri:5,how:[4,8,10],howev:10,html:8,http:[4,5,11,12,13],huynh:15,hyphen:2,iana:6,identifi:5,imag:5,image_ref:2,image_uri:5,immedi:10,import_get_events_func:1,in_major:[2,5],in_progress:2,includ:[2,5,8,10],incred:10,indent:5,index:[2,5,10,11],indexedfield:2,indexedfieldset:2,indic:[2,6],inf:12,infer_miss:5,inform:[5,11,12],infrastructur:[0,2,5,12,14],ingest:[2,5,10],ingestion_model:[0,1,2,14],ingestionmodel:[2,5,12],initi:[2,3,4,5],initialize_gcs_file_system:3,input:2,insert:2,instanc:[2,3,4,5,10,11],instead:3,integr:5,intend:6,interest:10,is_act:[2,5,12],is_requir:2,is_uniqu:2,isaac:15,iso:5,item:[2,5],jackson:15,jacksongen:15,job:[2,5],journalist:11,json:[2,3,5],kei:[2,5,10],known:5,kvs:5,kwarg:2,larg:10,learn:10,legisl:[2,5],legistar2:12,level:0,lewi:12,lib:[5,15],librari:[8,11],licens:11,like:[10,12],limit:4,lint:8,list:[1,2,4,5,6,10],littl:8,load_onli:5,local:[3,6,8],locat:4,log:6,look:[10,12],lorena:12,lowercas:2,m2r:8,machin:6,made:5,main:[1,13],maintain:[5,8,10,11],major:[8,10],make:[5,8,10,12],manag:[2,5,11],mani:[2,4,5],manual:5,match:6,matter:[2,5,12],matter_fil:2,matter_ref:2,matter_sponsor:2,matter_statu:2,matter_typ:[2,5,12],matterfil:[2,5],mattersponsor:2,matterstatu:2,matterstatusdecis:2,max:4,maxfield:15,mayor:[2,5],media:[6,12],media_typ:2,meet:[2,5],member:[2,5,11],meta:2,method:[13,15],minimum:12,minor:8,minut:[2,5],minutes_item:[2,5,12],minutes_item_ref:2,minutes_uri:[2,5],minutesitem:[2,5],mit:11,mock:5,mock_get_ev:[0,14],mode:8,model:[0,5,9,10,11,14],modul:[11,14],more:[2,5,9,10,11,12,15],morn:[2,5],mosqueda:12,most:[5,8,13,15],mp4:12,mtype:6,much:12,multipl:[2,5,10],name:[2,3,4,5,6,12],namedtupl:2,namespac:1,need:[2,10,11,15],never:2,non:[2,12],none:[1,2,3,4,5,6,12],normal:[2,5],nosql:9,note:[4,5,12],noth:10,now:8,number:5,object:[2,5,10,12,15],occur:2,off:[2,5],offic:[2,5],onc:13,one:[2,6,10],onli:[2,5,10],open:[5,11],open_resourc:5,oper:5,opt:4,option:[2,3,4,5,6],order:2,ordin:12,origin:8,other:[2,4,5,8,10],otherwis:[3,5],our:[8,9,10,11,12],out:12,overal:5,overwrit:6,overwritten:12,packag:[8,11,14],page:11,parallel:4,paramet:[2,3,4,5,6],parse_const:5,parse_float:5,parse_int:5,part:10,partial:5,pass:[2,8,12],patch:8,path:[1,2,3,5,6],pathlib:[1,3,6],pattern:5,pdf:12,pedersen:12,per:2,period:[2,5],permut:5,person:[2,5,12],person_ref:2,phone:[2,5],pick:10,pictur:5,picture_ref:2,picture_uri:5,pip:[8,11,13],pipelin:[0,1,2,11,12,14,15],pk_valu:2,place:6,pleas:[8,11,12,15],point:[2,8,10],portion:5,posit:[2,5,12],possibl:[8,12],potenti:2,prefect:[5,10],prefer:13,prefix:4,prepar:10,present:[2,5],presid:12,press:[2,5],preview:5,primari:[2,12],primarili:[2,5],prior:5,process:[5,11,12,13,15],produc:[5,10],progress:2,project:[8,10,11],properti:2,provid:[2,3,5,6,10,11,12],publish:8,pull:8,pulumi:4,purpos:15,push:8,pypi:8,python:[8,12,13],queryabl:12,rais:2,random:5,rare:10,rather:2,raw:8,read:[5,8],readi:8,recent:13,recommend:[4,8,10],refer:[2,5],referenc:[2,5],reject:[2,12],relat:[2,5,11,12],releas:[8,11],rememb:10,remind:8,remot:2,remov:3,remove_loc:3,remove_local_fil:3,repo:[5,8,13],report:5,repositori:[11,13],request:[8,10],requir:[2,4,9],research:[11,15],resolut:[2,5],resolv:8,resolved_audio_save_path:6,resourc:[0,2,4,6,10],resource_exist:2,resourceopt:4,result:10,result_statu:[5,12],role:[2,5,12],router:2,router_str:[2,5],router_string_is_valid:2,run:[4,5,8,10,11,13],run_cdp_event_gath:[0,14],same:[2,6],satifactori:10,save:[2,3,6],save_nam:3,saved_path:6,scale:12,schedul:[2,5],schema:5,schemaf:5,scrape:10,script:1,search:[11,15],seat:[2,5,12],seat_ref:2,seattl:[4,12],second:5,see:[5,8,9,11,12,15],seen:12,sens:10,separ:5,serv:11,server:[4,11],servic:[2,3,4,5,12],session:[2,5,12],session_datetim:[2,5,12,15],session_index:[2,5,12],session_ref:2,set:[4,5,8,12],setup:13,share:2,shorten:10,should:[2,5,6],sign:2,simpl:10,simpli:10,singl:[10,11],skipkei:5,softwar:11,someth:[2,8],sort_kei:5,sourc:[0,1,2,3,4,5,6,11],speak:15,speaker:[5,15],special:[2,5],specif:[2,5,6,12,15],speech:5,spend:[2,5],split:6,split_audio:6,sponsor:[5,12],stabl:[11,15],stack:[4,11],stai:11,standard:15,start:10,start_datetim:[2,5],start_tim:[5,15],static_thumbnail_ref:2,static_thumbnail_uri:5,statu:2,status:2,stderr:6,stdout:6,step:10,still:9,storag:[4,5,11],store:[2,3,5,6,9,10,15],str:[0,2,3,4,5,6],string:2,subcommitte:[2,5],submit:[2,8],submodul:[0,14],subpackag:14,success:3,support:[2,12],supporting_fil:[5,12],supportingfil:5,sure:8,sweet:10,system:[3,5],tag:8,take:10,tarbal:13,technic:[2,5],teresa:12,term:[2,5],termin:13,test:[5,8,11],text:[5,15],text_block_annot:5,textblockannot:5,textblockdata:5,than:[2,10],thei:[8,11],thi:[2,4,5,8,10,11,12,13,15],thousand:10,three:10,through:[8,13],tied:[2,5],tiff:8,time:[2,5,10],timelin:2,titl:[2,5,12],to_dict:5,to_json:5,togeth:[2,5],token:5,tool:[10,11,15],top:0,total:5,track:2,transcrib:[5,10],transcript:[2,5,10],transcript_model:[0,14],transcriptannot:5,transport:[2,5,12],tupl:[2,5,6],two:[2,5,12],tying:[2,5],type:[0,3,5,6,12,14],uml:9,under:5,union:[3,5,6],uniqu:[2,5],uniqueness_valid:2,uniquenesserror:2,uniquenessvalid:2,unknown:5,upcom:[2,5],updat:[2,5],update_datetim:2,update_db_model:2,upload:[2,3,5,10],upload_db_model:2,upload_fil:3,upon:3,uri:[2,3,5,6,10,12],usag:5,use:[2,4,5],used:[3,5,6,11],useful:9,user:15,using:[4,6,10,15],usual:2,utcnow:5,util:[0,9,10,11,12,14],valid:[0,14],validator_func:2,valu:[2,5,6,12],version:[5,8,10,15],vice:12,video:[5,6,10,12],video_read_path:6,video_uri:[2,5,12],view:[9,10],virtualenv:8,visit:11,visual:[5,10],vote:[2,5,12],votedecis:2,web:11,websit:[2,5,8,11],welcom:8,west2:4,west:12,when:[2,4,5,8],where:[6,10],whether:[2,6],who:[10,15],whole:[5,11],work:[2,5,6,8,10,11],would:[4,10],write:5,written:5,wrong:[2,8],you:[4,8,11,13,15],your:[8,13],your_development_typ:8,your_name_her:8,youtu:12},titles:["cdp_backend package","cdp_backend.bin package","cdp_backend.database package","cdp_backend.file_store package","cdp_backend.infrastructure package","cdp_backend.pipeline package","cdp_backend.utils package","cdp_backend.utils.resources package","Contributing","CDP Database Schema","Event Gather Pipeline","Welcome to cdp-backend\u2019s documentation!","Ingestion Models","Installation","cdp_backend","Transcript Model"],titleterms:{"function":[2,3],about:11,backend:11,bin:1,cdp:[9,11],cdp_backend:[0,1,2,3,4,5,6,7,14],cdp_stack:4,clean_cdp_databas:1,clean_cdp_filestor:1,constant:2,constants_util:6,content:[0,1,2,3,4,5,6,7],contribut:8,councildataproject:11,create_cdp_database_uml:1,create_cdp_event_gather_flow_viz:1,create_cdp_ingestion_models_doc:1,create_cdp_transcript_model_doc:1,data:12,databas:[2,9,12],deploi:8,develop:[8,11],document:[11,12],event:[10,12],event_gather_pipelin:5,exampl:15,except:2,exist:12,expand:12,file_stor:3,file_util:6,fill:10,from:13,gather:10,get:8,implement:9,indic:11,infrastructur:[4,11],ingest:12,ingestion_model:5,instal:[8,11,13],item:12,manag:10,minim:[10,12],minut:12,mock_get_ev:5,model:[2,12,15],modul:[0,1,2,3,4,5,6,7],note:9,packag:[0,1,2,3,4,5,6,7],parallel:10,pipelin:[5,10],process:10,releas:13,resourc:7,run_cdp_event_gath:1,schema:9,sourc:13,stabl:13,start:8,submodul:[1,2,3,4,5,6],subpackag:[0,6],tabl:11,transcript:15,transcript_model:5,type:2,updat:12,util:[6,7],valid:2,welcom:11,workflow:10}})