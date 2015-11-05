var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.movieapp;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '5C03534BC6D1EEA15EA0D8DF960F1E38';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {3:1, 4:1}, $intern_2 = {3:1, 6:1, 4:1}, $intern_3 = {3:1, 278:1}, $intern_4 = {3:1}, $intern_5 = {94:1, 30:1, 3:1, 7:1, 8:1}, $intern_6 = {49:1, 3:1, 6:1, 4:1}, $intern_7 = {36:1, 3:1, 6:1, 4:1}, $intern_8 = 4194303, $intern_9 = 1048575, $intern_10 = 4194304, $intern_11 = 17592186044416, $intern_12 = -9223372036854775808, $intern_13 = 524288, $intern_14 = {3:1, 124:1}, $intern_15 = 65536, $intern_16 = 16777216, $intern_17 = 33554432, $intern_18 = 67108864, $intern_19 = {14:1, 3:1, 7:1, 8:1}, $intern_20 = {18:1, 15:1, 17:1, 16:1, 19:1, 13:1, 10:1}, $intern_21 = {18:1, 15:1, 17:1, 16:1, 52:1, 19:1, 13:1, 10:1}, $intern_22 = {3:1, 5:1, 11:1, 22:1}, $intern_23 = {18:1, 15:1, 17:1, 16:1, 52:1, 19:1, 67:1, 13:1, 10:1}, $intern_24 = {26:1}, $intern_25 = {27:1}, $intern_26 = {3:1, 26:1}, $intern_27 = {3:1, 34:1, 27:1}, $intern_28 = {3:1, 7:1, 8:1, 35:1}, $intern_29 = {7:1, 20:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 317:1, 7:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(95, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_11(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 95);
function $fillInStackTrace(this$static){
  this$static.stackTrace = null;
  captureStackTrace(this$static, this$static.detailMessage);
  return this$static;
}

function $initCause(this$static, cause){
  checkState(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTrace(this$static, out){
  var element, element$array, element$index, element$max, t, stackTrace;
  for (t = this$static; t; t = t.cause) {
    t != this$static && $append(out.builder, 'Caused by: ');
    $append(out.builder, '' + t);
    $append(out.builder, '\n');
    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
      element = element$array[element$index];
      $append(out.builder, '\tat ' + element);
      $append(out.builder, '\n');
    }
  }
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(4, 1, $intern_1);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  var className, msg;
  return className = $getName(this.___clazz$) , msg = this.getMessage() , msg != null?className + ': ' + msg:className;
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(6, 4, $intern_2);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 6);
function RuntimeException(){
  $fillInStackTrace(this);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(12, 6, $intern_2, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 12);
function CodeDownloadException(message){
  RuntimeException_0.call(this, message);
}

defineClass(315, 12, $intern_2, CodeDownloadException);
var Lcom_google_gwt_core_client_CodeDownloadException_2_classLit = createForClass('com.google.gwt.core.client', 'CodeDownloadException', 315);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
defineClass(129, 12, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 129);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(28, 129, {28:1, 3:1, 6:1, 4:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 28);
function create(milliseconds){
  return new Date(milliseconds);
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(281, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 281);
function $clinit_ScriptInjector(){
  $clinit_ScriptInjector = emptyMethod;
}

function attachListeners(scriptElement, callback, removeTag){
  $clinit_ScriptInjector();
  function clearCallbacks(){
    scriptElement.onerror = scriptElement.onreadystatechange = scriptElement.onload = null;
    removeTag && nativeRemove(scriptElement);
  }

  scriptElement.onload = $entry(function(){
    clearCallbacks();
    callback && callback.onSuccess(null);
  }
  );
  scriptElement.onerror = $entry(function(){
    clearCallbacks();
    if (callback) {
      var ex = new CodeDownloadException('onerror() called.');
      callback.onFailure(ex);
    }
  }
  );
  scriptElement.onreadystatechange = $entry(function(){
    /loaded|complete/.test(scriptElement.readyState) && scriptElement.onload();
  }
  );
}

function nativeRemove(scriptElement){
  scriptElement.parentNode.removeChild(scriptElement);
}

function nativeSetSrc(element, url_0){
  $clinit_ScriptInjector();
  element.src = url_0;
}

function $inject(this$static){
  var doc, scriptElement, wnd;
  wnd = ($clinit_ScriptInjector() , window);
  doc = wnd.document;
  scriptElement = doc.createElement('script');
  !!this$static.callback && attachListeners(scriptElement, this$static.callback, false);
  nativeSetSrc(scriptElement, this$static.scriptUrl);
  (doc.head || doc.getElementsByTagName('head')[0]).appendChild(scriptElement);
  return scriptElement;
}

function $setCallback(this$static, callback){
  this$static.callback = callback;
  return this$static;
}

function ScriptInjector$FromUrl(scriptUrl){
  this.scriptUrl = scriptUrl;
}

defineClass(119, 1, {}, ScriptInjector$FromUrl);
var Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromUrl', 119);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 4)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw unwrap($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function getModuleBaseURL(){
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $log_1(handler.val$log2, ($clinit_Level() , e.getMessage()), e);
    return;
  }
  reportToBrowser(instanceOf(e, 28)?dynamicCast(e, 28).getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push_0(rescheduled, t)):$initWindowCloseHandlerImpl();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

defineClass(188, 281, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 188);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_0(stackTrace.length);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName)) {
      return dynamicCast((stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace), 278);
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

var collector;
defineClass(293, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 293);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(130, 293, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_3, 37, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 130);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_1(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(294, 293, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_3, 37, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 294);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(131, 294, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 131);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException("Can't overwrite cause");
  }
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $selectAdd(select, option, before){
  select.add(option, before);
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $eventGetCurrentTarget(event_0){
  return event_0.currentTarget || $wnd;
}

function $getTabIndex(elem){
  return elem.tabIndex < 65535?elem.tabIndex:-(elem.tabIndex % 65535) - 1;
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(8, 1, {3:1, 7:1, 8:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, dynamicCast(other, 8));
}
;
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 8);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_4, 30, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(30, 8, $intern_5);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 30, Ljava_lang_Enum_2_classLit, values_1);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(233, 30, $intern_5, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 233, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(234, 30, $intern_5, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 234, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(235, 30, $intern_5, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 235, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(236, 30, $intern_5, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 236, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
defineClass(308, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 308);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(309, 308, {});
_.dispatch = function dispatch(handler){
  this.dispatch_0(dynamicCast(handler, 51));
}
;
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 309);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 11);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next_0(), 76);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(312, 309, {});
_.getAssociatedType_0 = function getAssociatedType_0(){
  return this.getAssociatedType_1();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 312);
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = emptyMethod;
  TYPE = new DomEvent$Type('change', new ChangeEvent);
}

function $dispatch(handler){
  $readValue(handler.this$01);
  $fireEvent_1(handler.this$01, new FilterChangedEvent);
}

function ChangeEvent(){
}

defineClass(246, 312, {}, ChangeEvent);
_.dispatch_0 = function dispatch_0(handler){
  $dispatch(dynamicCast(handler, 324));
}
;
_.getAssociatedType_1 = function getAssociatedType_1(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ChangeEvent', 246);
defineClass(313, 312, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 313);
defineClass(314, 313, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 314);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('click', new ClickEvent);
}

function $dispatch_0(handler){
  handler.this$01.selectedItem = handler.val$thisItem2;
  $fireEvent_2(handler.this$01, new NavigationSelectedEvent);
}

function ClickEvent(){
}

defineClass(232, 314, {}, ClickEvent);
_.dispatch_0 = function dispatch_1(handler){
  $dispatch_0(dynamicCast(handler, 322));
}
;
_.getAssociatedType_1 = function getAssociatedType_2(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 232);
function Event$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(59, 1, {}, Event$Type);
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 59);
function GwtEvent$Type(){
  Event$Type.call(this);
}

defineClass(89, 59, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 89);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 11);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_0(this);
  this.name_0 = eventName;
}

defineClass(76, 89, {76:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 76);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(245, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 245);
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE_1) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(213, 309, {}, CloseEvent_0);
_.dispatch_0 = function dispatch_2(handler){
  dynamicCast(handler, 319);
  detachWidgets();
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 213);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 49)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(88, 1, {15:1}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 88);
defineClass(307, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 307);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_1(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1;
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 4)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_4(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_1(type_0), 26);
  if (!sourceMap) {
    sourceMap = new HashMap;
    this$static.map_0.put(type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_1(source), 11);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0);
  return directHandlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_1(type_0), 26);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_1(null), 11);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_0(c$iterator.i++), 323));
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function SimpleEventBus(){
  SimpleEventBus_0.call(this);
}

function SimpleEventBus_0(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(57, 307, {}, SimpleEventBus);
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 57);
function HandlerManager$Bus(){
  SimpleEventBus_0.call(this);
}

defineClass(204, 57, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 204);
function LegacyHandlerWrapper(){
}

defineClass(237, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 237);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next_0(), 4);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next_0(), 4);
    first?(first = false):(b.string += '; ' , b);
    $append(b, t.getMessage());
  }
  return b.string;
}

defineClass(49, 12, $intern_6, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 49);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(102, 49, $intern_6, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 102);
function $cancel(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new Request$RequestImplIE8And9$1(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
  new RequestTimeoutException(this$static.timeoutMillis);
  alert_0('Could not load worldmap data.');
}

function Request(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (!callback) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(262, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 262);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(265, 1, {});
_.fire = function fire_0(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $fireOnTimeout(this.this$01);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 265);
function Request$1(this$0){
  this.this$01 = this$0;
}

defineClass(266, 265, {}, Request$1);
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 266);
defineClass(316, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 316);
defineClass(263, 316, {});
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 263);
function Request$RequestImplIE8And9$1($anonymous0){
  this.xmlHttpRequest = $anonymous0;
}

defineClass(264, 263, {}, Request$RequestImplIE8And9$1);
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 264);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 28)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 28)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap);
  this$static.headers.put(header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_1() > 0) {
    for (header$iterator = this$static.headers.entrySet_0().iterator(); header$iterator.hasNext();) {
      header = dynamicCast(header$iterator.next_0(), 9);
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCastToString(header.getKey()), dynamicCastToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 28)) {
          e = $e0;
          throw new RequestException(e.getMessage());
        }
         else 
          throw unwrap($e0);
      }
    }
  }
   else {
    $setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(123, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 123);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(269, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 269);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(64, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 64);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(36, 6, $intern_7, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 36);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(271, 36, $intern_7, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 271);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(276, 36, $intern_7, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 276);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = elem['dir'] == null?null:String(elem['dir']);
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_4, 58, 0, [RTL, LTR, DEFAULT]);
}

defineClass(58, 8, {58:1, 3:1, 7:1, 8:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 58, Ljava_lang_Enum_2_classLit, values_2);
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 28)) {
    jse = dynamicCast(e, 28);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 4)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create_0(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_8;
  a1 = value_0 >> 22 & $intern_8;
  a2 = value_0 < 0?$intern_9:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_10 + a.h * $intern_11;
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_12) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_11) {
    a2 = round_int(value_0 / $intern_11);
    value_0 -= a2 * $intern_11;
  }
  a1 = 0;
  if (value_0 >= $intern_10) {
    a1 = round_int(value_0 / $intern_10);
    value_0 -= a1 * $intern_10;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_8 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_8 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_9 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_4, 327, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_0(value_0));
    return result;
  }
  return create_0(value_0);
}

function gte(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_9;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_8, m:res1 & $intern_8, h:res2 & $intern_9};
}

function toDouble(a){
  var neg0, neg1, neg2;
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_12;
  }
  if (!gte(a, ZERO)) {
    return -toDoubleHelper((neg0 = ~a.l + 1 & $intern_8 , neg1 = ~a.m + (neg0 == 0?1:0) & $intern_8 , neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_9 , create0(neg0, neg1, neg2)));
  }
  return a.l + a.m * $intern_10 + a.h * $intern_11;
}

function toInt(a){
  return a.l | a.m << 22;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_8, $intern_8, 524287);
  MIN_VALUE = create0(0, 0, $intern_13);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad($clinit_LogConfiguration());
  $onModuleLoad_1(new MovieApp);
}

function $getLevel(this$static){
  if (this$static.level) {
    return this$static.level;
  }
  return $clinit_Level() , ALL;
}

function $setFormatter(this$static, newFormatter){
  this$static.formatter = newFormatter;
}

function $setLevel(this$static, newLevel){
  this$static.level = newLevel;
}

defineClass(56, 1, {56:1});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 56);
function ConsoleLogHandler(){
  $setFormatter(this, new TextLogFormatter(true));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(205, 56, {56:1}, ConsoleLogHandler);
_.publish = function publish(record){
  var msg;
  if (!window.console || ($getLevel(this) , false)) {
    return;
  }
  msg = $format(this.formatter, record);
  $clinit_Level();
  window.console.error(msg);
}
;
var Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 205);
function DevelopmentModeLogHandler(){
  $setFormatter(this, new TextLogFormatter(false));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(206, 56, {56:1}, DevelopmentModeLogHandler);
_.publish = function publish_0(record){
  return;
}
;
var Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 206);
function $clinit_LogConfiguration(){
  $clinit_LogConfiguration = emptyMethod;
  impl = new LogConfiguration$LogConfigurationImplSevere;
}

function $onModuleLoad(){
  var log_0;
  $configureClientSideLogging(impl);
  if (!uncaughtExceptionHandler) {
    log_0 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_logging_client_LogConfiguration_2_classLit) , Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.typeName));
    setUncaughtExceptionHandler(new LogConfiguration$1(log_0));
  }
}

var impl;
var Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', null);
function LogConfiguration$1(val$log){
  this.val$log2 = val$log;
}

defineClass(126, 1, {}, LogConfiguration$1);
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 126);
function $configureClientSideLogging(this$static){
  this$static.root = (new LoggerImplSevere , $ensureLogger(getLogManager(), ''));
  this$static.root.impl.useParentHandlers = false;
  $setLevels(this$static.root);
  $setDefaultHandlers(this$static.root);
}

function $setDefaultHandlers(l){
  var console_0, dev;
  console_0 = new ConsoleLogHandler;
  $addHandler_0(l.impl, console_0);
  dev = new DevelopmentModeLogHandler;
  $addHandler_0(l.impl, dev);
}

function $setLevels(l){
  var level, levelParam, paramsForName;
  levelParam = (ensureListParameterMap() , paramsForName = dynamicCast(listParamMap.get_1('logLevel'), 11) , !paramsForName?null:dynamicCastToString(paramsForName.get_0(paramsForName.size_1() - 1)));
  level = levelParam == null?null:($clinit_Level() , $parse_0(levelParam));
  level?$setLevel_0(l.impl, level):$setLevel_1(l, ($clinit_Level() , INFO));
}

defineClass(292, 1, {});
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 292);
function LogConfiguration$LogConfigurationImplSevere(){
}

defineClass(125, 292, {}, LogConfiguration$LogConfigurationImplSevere);
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplSevere_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplSevere', 125);
defineClass(310, 1, {});
var Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 310);
defineClass(311, 310, {});
var Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 311);
function $format(this$static, event_0){
  var message, date, s;
  message = new StringBuilder;
  $append(message, (date = new Date_0(event_0.millis) , s = new StringBuilder , $append(s, $toString_2(date)) , s.string += ' ' , $append(s, event_0.loggerName) , s.string += '\n' , s.string += 'SEVERE' , s.string += ': ' , s.string));
  $append(message, event_0.msg);
  this$static.showStackTraces && !!event_0.thrown && $printStackTrace(event_0.thrown, new StackTracePrintStream(message));
  return message.string;
}

function TextLogFormatter(showStackTraces){
  this.showStackTraces = showStackTraces;
}

defineClass(112, 311, {}, TextLogFormatter);
_.showStackTraces = false;
var Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 112);
function $parse_0(name_0){
  name_0 = name_0.toUpperCase();
  if ($equals(name_0, 'ALL')) {
    return $clinit_Level() , ALL;
  }
   else if ($equals(name_0, 'CONFIG')) {
    return $clinit_Level() , CONFIG;
  }
   else if ($equals(name_0, 'FINE')) {
    return $clinit_Level() , FINE;
  }
   else if ($equals(name_0, 'FINER')) {
    return $clinit_Level() , FINER;
  }
   else if ($equals(name_0, 'FINEST')) {
    return $clinit_Level() , FINEST;
  }
   else if ($equals(name_0, 'INFO')) {
    return $clinit_Level() , INFO;
  }
   else if ($equals(name_0, 'OFF')) {
    return $clinit_Level() , OFF;
  }
   else if ($equals(name_0, 'SEVERE')) {
    return $clinit_Level() , SEVERE;
  }
   else if ($equals(name_0, 'WARNING')) {
    return $clinit_Level() , WARNING;
  }
  throw new IllegalArgumentException_0('Invalid level "' + name_0 + '"');
}

function $addHandler_0(this$static, handler){
  $add_1(this$static.handlers, handler);
}

function $getEffectiveLevel(this$static){
  var effectiveLevel, logger;
  if (this$static.level) {
    return this$static.level;
  }
  logger = this$static.parent_0;
  while (logger) {
    effectiveLevel = logger.impl.level;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = logger.impl.parent_0;
  }
  return $clinit_Level() , INFO;
}

function $getHandlers(this$static){
  return dynamicCast($toArray(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, $intern_14, 56, this$static.handlers.array.length, 0, 1)), 124);
}

function $log(this$static, msg, thrown){
  var record;
  if ($getEffectiveLevel(this$static).intValue() <= 1000) {
    record = new LogRecord(msg);
    record.thrown = thrown;
    $setLoggerName(record, this$static.name_0);
    $log_0(this$static, record);
  }
}

function $log_0(this$static, record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  if ($getEffectiveLevel(this$static).intValue() <= 1000) {
    for (handler$array0 = dynamicCast($toArray(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, $intern_14, 56, this$static.handlers.array.length, 0, 1)), 124) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
      handler = handler$array0[handler$index0];
      handler.publish(record);
    }
    logger = this$static.useParentHandlers?this$static.parent_0:null;
    while (logger) {
      for (handler$array = $getHandlers(logger.impl) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
        handler = handler$array[handler$index];
        handler.publish(record);
      }
      logger = logger.impl.useParentHandlers?logger.impl.parent_0:null;
    }
  }
}

function $setLevel_0(this$static, newLevel){
  this$static.level = newLevel;
}

function $setName(this$static, newName){
  this$static.name_0 = newName;
}

function $setParent(this$static, newParent){
  !!newParent && (this$static.parent_0 = newParent);
}

defineClass(157, 1, {});
_.level = null;
_.useParentHandlers = false;
var Lcom_google_gwt_logging_impl_LoggerImplRegular_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerImplRegular', 157);
function LoggerImplSevere(){
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

defineClass(82, 157, {}, LoggerImplSevere);
var Lcom_google_gwt_logging_impl_LoggerImplSevere_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerImplSevere', 82);
defineClass(303, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 303);
defineClass(304, 303, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 304);
defineClass(305, 304, {});
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 305);
function StackTracePrintStream(builder){
  this.builder = builder;
}

defineClass(211, 305, {}, StackTracePrintStream);
var Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 211);
function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(93, 1, {93:1, 280:1, 3:1}, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.equals$ = function equals_1(obj){
  if (!instanceOf(obj, 280)) {
    return false;
  }
  return $equals(this.html, dynamicCast(dynamicCast(obj, 280), 93).html);
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode_0(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 93);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_1?TYPE_1:(TYPE_1 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  var scriptElem, elem;
  if (!closeHandlersInitialized) {
    scriptElem = (elem = $doc.createElement('script') , $setInnerText(elem, 'function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n') , elem);
    $appendChild($doc.body, scriptElem);
    $initWindowCloseHandlerImpl();
    $removeChild($doc.body, scriptElem);
    closeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

var closeHandlersInitialized = false, handlers_0;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_2 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(203, 309, {}, Window$ClosingEvent);
_.dispatch_0 = function dispatch_3(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 203);
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = __substr(queryString, 1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (!key.length) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull('encodedURLComponent', val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (!instanceOf($e0, 28))
          throw unwrap($e0);
      }
      values = dynamicCast(out.get_1(key), 11);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 9);
    entry.setValue(unmodifiableList(dynamicCast(entry.getValue(), 11)));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString, href_0, hashLoc, questionLoc;
  currentQueryString = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc >= 0 && (href_0 = href_0.substring(0, hashLoc)) , questionLoc = href_0.indexOf('?') , questionLoc > 0?href_0.substring(questionLoc):'');
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(111, 88, {15:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 111);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_15;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_13;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_10;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_16;
    case 'gesturechange':
      return $intern_17;
    case 'gestureend':
      return $intern_18;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 17)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkBitlessEvent(elem, eventTypeName){
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
  $equals('dragover', eventTypeName) && $sinkBitlessEventImpl(elem, 'dragenter');
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_15 && (elem.onerror = bits & $intern_15?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_13 && (elem.onpaste = bits & $intern_13?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_10 && (elem.ontouchend = bits & $intern_10?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_16 && (elem.ongesturestart = bits & $intern_16?dispatchEvent_1:null);
  chMask & $intern_17 && (elem.ongesturechange = bits & $intern_17?dispatchEvent_1:null);
  chMask & $intern_18 && (elem.ongestureend = bits & $intern_18?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $eventGetCurrentTarget(evt);
  $setPropertyString(element, '__gwtLastUnhandledEvent', evt.type);
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandlerImpl(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}

function IncompatibleRemoteServiceException(){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function IncompatibleRemoteServiceException_0(msg){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser. ( ' + msg + ' )');
}

function IncompatibleRemoteServiceException_1(cause){
  RuntimeException_1.call(this, 'The response could not be deserialized', cause);
}

defineClass(68, 12, $intern_2, IncompatibleRemoteServiceException, IncompatibleRemoteServiceException_0, IncompatibleRemoteServiceException_1);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 68);
function deserialize(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate(streamReader){
  return new IncompatibleRemoteServiceException;
}

function serialize(streamWriter, instance){
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException(s){
  RuntimeException_1.call(this, s, null);
}

function InvocationException_0(s, cause){
  RuntimeException_1.call(this, s, cause);
}

defineClass(55, 12, $intern_2, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'InvocationException', 55);
function $create(this$static, serviceEntryPoint){
  this$static.builder = new RequestBuilder(($clinit_RequestBuilder() , POST), serviceEntryPoint);
  return this$static;
}

function $doFinish(rb){
  $setHeader(rb, 'X-GWT-Permutation', $strongName);
  $setHeader(rb, 'X-GWT-Module-Base', getModuleBaseURL());
}

function $doSetCallback(rb, callback){
  throwIfNull('callback', callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data_0){
  rb.requestData = data_0;
}

function $finish(this$static){
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  }
   finally {
    this$static.builder = null;
  }
}

function $setCallback_0(this$static, callback){
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setContentType(this$static){
  $setHeader(this$static.builder, 'Content-Type', 'text/x-gwt-rpc; charset=utf-8');
  return this$static;
}

function $setRequestData(this$static, data_0){
  $doSetRequestData(this$static.builder, data_0);
  return this$static;
}

function RpcRequestBuilder(){
}

defineClass(270, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcRequestBuilder', 270);
function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(161, 12, $intern_2, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 161);
function deserialize_0(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_0(streamReader){
  return new RpcTokenException;
}

function SerializationException(msg){
  Exception.call(this, msg);
}

defineClass(60, 6, {60:1, 3:1, 6:1, 4:1}, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'SerializationException', 60);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
  InvocationException.call(this, 'Service implementation URL not specified');
}

defineClass(137, 55, $intern_2, ServiceDefTarget$NoServiceEntryPointSpecifiedException);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 137);
function StatusCodeException(statusCode, statusText, encodedResponse){
  InvocationException.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

defineClass(273, 55, $intern_2, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'StatusCodeException', 273);
function serialize_0(streamWriter, instance){
  $writeString(streamWriter, instance.nullField);
}

function deserialize_1(streamReader, instance){
}

function instantiate_1(streamReader){
  return $clinit_Boolean() , streamReader.results[--streamReader.index_0]?TRUE:FALSE;
}

function deserialize_2(streamReader, instance){
}

function instantiate_2(streamReader){
  return new Float(streamReader.results[--streamReader.index_0]);
}

function deserialize_3(streamReader, instance){
}

function instantiate_3(streamReader){
  return valueOf($readInt(streamReader));
}

function deserialize_4(streamReader, instance){
}

function instantiate_4(streamReader){
  return $getString(streamReader, $readInt(streamReader));
}

function serialize_1(streamWriter, instance){
  $writeInt(streamWriter, $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0){
  instance.detailMessage = value_0;
}

function deserialize_5(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_5(streamReader){
  return new ArrayList;
}

function deserialize_6(streamReader, instance){
  var i, obj, size_0;
  size_0 = $readInt(streamReader);
  for (i = 0; i < size_0; ++i) {
    obj = $readObject(streamReader);
    instance.add_0(obj);
  }
}

function serialize_2(streamWriter, instance){
  var obj, obj$iterator, size_0;
  size_0 = instance.map_0.size_1();
  append(streamWriter.encodeBuffer, '' + size_0);
  for (obj$iterator = $iterator(new AbstractMap$1(instance.map_0)); obj$iterator.val$outerIter2.hasNext();) {
    obj = $next_0(obj$iterator);
    $writeObject(streamWriter, obj);
  }
}

function deserialize_7(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function serialize_3(streamWriter, instance){
  serialize_2(streamWriter, instance);
}

function instantiate_6(streamReader){
  return new HashSet;
}

function deserialize_8(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function serialize_4(streamWriter, instance){
  serialize_2(streamWriter, instance);
}

function instantiate_7(streamReader){
  return new LinkedHashSet;
}

function deserialize_9(streamReader, instance){
  var i, key, size_0, value_0;
  size_0 = $readInt(streamReader);
  for (i = 0; i < size_0; ++i) {
    key = $readObject(streamReader);
    value_0 = $readObject(streamReader);
    $put_2(instance, key, value_0);
  }
}

function deserialize_10(streamReader, instance){
  deserialize_9(streamReader, instance);
}

function instantiate_8(streamReader){
  return new TreeMap_0(dynamicCast($readObject(streamReader), 277));
}

function deserialize_11(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_9(streamReader){
  return new TreeSet_0(dynamicCast($readObject(streamReader), 277));
}

function $setFlags(this$static, flags){
  this$static.flags = flags;
}

function $setVersion(this$static, version){
  this$static.version = version;
}

defineClass(122, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStream', 122);
function $readObject(this$static){
  var token, typeSignature, id_0, instance;
  token = $readInt(this$static);
  if (token < 0) {
    return $get(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return id_0 = ($add_1(this$static.seenArray, null) , this$static.seenArray.array.length) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set(this$static.seenArray, id_0 - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

defineClass(274, 122, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamReader', 274);
function $addString(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = dynamicCast(this$static.stringMap.get_1(string), 29);
  if (o) {
    return o.value_0;
  }
  $add_1(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  this$static.stringMap.put(string, valueOf(index_0));
  return index_0;
}

function $writeInt(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeObject(this$static, instance){
  var objIndex, typeSignature;
  if (instance == null) {
    $writeInt(this$static, $addString(this$static, null));
    return;
  }
  objIndex = $containsKey(this$static.objectMap, instance)?dynamicCast($get_0(this$static.objectMap, instance), 29).value_0:-1;
  if (objIndex >= 0) {
    append(this$static.encodeBuffer, '' + -(objIndex + 1));
    return;
  }
  $put(this$static.objectMap, instance, valueOf(this$static.objectCount++));
  typeSignature = $getObjectTypeSignature(this$static, instance);
  if (typeSignature == null) {
    throw new SerializationException('could not get type signature for ' + getClass__Ljava_lang_Class___devirtual$(instance));
  }
  $writeInt(this$static, $addString(this$static, typeSignature));
  $serialize(this$static.serializer, this$static, instance, typeSignature);
}

function $writeString(this$static, value_0){
  $writeInt(this$static, $addString(this$static, value_0));
}

defineClass(267, 122, {});
_.objectCount = 0;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamWriter', 267);
function $getString(this$static, index_0){
  return index_0 > 0?this$static.stringTable[index_0 - 1]:null;
}

function $prepareToRead(this$static, encoded){
  this$static.results = eval(encoded);
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
  $setVersion(this$static, $readInt(this$static));
  $setFlags(this$static, $readInt(this$static));
  if (this$static.version != 7) {
    throw new IncompatibleRemoteServiceException_0('Expecting version 7 from server, got ' + this$static.version + '.');
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw new IncompatibleRemoteServiceException_0('Got an unknown flag from server: ' + this$static.flags);
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function $readInt(this$static){
  return this$static.results[--this$static.index_0];
}

function ClientSerializationStreamReader(serializer){
  this.seenArray = new ArrayList;
  this.serializer = serializer;
}

defineClass(275, 274, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamReader', 275);
function $clinit_ClientSerializationStreamWriter(){
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $getObjectTypeSignature(this$static, o){
  var clazz, e, clazz_0, superclass;
  clazz = getClass__Ljava_lang_Class___devirtual$(o);
  if (instanceOf(o, 8)) {
    e = dynamicCast(o, 8);
    clazz = (clazz_0 = e.___clazz$ , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass);
  }
  return $getSerializationSignature(this$static.serializer, clazz);
}

function $toString(this$static){
  var buffer;
  buffer = new StringBuilder;
  append(buffer, '' + this$static.version);
  append(buffer, '' + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, '' + stringTable.array.length);
  for (s$iterator = new AbstractList$IteratorImpl(stringTable); s$iterator.i < s$iterator.this$01_0.size_1();) {
    s = (checkCriticalElement(s$iterator.i < s$iterator.this$01_0.size_1()) , dynamicCastToString(s$iterator.this$01_0.get_0(s$iterator.i++)));
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter(serializer, moduleBaseURL, serializationPolicyStrongName){
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap;
  this.stringMap = new HashMap;
  this.stringTable = new ArrayList;
  this.serializer = serializer;
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token){
  $clinit_ClientSerializationStreamWriter();
  sb.string += token;
  sb.string += '|';
}

function getQuotingRegex(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  }
   else if (ua.indexOf('chrome/11') != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  }
   else if (ua.indexOf('webkit') != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  }
   else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str){
  var regex = regex_0;
  var idx = 0;
  var out = '';
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += '\\0';
    }
     else if (ch_0 == 92) {
      out += '\\\\';
    }
     else if (ch_0 == 124) {
      out += '\\!';
    }
     else {
      var hex = ch_0.toString(16);
      out += '\\u0000'.substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

defineClass(268, 267, {}, ClientSerializationStreamWriter);
_.toString$ = function toString_6(){
  return $toString(this);
}
;
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamWriter', 268);
function $createStreamReader(this$static, encoded){
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader(this$static.serializer);
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $doInvoke(this$static, methodName, statsContext, requestData){
  var ex, rb;
  rb = $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData);
  try {
    return throwIfNull('callback', rb.callback) , $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 36)) {
      ex = $e0;
      new InvocationException_0('Unable to initiate the asynchronous service invocation (' + methodName + ') -- check the network connection', ex);
      alert_0('Could not load worldmap data.');
    }
     else 
      throw unwrap($e0);
  }
   finally {
    $isStatsAvailable() && $stats_0($bytesStat(statsContext, methodName, requestData.length, 'requestSent'));
  }
  return null;
}

function $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData){
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw new ServiceDefTarget$NoServiceEntryPointSpecifiedException;
  }
  responseHandler = new RequestCallbackAdapter(this$static, methodName, statsContext);
  !this$static.rpcRequestBuilder && (this$static.rpcRequestBuilder = new RpcRequestBuilder);
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback_0(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish(this$static.rpcRequestBuilder);
}

function RemoteServiceProxy(moduleBaseURL, serializer){
  this.moduleBaseURL = moduleBaseURL;
  this.remoteServiceURL = moduleBaseURL + 'query';
  this.serializer = serializer;
  this.serializationPolicyName = 'E025A6C82C992435562AEE4E826EB364';
}

function getEncodedInstance(encodedResponse){
  if ($equals(encodedResponse.substr(0, 4), '//OK') || $equals(encodedResponse.substr(0, 4), '//EX')) {
    return __substr(encodedResponse, 4, encodedResponse.length - 4);
  }
  return encodedResponse;
}

defineClass(134, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy', 134);
function $finish_0(this$static){
  var payload;
  payload = $toString(this$static.streamWriter);
  $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'requestSerialized'));
  return $doInvoke(this$static.this$01, this$static.fullServiceName, this$static.statsContext, payload);
}

function RemoteServiceProxy$ServiceHelper(this$0){
  this.this$01 = this$0;
  this.fullServiceName = 'QueryService_Proxy.getWorldStatisticsModel';
  this.methodName = 'getWorldStatisticsModel';
  this.statsContext = new RpcStatsContext;
}

defineClass(136, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy/ServiceHelper', 136);
function $onResponseReceived(this$static, response){
  var caught, e, encodedResponse, result, statusCode, statusCode_0;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode = (statusCode_0 = response.xmlHttpRequest.status , statusCode_0 == 1223?204:statusCode_0);
    $isStatsAvailable() && $stats_0($bytesStat(this$static.statsContext, this$static.methodName, encodedResponse.length, 'responseReceived'));
    statusCode != 200?(caught = new StatusCodeException(statusCode, response.xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new InvocationException('No response payload from ' + this$static.methodName)):$equals(encodedResponse.substr(0, 4), '//OK')?(result = $readObject($createStreamReader(this$static.streamFactory, encodedResponse))):$equals(encodedResponse.substr(0, 4), '//EX')?(caught = dynamicCast($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), 4)):(caught = new InvocationException(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 60)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    }
     else if (instanceOf($e0, 4)) {
      e = $e0;
      caught = e;
    }
     else 
      throw unwrap($e0);
  }
   finally {
    $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'responseDeserialized'));
  }
  try {
    !caught?dynamicCast(result, 73):alert_0('Could not load worldmap data.');
  }
   finally {
    $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'end'));
  }
}

function RequestCallbackAdapter(streamFactory, methodName, statsContext){
  this.streamFactory = streamFactory;
  this.methodName = methodName;
  this.statsContext = statsContext;
}

defineClass(250, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter', 250);
function $clinit_RequestCallbackAdapter$ResponseReader(){
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1;
  BYTE = new RequestCallbackAdapter$ResponseReader$2;
  CHAR = new RequestCallbackAdapter$ResponseReader$3;
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4;
  FLOAT = new RequestCallbackAdapter$ResponseReader$5;
  INT = new RequestCallbackAdapter$ResponseReader$6;
  LONG = new RequestCallbackAdapter$ResponseReader$7;
  OBJECT = new RequestCallbackAdapter$ResponseReader$8;
  SHORT = new RequestCallbackAdapter$ResponseReader$9;
  STRING = new RequestCallbackAdapter$ResponseReader$10;
  VOID = new RequestCallbackAdapter$ResponseReader$11;
}

function RequestCallbackAdapter$ResponseReader(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, 1), $intern_4, 14, 0, [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

defineClass(14, 8, $intern_19);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader', 14, Ljava_lang_Enum_2_classLit, values_3);
function RequestCallbackAdapter$ResponseReader$1(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BOOLEAN', 0);
}

defineClass(251, 14, $intern_19, RequestCallbackAdapter$ResponseReader$1);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/1', 251, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$10(){
  RequestCallbackAdapter$ResponseReader.call(this, 'STRING', 9);
}

defineClass(260, 14, $intern_19, RequestCallbackAdapter$ResponseReader$10);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/10', 260, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$11(){
  RequestCallbackAdapter$ResponseReader.call(this, 'VOID', 10);
}

defineClass(261, 14, $intern_19, RequestCallbackAdapter$ResponseReader$11);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/11', 261, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$2(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BYTE', 1);
}

defineClass(252, 14, $intern_19, RequestCallbackAdapter$ResponseReader$2);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/2', 252, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$3(){
  RequestCallbackAdapter$ResponseReader.call(this, 'CHAR', 2);
}

defineClass(253, 14, $intern_19, RequestCallbackAdapter$ResponseReader$3);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/3', 253, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$4(){
  RequestCallbackAdapter$ResponseReader.call(this, 'DOUBLE', 3);
}

defineClass(254, 14, $intern_19, RequestCallbackAdapter$ResponseReader$4);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/4', 254, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$5(){
  RequestCallbackAdapter$ResponseReader.call(this, 'FLOAT', 4);
}

defineClass(255, 14, $intern_19, RequestCallbackAdapter$ResponseReader$5);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/5', 255, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$6(){
  RequestCallbackAdapter$ResponseReader.call(this, 'INT', 5);
}

defineClass(256, 14, $intern_19, RequestCallbackAdapter$ResponseReader$6);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/6', 256, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$7(){
  RequestCallbackAdapter$ResponseReader.call(this, 'LONG', 6);
}

defineClass(257, 14, $intern_19, RequestCallbackAdapter$ResponseReader$7);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/7', 257, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$8(){
  RequestCallbackAdapter$ResponseReader.call(this, 'OBJECT', 7);
}

defineClass(258, 14, $intern_19, RequestCallbackAdapter$ResponseReader$8);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/8', 258, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$9(){
  RequestCallbackAdapter$ResponseReader.call(this, 'SHORT', 8);
}

defineClass(259, 14, $intern_19, RequestCallbackAdapter$ResponseReader$9);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/9', 259, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function $bytesStat(this$static, method, bytes, eventType){
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $isStatsAvailable(){
  return !!$stats;
}

function $stats_0(data_0){
  return $stats(data_0);
}

function $timeStat(this$static, method, eventType){
  return {moduleName:$moduleName, sessionId:$sessionId, subSystem:'rpc', evtGroup:this$static.requestId, method:method, millis:(new Date).getTime(), type:eventType};
}

function RpcStatsContext(){
  RpcStatsContext_0.call(this, requestIdCounter++);
}

function RpcStatsContext_0(requestId){
  this.requestId = requestId;
}

defineClass(121, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RpcStatsContext', 121);
function $check(this$static, typeSignature){
  if (!this$static.methodMapNative[typeSignature]) {
    throw new SerializationException(typeSignature);
  }
}

function $deserialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $getSerializationSignature(this$static, clazz){
  return this$static.signatureMapNative[getHashCode(clazz)];
}

function $instantiate(this$static, stream, typeSignature){
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function $serialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $serialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function SerializerBase(methodMapNative, signatureMapNative){
  new HashMap;
  this.methodMapNative = methodMapNative;
  this.signatureMapNative = signatureMapNative;
}

defineClass(159, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 159);
function $deserialize_0(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function $serialize_0(this$static, stream, instance, signature){
  this$static[signature][2](stream, instance);
}

function $addStyleName(this$static, style){
  setStyleName(($clinit_DOM() , this$static.element), style, true);
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $removeStyleName(this$static){
  setStyleName(($clinit_DOM() , this$static.element), 'section-hidden', false);
}

function $resolvePotentialElement(){
  throw new UnsupportedOperationException;
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $sinkBitlessEvent_0(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent(this$static.element, eventTypeName);
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

defineClass(13, 1, {16:1, 13:1});
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.toString$ = function toString_7(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 13);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent_0(this$static, type_0.name_0):this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this$static.element, typeInt | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw new IllegalStateException("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && isOrHasChildImpl(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw new IllegalStateException("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    $clinit_DOM();
    setEventListener(this$static.element, null);
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 52)) {
    dynamicCast(this$static.parent_0, 52).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException("This widget's parent does not implement HasWidgets");
  }
}

function $setParent_0(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents_0(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(10, 13, $intern_20);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 10);
defineClass(298, 10, $intern_21);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 298);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_3(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent_0(child, this$static);
}

function $remove(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent_0(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , parent_0 = elem.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0), elem);
    $remove_1(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection;
}

defineClass(101, 298, $intern_21);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 101);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(138, 101, $intern_21);
_.remove = function remove_0(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 138);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 10);
    try {
      c.execute(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_4(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(142, 102, $intern_6, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 142);
function AttachDetachException$1(){
}

defineClass(143, 1, {}, AttachDetachException$1);
_.execute = function execute(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 143);
function AttachDetachException$2(){
}

defineClass(144, 1, {}, AttachDetachException$2);
_.execute = function execute_0(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 144);
function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(116, 10, $intern_20);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM() , this.element));
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 116);
function $setText(this$static, text_0){
  $setInnerText(($clinit_DOM() , this$static.element), text_0);
}

function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(224, 116, $intern_20);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 224);
function Button(){
  var e;
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.setAttribute('type', 'button') , e));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Button');
}

defineClass(74, 224, {18:1, 15:1, 17:1, 74:1, 16:1, 19:1, 13:1, 10:1}, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 74);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_0(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(296, 1, {});
_.add_0 = function add_1(o){
  throw new UnsupportedOperationException_0('Add not supported on this collection');
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toString$ = function toString_8(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 296);
defineClass(299, 296, {11:1});
_.add_1 = function add_2(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_0 = function add_3(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_2(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 11)) {
    return false;
  }
  other = dynamicCast(o, 11);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_4(){
  return hashCode_15(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 299);
function $add_1(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_19(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $set(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function $toArray(this$static, out){
  var i, size_0, result;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = initializeArrayElementsWithDefaults(0, size_0) , initValues(getClass__Ljava_lang_Class___devirtual$(out), out.castableTypeMap$, out.__elementTypeId$, out.__elementTypeCategory$, result) , result));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(5, 299, $intern_22, ArrayList);
_.add_1 = function add_4(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice(this.array, index_0, 0, o);
}
;
_.add_0 = function add_5(o){
  return $add_1(this, o);
}
;
_.contains_0 = function contains_0(o){
  return $indexOf(this, o, 0) != -1;
}
;
_.get_0 = function get_0(index_0){
  return $get(this, index_0);
}
;
_.size_1 = function size_1(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 5);
function ChangeListenerCollection(){
  ArrayList.call(this);
}

defineClass(162, 5, $intern_22, ChangeListenerCollection);
var Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ChangeListenerCollection', 162);
function deserialize_12(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_10(streamReader){
  return new ChangeListenerCollection;
}

function ClickListenerCollection(){
  ArrayList.call(this);
}

defineClass(163, 5, $intern_22, ClickListenerCollection);
var Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ClickListenerCollection', 163);
function deserialize_13(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_11(streamReader){
  return new ClickListenerCollection;
}

function $checkInit(this$static){
  if (!this$static.widget) {
    throw new IllegalStateException('initWidget() is not called yet');
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw new IllegalStateException('Composite.initWidget() may only be called once.');
  }
  if (!widget) {
    throw new NullPointerException_0('widget cannot be null');
  }
  $removeFromParent(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent_0(widget, this$static);
}

defineClass(302, 10, $intern_20);
_.isAttached = function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}
;
_.onAttach = function onAttach_1(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents_0(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
  $clinit_DOM();
  setEventListener(this.element, this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this.widget);
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, $resolvePotentialElement());
  return $clinit_DOM() , this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 302);
function $setTextOrHtml(this$static, content_0){
  $setInnerHTML(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(249, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 249);
function $add_2(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function FlowPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
}

defineClass(21, 101, $intern_21, FlowPanel);
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 21);
function FocusListenerCollection(){
  ArrayList.call(this);
}

defineClass(164, 5, $intern_22, FocusListenerCollection);
var Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusListenerCollection', 164);
function deserialize_14(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_12(streamReader){
  return new FocusListenerCollection;
}

function FormHandlerCollection(){
  ArrayList.call(this);
}

defineClass(165, 5, $intern_22, FormHandlerCollection);
var Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormHandlerCollection', 165);
function deserialize_15(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_13(streamReader){
  return new FormHandlerCollection;
}

function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(120, 10, $intern_20);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 120);
function Label(element){
  LabelBase.call(this, element, $equalsIgnoreCase('span', element.tagName));
}

defineClass(247, 120, $intern_20);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 247);
function $setHTML(this$static, html){
  $setTextOrHtml(this$static.directionalTextHelper, html);
}

function HTML(){
  Label.call(this, $doc.createElement('div'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-HTML');
}

defineClass(248, 247, $intern_20, HTML);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 248);
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  $clinit_Style$TextAlign();
}

function KeyboardListenerCollection(){
  ArrayList.call(this);
}

defineClass(166, 5, $intern_22, KeyboardListenerCollection);
var Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'KeyboardListenerCollection', 166);
function deserialize_16(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_14(streamReader){
  return new KeyboardListenerCollection;
}

function $checkIndex(this$static, index_0){
  if (index_0 < 0 || index_0 >= ($clinit_DOM() , this$static.element).options.length) {
    throw new IndexOutOfBoundsException;
  }
}

function $getSelectedValue(this$static){
  var index_0;
  index_0 = ($clinit_DOM() , this$static.element).selectedIndex;
  return index_0 == -1?null:($checkIndex(this$static, index_0) , this$static.element.options[index_0].value);
}

function $insertItem(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = ($clinit_DOM() , this$static.element);
  option = $doc.createElement('option');
  option.text = item_0;
  option.removeAttribute('bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    $selectAdd(select, option, null);
  }
   else {
    before = select.options[index_0];
    $selectAdd(select, option, before);
  }
}

function ListBox(){
  FocusWidget.call(this, $doc.createElement('select'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-ListBox');
}

defineClass(230, 116, $intern_20, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 230);
function LoadListenerCollection(){
  ArrayList.call(this);
}

defineClass(167, 5, $intern_22, LoadListenerCollection);
var Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LoadListenerCollection', 167);
function deserialize_17(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_15(streamReader){
  return new LoadListenerCollection;
}

function MouseListenerCollection(){
  ArrayList.call(this);
}

defineClass(168, 5, $intern_22, MouseListenerCollection);
var Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MouseListenerCollection', 168);
function deserialize_18(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_16(streamReader){
  return new MouseListenerCollection;
}

function MouseWheelListenerCollection(){
  ArrayList.call(this);
}

defineClass(169, 5, $intern_22, MouseWheelListenerCollection);
var Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MouseWheelListenerCollection', 169);
function deserialize_19(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_17(streamReader){
  return new MouseWheelListenerCollection;
}

function PopupListenerCollection(){
  ArrayList.call(this);
}

defineClass(170, 5, $intern_22, PopupListenerCollection);
var Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupListenerCollection', 170);
function deserialize_20(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_18(streamReader){
  return new PopupListenerCollection;
}

function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_2(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    widgetsToDetach.map_0.clear_0();
    rootPanels.clear_0();
  }
}

function get_1(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast(rootPanels.get_1(null), 67);
  if (rp) {
    return rp;
  }
  rootPanels.size_1() == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  rootPanels.put(null, rp);
  $add_4(widgetsToDetach, rp);
  return rp;
}

defineClass(67, 138, $intern_23);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 67);
function RootPanel$1(){
}

defineClass(140, 1, {}, RootPanel$1);
_.execute = function execute_1(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 140);
function RootPanel$2(){
}

defineClass(141, 1, {319:1, 51:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 141);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(139, 67, $intern_23, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 139);
function ScrollListenerCollection(){
  ArrayList.call(this);
}

defineClass(171, 5, $intern_22, ScrollListenerCollection);
var Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollListenerCollection', 171);
function deserialize_21(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_19(streamReader){
  return new ScrollListenerCollection;
}

function TabListenerCollection(){
  ArrayList.call(this);
}

defineClass(172, 5, $intern_22, TabListenerCollection);
var Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabListenerCollection', 172);
function deserialize_22(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_20(streamReader){
  return new TabListenerCollection;
}

function TableListenerCollection(){
  ArrayList.call(this);
}

defineClass(173, 5, $intern_22, TableListenerCollection);
var Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TableListenerCollection', 173);
function deserialize_23(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_21(streamReader){
  return new TableListenerCollection;
}

function TreeListenerCollection(){
  ArrayList.call(this);
}

defineClass(174, 5, $intern_22, TreeListenerCollection);
var Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TreeListenerCollection', 174);
function deserialize_24(streamReader, instance){
  deserialize_6(streamReader, instance);
}

function instantiate_22(streamReader){
  return new TreeListenerCollection;
}

function $add_3(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf_0(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 10, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_0(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_1(this$static, w){
  var index_0;
  index_0 = $indexOf_0(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_0(this$static, index_0);
}

function WidgetCollection(){
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 10, 4, 0, 1);
}

defineClass(214, 1, {}, WidgetCollection);
_.iterator = function iterator_2(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 214);
function $next(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(113, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next(){
  return $next(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 113);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie9', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(78, 4, $intern_1);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 78);
defineClass(23, 78, $intern_1);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 23);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(127, 23, $intern_1, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 127);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function SimpleEventBus$1(){
}

defineClass(200, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 200);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(201, 1, {323:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 201);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(96, 1, {});
_.toString$ = function toString_9(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 96);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(65, 12, $intern_2, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 65);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = new Boolean_0(false);
  TRUE = new Boolean_0(true);
}

function $compareTo_0(this$static, b){
  return compare_1(this$static.value_0, b.value_0);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

function compare_1(x_0, y_0){
  return x_0 == y_0?0:x_0?1:-1;
}

defineClass(46, 1, {3:1, 46:1, 7:1}, Boolean_0);
_.compareTo = function compareTo_0(b){
  return $compareTo_0(this, dynamicCast(b, 46));
}
;
_.equals$ = function equals_3(o){
  return instanceOf(o, 46) && dynamicCast(o, 46).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_5(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_10(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 46);
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(45, 12, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 45);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

defineClass(79, 1, {3:1, 79:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 79);
function compare_2(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

function $compareTo_1(this$static, b){
  return compare_2(this$static.value_0, b.value_0);
}

function Float(value_0){
  this.value_0 = value_0;
}

defineClass(39, 79, {3:1, 7:1, 39:1, 79:1}, Float);
_.compareTo = function compareTo_1(b){
  return $compareTo_1(this, dynamicCast(b, 39));
}
;
_.equals$ = function equals_4(o){
  return instanceOf(o, 39) && dynamicCast(o, 39).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_6(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_12(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 39);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(40, 12, $intern_2, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 40);
function IllegalStateException(s){
  RuntimeException_0.call(this, s);
}

defineClass(43, 12, $intern_2, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 43);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(61, 12, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 61);
function $compareTo_2(this$static, b){
  return compare_3(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function compare_3(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(29, 79, {3:1, 7:1, 29:1, 79:1}, Integer);
_.compareTo = function compareTo_2(b){
  return $compareTo_2(this, dynamicCast(b, 29));
}
;
_.equals$ = function equals_5(o){
  return instanceOf(o, 29) && dynamicCast(o, 29).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_7(){
  return this.value_0;
}
;
_.toString$ = function toString_13(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 29);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_4, 29, 256, 0, 1);
}

var boxedValues_0;
function compare_4(x_0, y_0){
  var signa, signb;
  return !gte(x_0, y_0)?-1:(signa = x_0.h >> 19 , signb = y_0.h >> 19 , signa == 0?signb != 0 || x_0.h > y_0.h || x_0.h == y_0.h && x_0.m > y_0.m || x_0.h == y_0.h && x_0.m == y_0.m && x_0.l > y_0.l:!(signb == 0 || x_0.h < y_0.h || x_0.h == y_0.h && x_0.m < y_0.m || x_0.h == y_0.h && x_0.m == y_0.m && x_0.l <= y_0.l))?1:0;
}

function max_0(y_0){
  return 0 > y_0?0:y_0;
}

function min_0(x_0){
  return x_0 < 5?x_0:5;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(32, 12, $intern_2, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 32);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(77, 40, $intern_2, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 77);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(37, 1, {3:1, 37:1}, StackTraceElement);
_.equals$ = function equals_6(other){
  var st;
  if (instanceOf(other, 37)) {
    st = dynamicCast(other, 37);
    return this.lineNumber == st.lineNumber && equals_19(this.methodName, st.methodName) && equals_19(this.className_0, st.className_0) && equals_19(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_8(){
  return hashCode_13(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_14(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 37);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf_1(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_4, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function compareTo_3(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  return isJavaString(this$static)?compareTo_3(this$static, dynamicCastToString(other)):this$static.compareTo(other);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_15) {
    hiSurrogate = 55296 + (codePoint - $intern_15 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - $intern_15 & 1023) & 65535;
    return valueOf_0(hiSurrogate) + valueOf_0(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function valueOf_0(x_0){
  return String.fromCharCode(x_0);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(31, 96, {317:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 31);
function identityHashCode(o){
  return o == null?0:isJavaString(o)?getHashCode_0(o):getHashCode(o);
}

function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(41, 12, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 41);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_1(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), 9);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(295, 1, $intern_24);
_.containsEntry = function containsEntry(entry){
  return $containsEntry(this, entry);
}
;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals$ = function equals_7(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 26)) {
    return false;
  }
  otherMap = dynamicCast(obj, 26);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 9);
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_1 = function get_2(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode$ = function hashCode_9(){
  return hashCode_14(this.entrySet_0());
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.size_1 = function size_2(){
  return this.entrySet_0().size_1();
}
;
_.toString$ = function toString_15(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 9);
    comma?(sb.string += ', ' , sb):(comma = true);
    $append(sb, $toString_1(this, entry.getKey()));
    sb.string += '=';
    $append(sb, $toString_1(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 295);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_0(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_2(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_2(key) === undefined);
}

function $put(this$static, key, value_0){
  return isJavaString(key)?key == null?$put_0(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

function AbstractHashMap(){
  $reset(this);
}

defineClass(97, 295, $intern_24);
_.clear_0 = function clear_0(){
  $reset(this);
}
;
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_3(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.remove_0 = function remove_1(key){
  return isJavaString(key)?key == null?$remove_3(this.hashCodeMap, null):this.stringMap.remove_1(key):$remove_3(this.hashCodeMap, key);
}
;
_.size_1 = function size_3(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 97);
defineClass(297, 296, $intern_25);
_.equals$ = function equals_8(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 27)) {
    return false;
  }
  other = dynamicCast(o, 27);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_14(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 297);
function $contains(this$static, o){
  if (instanceOf(o, 9)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 9));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(98, 297, $intern_25, AbstractHashMap$EntrySet);
_.contains_0 = function contains_1(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_3(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_4(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 98);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(99, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_0(){
  return $hasNext(this);
}
;
_.next_0 = function next_0(){
  return checkStructuralChange(this.this$01, this) , checkCriticalElement($hasNext(this)) , dynamicCast(this.current.next_0(), 9);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 99);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(33, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_1(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_0(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 33);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(80, 33, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(--this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 80);
function $iterator(this$static){
  var outerIter;
  outerIter = this$static.this$01.entrySet_0().iterator();
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(54, 297, $intern_25, AbstractMap$1);
_.contains_0 = function contains_2(key){
  return this.this$01.containsKey(key);
}
;
_.iterator = function iterator_4(){
  return $iterator(this);
}
;
_.size_1 = function size_5(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 54);
function $next_0(this$static){
  var entry;
  entry = dynamicCast(this$static.val$outerIter2.next_0(), 9);
  return entry.getKey();
}

function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(132, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_2(){
  return this.val$outerIter2.hasNext();
}
;
_.next_0 = function next_2(){
  return $next_0(this);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 132);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(53, 1, {53:1, 9:1});
_.equals$ = function equals_9(other){
  var entry;
  if (!instanceOf(other, 9)) {
    return false;
  }
  entry = dynamicCast(other, 9);
  return equals_19(this.key, entry.getKey()) && equals_19(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_11(){
  return hashCode_22(this.key) ^ hashCode_22(this.value_0);
}
;
_.setValue = function setValue(value_0){
  return $setValue(this, value_0);
}
;
_.toString$ = function toString_16(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 53);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(47, 53, {53:1, 47:1, 9:1}, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 47);
defineClass(300, 1, {9:1});
_.equals$ = function equals_10(other){
  var entry;
  if (!instanceOf(other, 9)) {
    return false;
  }
  entry = dynamicCast(other, 9);
  return equals_19(this.getKey(), entry.getKey()) && equals_19(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_12(){
  return hashCode_22(this.getKey()) ^ hashCode_22(this.getValue());
}
;
_.toString$ = function toString_17(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 300);
function $containsEntry_0(this$static, entry){
  var key, lookupEntry;
  key = entry.getKey();
  lookupEntry = $getEntry_0(this$static, key);
  return !!lookupEntry && equals_19(lookupEntry.value_0, entry.getValue());
}

defineClass(301, 295, $intern_24);
_.containsEntry = function containsEntry_0(entry){
  return $containsEntry_0(this, entry);
}
;
_.containsKey = function containsKey_1(k){
  return !!$getEntry_0(this, k);
}
;
_.entrySet_0 = function entrySet_0(){
  return new AbstractNavigableMap$EntrySet(this);
}
;
_.get_1 = function get_4(k){
  return getEntryValueOrNull($getEntry_0(this, k));
}
;
var Ljava_util_AbstractNavigableMap_2_classLit = createForClass('java.util', 'AbstractNavigableMap', 301);
function AbstractNavigableMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(117, 297, $intern_25, AbstractNavigableMap$EntrySet);
_.contains_0 = function contains_3(o){
  return instanceOf(o, 9) && $containsEntry_0(this.this$01, dynamicCast(o, 9));
}
;
_.iterator = function iterator_5(){
  return new TreeMap$EntryIterator(this.this$01);
}
;
_.size_1 = function size_6(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractNavigableMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/EntrySet', 117);
function $iterator_0(this$static){
  var entryIterator;
  entryIterator = new TreeMap$EntryIterator((new TreeMap$EntrySet(this$static.map_0)).this$01);
  return new AbstractNavigableMap$NavigableKeySet$1(entryIterator);
}

function AbstractNavigableMap$NavigableKeySet(map_0){
  this.map_0 = map_0;
}

defineClass(91, 297, $intern_25, AbstractNavigableMap$NavigableKeySet);
_.contains_0 = function contains_4(o){
  return !!$getEntry_0(this.map_0, o);
}
;
_.iterator = function iterator_6(){
  return $iterator_0(this);
}
;
_.size_1 = function size_7(){
  return this.map_0.size_0;
}
;
var Ljava_util_AbstractNavigableMap$NavigableKeySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/NavigableKeySet', 91);
function AbstractNavigableMap$NavigableKeySet$1(val$entryIterator){
  this.val$entryIterator2 = val$entryIterator;
}

defineClass(229, 1, {}, AbstractNavigableMap$NavigableKeySet$1);
_.hasNext = function hasNext_3(){
  return this.val$entryIterator2.iter.hasNext();
}
;
_.next_0 = function next_3(){
  var entry;
  entry = dynamicCast(this.val$entryIterator2.iter.next_0(), 9);
  return entry.getKey();
}
;
var Ljava_util_AbstractNavigableMap$NavigableKeySet$1_2_classLit = createForClass('java.util', 'AbstractNavigableMap/NavigableKeySet/1', 229);
function hashCode_13(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_14(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_15(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 22)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(145, 299, {3:1, 11:1, 22:1}, Collections$EmptyList);
_.contains_0 = function contains_5(object){
  return false;
}
;
_.get_0 = function get_5(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_7(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_8(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 145);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(146, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_4(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_4(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 146);
function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(103, 1, {});
_.add_0 = function add_6(o){
  throw new UnsupportedOperationException;
}
;
_.iterator = function iterator_8(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_9(){
  return this.coll.size_1();
}
;
_.toString$ = function toString_18(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 103);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(105, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_5(){
  return this.it.hasNext();
}
;
_.next_0 = function next_5(){
  return this.it.next_0();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 105);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(104, 103, {11:1}, Collections$UnmodifiableList);
_.equals$ = function equals_11(o){
  return this.list.equals$(o);
}
;
_.get_0 = function get_6(index_0){
  return this.list.get_0(index_0);
}
;
_.hashCode$ = function hashCode_16(){
  return this.list.hashCode$();
}
;
_.listIterator = function listIterator_2(){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_3(from){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 104);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(106, 105, {}, Collections$UnmodifiableListIterator);
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_2(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 106);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(147, 1, $intern_24, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_1(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_12(o){
  return this.map_0.equals$(o);
}
;
_.get_1 = function get_7(key){
  return this.map_0.get_1(key);
}
;
_.hashCode$ = function hashCode_17(){
  return this.map_0.hashCode$();
}
;
_.put = function put_1(key, value_0){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_10(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_19(){
  return this.map_0.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 147);
defineClass(148, 103, $intern_25);
_.equals$ = function equals_13(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_18(){
  return this.coll.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 148);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableCollection.call(this, s);
}

defineClass(149, 148, $intern_25, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_9(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 149);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(152, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_6(){
  return this.val$it2.hasNext();
}
;
_.next_0 = function next_6(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(dynamicCast(this.val$it2.next_0(), 9));
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 152);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(150, 1, {9:1}, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_14(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_0(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_0(){
  return this.entry.getValue();
}
;
_.hashCode$ = function hashCode_19(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_0(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_20(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 150);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(151, 104, {11:1, 22:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 151);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  NATURAL = new Comparators$1;
}

var NATURAL;
function $compare(o1, o2){
  checkNotNull(o1);
  checkNotNull(o2);
  return compareTo_Ljava_lang_Object__I__devirtual$(dynamicCast(o1, 7), o2);
}

function Comparators$1(){
}

defineClass(244, 1, {277:1}, Comparators$1);
var Ljava_util_Comparators$1_2_classLit = createForClass('java.util', 'Comparators/1', 244);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(240, 12, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 240);
function $compareTo_3(this$static, other){
  return compare_4(fromDouble(this$static.jsdate.getTime()), fromDouble(other.jsdate.getTime()));
}

function $toString_2(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this$static.jsdate.getDay()] + ' ' + MONTHS[this$static.jsdate.getMonth()] + ' ' + padTwo(this$static.jsdate.getDate()) + ' ' + padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.jsdate.getFullYear();
}

function Date_0(date){
  this.jsdate = create(toDouble(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(63, 1, {3:1, 7:1, 63:1}, Date_0);
_.compareTo = function compareTo_4(other){
  return $compareTo_3(this, dynamicCast(other, 63));
}
;
_.equals$ = function equals_15(obj){
  return instanceOf(obj, 63) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, 63).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_20(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_21(){
  return $toString_2(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 63);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  AbstractHashMap.call(this);
}

defineClass(24, 97, $intern_26, HashMap);
_.equals = function equals_16(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode_1(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 24);
function $add_4(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return this$static.map_0.containsKey(o);
}

function $remove_2(this$static, o){
  return this$static.map_0.remove_0(o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(map_0){
  this.map_0 = map_0;
}

defineClass(34, 297, $intern_27, HashSet);
_.add_0 = function add_7(o){
  return $add_4(this, o);
}
;
_.contains_0 = function contains_6(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_10(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.size_1 = function size_11(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_22(){
  return $toString_0(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 34);
function IdentityHashMap(){
  AbstractHashMap.call(this);
}

defineClass(272, 97, $intern_26, IdentityHashMap);
_.equals$ = function equals_17(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 26)) {
    return false;
  }
  otherMap = dynamicCast(obj, 26);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 9);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(isJavaString(otherKey)?$hasStringValue(this, otherKey):!!$getEntry(this.hashCodeMap, otherKey))) {
      return false;
    }
    if (maskUndefined(otherValue) !== maskUndefined(isJavaString(otherKey)?$getStringValue(this, otherKey):getEntryValueOrNull($getEntry(this.hashCodeMap, otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.equals = function equals_18(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2);
}
;
_.getHashCode = function getHashCode_2(key){
  return getHashCode(key);
}
;
_.hashCode$ = function hashCode_21(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next_0(), 9));
    hashCode += identityHashCode(entry.getKey());
    hashCode += identityHashCode(entry.getValue());
  }
  return hashCode;
}
;
var Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util', 'IdentityHashMap', 272);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + this$static.host.getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_0(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + this$static.host.getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_3(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + this$static.host.getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this$static.host.equals(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(108, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 108);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_4, 9, 0, 0, 1);
}

defineClass(187, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_7(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_7(){
  return checkCriticalElement($hasNext_0(this)) , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 187);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(185, 108, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_0(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 185);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(186, 5, $intern_22, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 186);
function InternalJsMapFactory(){
}

defineClass(182, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 182);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(184, 182, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 184);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(183, 182, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 183);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_0(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_4(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_0(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(81, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_2 = function get_8(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_2(key, value_0){
  return $put_1(this, key, value_0);
}
;
_.remove_1 = function remove_2(key){
  return $remove_4(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 81);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(156, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_8(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_8(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.i++]);
}
;
_.i = 0;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 156);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(107, 300, {9:1}, InternalJsStringMap$2);
_.getKey = function getKey_1(){
  return this.val$key2;
}
;
_.getValue = function getValue_1(){
  return this.this$01.get_2(this.val$key2);
}
;
_.setValue = function setValue_1(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 107);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(153, 81, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_0(entry);
    }
  }
  return list.iterator();
}
;
_.get_2 = function get_9(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1;
}
;
_.put_0 = function put_3(key, value_0){
  return $put_1(this, ':' + key, value_0);
}
;
_.remove_1 = function remove_3(key){
  return $remove_4(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 153);
function InternalJsStringMap$InternalJsStringMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(155, 5, $intern_22, InternalJsStringMap$InternalJsStringMapLegacy$1);
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 155);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(154, 81, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 154);
function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_6(entry);
    $addToEnd(entry);
  }
}

function $remove_5(this$static, key){
  var entry;
  entry = dynamicCast(this$static.map_0.remove_0(key), 44);
  if (entry) {
    $remove_6(entry);
    return entry.value_0;
  }
  return null;
}

function LinkedHashMap(){
  HashMap.call(this);
  this.head_0 = new LinkedHashMap$ChainEntry(this);
  this.map_0 = new HashMap;
  this.head_0.prev = this.head_0;
  this.head_0.next = this.head_0;
}

defineClass(241, 24, $intern_26, LinkedHashMap);
_.clear_0 = function clear_1(){
  this.map_0.clear_0();
  this.head_0.prev = this.head_0;
  this.head_0.next = this.head_0;
}
;
_.containsKey = function containsKey_2(key){
  return this.map_0.containsKey(key);
}
;
_.entrySet_0 = function entrySet_2(){
  return new LinkedHashMap$EntrySet(this);
}
;
_.get_1 = function get_10(key){
  var entry;
  entry = dynamicCast(this.map_0.get_1(key), 44);
  if (entry) {
    $recordAccess(this, entry);
    return entry.value_0;
  }
  return null;
}
;
_.put = function put_4(key, value_0){
  var newEntry, old, oldValue;
  old = dynamicCast(this.map_0.get_1(key), 44);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this, key, value_0);
    this.map_0.put(key, newEntry);
    $addToEnd(newEntry);
    return null;
  }
   else {
    oldValue = $setValue(old, value_0);
    $recordAccess(this, old);
    return oldValue;
  }
}
;
_.remove_0 = function remove_4(key){
  return $remove_5(this, key);
}
;
_.size_1 = function size_12(){
  return this.map_0.size_1();
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 241);
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$01.head_0.prev;
  this$static.prev = tail;
  this$static.next = this$static.this$01.head_0;
  tail.next = this$static.this$01.head_0.prev = this$static;
}

function $remove_6(this$static){
  this$static.next.prev = this$static.prev;
  this$static.prev.next = this$static.next;
  this$static.next = this$static.prev = null;
}

function LinkedHashMap$ChainEntry(this$0){
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key, value_0){
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key, value_0);
}

defineClass(44, 47, {53:1, 47:1, 44:1, 9:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 44);
function $contains_1(this$static, o){
  if (instanceOf(o, 9)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 9));
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(242, 297, $intern_25, LinkedHashMap$EntrySet);
_.contains_0 = function contains_7(o){
  return $contains_1(this, o);
}
;
_.iterator = function iterator_11(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.size_1 = function size_13(){
  return this.this$01.map_0.size_1();
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 242);
function LinkedHashMap$EntrySet$EntryIterator(this$1){
  this.this$11 = this$1;
  this.next = this$1.this$01.head_0.next;
  recordLastKnownStructure(this$1.this$01.map_0, this);
}

defineClass(243, 1, {}, LinkedHashMap$EntrySet$EntryIterator);
_.hasNext = function hasNext_9(){
  return this.next != this.this$11.this$01.head_0;
}
;
_.next_0 = function next_9(){
  return checkStructuralChange(this.this$11.this$01.map_0, this) , checkCriticalElement(this.next != this.this$11.this$01.head_0) , this.last = this.next , this.next = this.next.next , this.last;
}
;
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 243);
function LinkedHashSet(){
  HashSet_0.call(this, new LinkedHashMap);
}

defineClass(175, 34, $intern_27, LinkedHashSet);
var Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util', 'LinkedHashSet', 175);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(62, 12, $intern_2, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 62);
function equals_19(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_22(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $getEntry_0(this$static, key){
  var c, childNum, tree;
  tree = this$static.root;
  while (tree) {
    c = $compare(key, tree.key);
    if (c == 0) {
      return tree;
    }
    childNum = c < 0?0:1;
    tree = tree.child[childNum];
  }
  return null;
}

function $inOrderAdd(this$static, list, type_0, current, fromKey, fromInclusive, toKey, toInclusive){
  var leftNode, rightNode;
  if (!current) {
    return;
  }
  leftNode = current.child[0];
  !!leftNode && $inOrderAdd(this$static, list, type_0, leftNode, fromKey, fromInclusive, toKey, toInclusive);
  $inRange(type_0, current.key, fromKey, fromInclusive, toKey, toInclusive) && list.add_0(current);
  rightNode = current.child[1];
  !!rightNode && $inOrderAdd(this$static, list, type_0, rightNode, fromKey, fromInclusive, toKey, toInclusive);
}

function $inRange(type_0, key, fromKey, fromInclusive, toKey, toInclusive){
  var compare, compare_0;
  if (type_0.fromKeyValid() && (compare = $compare(key, fromKey) , compare < 0 || !fromInclusive && compare == 0)) {
    return false;
  }
  if (type_0.toKeyValid() && (compare_0 = $compare(key, toKey) , compare_0 > 0 || !toInclusive && compare_0 == 0)) {
    return false;
  }
  return true;
}

function $insert_0(this$static, tree, newNode, state){
  var c, childNum, otherChildDir;
  if (!tree) {
    return newNode;
  }
   else {
    c = $compare(newNode.key, tree.key);
    if (c == 0) {
      state.value_0 = $setValue(tree, newNode.value_0);
      state.found = true;
      return tree;
    }
    childNum = c < 0?0:1;
    tree.child[childNum] = $insert_0(this$static, tree.child[childNum], newNode, state);
    if ($isRed(tree.child[childNum])) {
      if ($isRed(tree.child[1 - childNum])) {
        tree.isRed = true;
        tree.child[0].isRed = false;
        tree.child[1].isRed = false;
      }
       else {
        $isRed(tree.child[childNum].child[childNum])?(tree = $rotateSingle(tree, 1 - childNum)):$isRed(tree.child[childNum].child[1 - childNum]) && (tree = (otherChildDir = 1 - (1 - childNum) , tree.child[otherChildDir] = $rotateSingle(tree.child[otherChildDir], otherChildDir) , $rotateSingle(tree, 1 - childNum)));
      }
    }
  }
  return tree;
}

function $isRed(node){
  return !!node && node.isRed;
}

function $put_2(this$static, key, value_0){
  var node, state;
  node = new TreeMap$Node(key, value_0);
  state = new TreeMap$State;
  this$static.root = $insert_0(this$static, this$static.root, node, state);
  state.found || ++this$static.size_0;
  this$static.root.isRed = false;
  return state.value_0;
}

function $rotateSingle(tree, rotateDirection){
  var otherChildDir, save;
  otherChildDir = 1 - rotateDirection;
  save = tree.child[otherChildDir];
  tree.child[otherChildDir] = save.child[rotateDirection];
  save.child[rotateDirection] = tree;
  tree.isRed = true;
  save.isRed = false;
  return save;
}

function TreeMap(){
  TreeMap_0.call(this, null);
}

function TreeMap_0(c){
  this.root = null;
  !c && ($clinit_Comparators() , $clinit_Comparators() , NATURAL);
}

defineClass(69, 301, $intern_26, TreeMap, TreeMap_0);
_.entrySet_0 = function entrySet_3(){
  return new TreeMap$EntrySet(this);
}
;
_.put = function put_5(key, value_0){
  return $put_2(this, key, value_0);
}
;
_.size_1 = function size_14(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_TreeMap_2_classLit = createForClass('java.util', 'TreeMap', 69);
function TreeMap$EntryIterator(this$0){
  TreeMap$EntryIterator_0.call(this, this$0, ($clinit_TreeMap$SubMapType() , All));
}

function TreeMap$EntryIterator_0(this$0, type_0){
  var list;
  list = new ArrayList;
  $inOrderAdd(this$0, list, type_0, this$0.root, null, false, null, false);
  this.iter = new AbstractList$ListIteratorImpl(list, 0);
}

defineClass(90, 1, {}, TreeMap$EntryIterator);
_.hasNext = function hasNext_10(){
  return this.iter.hasNext();
}
;
_.next_0 = function next_10(){
  return dynamicCast(this.iter.next_0(), 9);
}
;
var Ljava_util_TreeMap$EntryIterator_2_classLit = createForClass('java.util', 'TreeMap/EntryIterator', 90);
function TreeMap$EntrySet(this$0){
  AbstractNavigableMap$EntrySet.call(this, this$0);
}

defineClass(118, 117, $intern_25, TreeMap$EntrySet);
var Ljava_util_TreeMap$EntrySet_2_classLit = createForClass('java.util', 'TreeMap/EntrySet', 118);
function TreeMap$Node(key, value_0){
  AbstractMap$SimpleEntry.call(this, key, value_0);
  this.child = initDim(Ljava_util_TreeMap$Node_2_classLit, $intern_4, 75, 2, 0, 1);
  this.isRed = true;
}

defineClass(75, 47, {53:1, 47:1, 9:1, 75:1}, TreeMap$Node);
_.isRed = false;
var Ljava_util_TreeMap$Node_2_classLit = createForClass('java.util', 'TreeMap/Node', 75);
function TreeMap$State(){
}

defineClass(225, 1, {}, TreeMap$State);
_.toString$ = function toString_23(){
  return 'State: mv=' + this.matchValue + ' value=' + this.value_0 + ' done=' + this.done + ' found=' + this.found;
}
;
_.done = false;
_.found = false;
_.matchValue = false;
var Ljava_util_TreeMap$State_2_classLit = createForClass('java.util', 'TreeMap/State', 225);
function $clinit_TreeMap$SubMapType(){
  $clinit_TreeMap$SubMapType = emptyMethod;
  All = new TreeMap$SubMapType('All', 0);
  Head = new TreeMap$SubMapType$1;
  Range_0 = new TreeMap$SubMapType$2;
  Tail = new TreeMap$SubMapType$3;
}

function TreeMap$SubMapType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_TreeMap$SubMapType();
  return initValues(getClassLiteralForArray(Ljava_util_TreeMap$SubMapType_2_classLit, 1), $intern_4, 35, 0, [All, Head, Range_0, Tail]);
}

defineClass(35, 8, $intern_28, TreeMap$SubMapType);
_.fromKeyValid = function fromKeyValid(){
  return false;
}
;
_.toKeyValid = function toKeyValid(){
  return false;
}
;
var All, Head, Range_0, Tail;
var Ljava_util_TreeMap$SubMapType_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType', 35, Ljava_lang_Enum_2_classLit, values_4);
function TreeMap$SubMapType$1(){
  TreeMap$SubMapType.call(this, 'Head', 1);
}

defineClass(226, 35, $intern_28, TreeMap$SubMapType$1);
_.toKeyValid = function toKeyValid_0(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$1_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/1', 226, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeMap$SubMapType$2(){
  TreeMap$SubMapType.call(this, 'Range', 2);
}

defineClass(227, 35, $intern_28, TreeMap$SubMapType$2);
_.fromKeyValid = function fromKeyValid_0(){
  return true;
}
;
_.toKeyValid = function toKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$2_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/2', 227, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeMap$SubMapType$3(){
  TreeMap$SubMapType.call(this, 'Tail', 3);
}

defineClass(228, 35, $intern_28, TreeMap$SubMapType$3);
_.fromKeyValid = function fromKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$3_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/3', 228, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeSet(){
  this.map_0 = new TreeMap;
}

function TreeSet_0(c){
  this.map_0 = new TreeMap_0(c);
}

defineClass(70, 297, {3:1, 27:1, 70:1}, TreeSet, TreeSet_0);
_.add_0 = function add_8(o){
  return $put_2(this.map_0, o, ($clinit_Boolean() , FALSE)) == null;
}
;
_.contains_0 = function contains_8(o){
  return !!$getEntry_0(this.map_0, o);
}
;
_.iterator = function iterator_12(){
  return $iterator_0(new AbstractNavigableMap$NavigableKeySet(this.map_0));
}
;
_.size_1 = function size_15(){
  return this.map_0.size_0;
}
;
var Ljava_util_TreeSet_2_classLit = createForClass('java.util', 'TreeSet', 70);
function $clinit_Level(){
  $clinit_Level = emptyMethod;
  ALL = new Level$LevelAll;
  CONFIG = new Level$LevelConfig;
  FINE = new Level$LevelFine;
  FINER = new Level$LevelFiner;
  FINEST = new Level$LevelFinest;
  INFO = new Level$LevelInfo;
  OFF = new Level$LevelOff;
  SEVERE = new Level$LevelSevere;
  WARNING = new Level$LevelWarning;
}

defineClass(306, 1, $intern_4);
_.getName = function getName_0(){
  return 'DUMMY';
}
;
_.intValue = function intValue(){
  return -1;
}
;
_.toString$ = function toString_24(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO, OFF, SEVERE, WARNING;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 306);
function Level$LevelAll(){
}

defineClass(189, 306, $intern_4, Level$LevelAll);
_.getName = function getName_1(){
  return 'ALL';
}
;
_.intValue = function intValue_0(){
  return -2147483648;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 189);
function Level$LevelConfig(){
}

defineClass(190, 306, $intern_4, Level$LevelConfig);
_.getName = function getName_2(){
  return 'CONFIG';
}
;
_.intValue = function intValue_1(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 190);
function Level$LevelFine(){
}

defineClass(191, 306, $intern_4, Level$LevelFine);
_.getName = function getName_3(){
  return 'FINE';
}
;
_.intValue = function intValue_2(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 191);
function Level$LevelFiner(){
}

defineClass(192, 306, $intern_4, Level$LevelFiner);
_.getName = function getName_4(){
  return 'FINER';
}
;
_.intValue = function intValue_3(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 192);
function Level$LevelFinest(){
}

defineClass(193, 306, $intern_4, Level$LevelFinest);
_.getName = function getName_5(){
  return 'FINEST';
}
;
_.intValue = function intValue_4(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 193);
function Level$LevelInfo(){
}

defineClass(194, 306, $intern_4, Level$LevelInfo);
_.getName = function getName_6(){
  return 'INFO';
}
;
_.intValue = function intValue_5(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 194);
function Level$LevelOff(){
}

defineClass(195, 306, $intern_4, Level$LevelOff);
_.getName = function getName_7(){
  return 'OFF';
}
;
_.intValue = function intValue_6(){
  return $intern_0;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 195);
function Level$LevelSevere(){
}

defineClass(196, 306, $intern_4, Level$LevelSevere);
_.getName = function getName_8(){
  return 'SEVERE';
}
;
_.intValue = function intValue_7(){
  return 1000;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 196);
function Level$LevelWarning(){
}

defineClass(197, 306, $intern_4, Level$LevelWarning);
_.getName = function getName_9(){
  return 'WARNING';
}
;
_.intValue = function intValue_8(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 197);
function $addLoggerImpl(this$static, logger){
  this$static.loggerMap.put(logger.impl.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = dynamicCast(this$static.loggerMap.get_1(name_0), 66);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = newLogger.impl.name_0;
    parentName = __substr(name_1, 0, max_0($lastIndexOf(name_1, fromCodePoint(46))));
    $setParent_1(newLogger, $ensureLogger(this$static, parentName));
    this$static.loggerMap.put(newLogger.impl.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton) {
    singleton = new LogManager;
    rootLogger = new Logger('');
    $setLevel_1(rootLogger, ($clinit_Level() , INFO));
    $addLoggerImpl(singleton, rootLogger);
  }
  return singleton;
}

defineClass(158, 1, {}, LogManager);
var singleton;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 158);
function $setLoggerName(this$static, newName){
  this$static.loggerName = newName;
}

function LogRecord(msg){
  this.msg = msg;
  this.millis = fromDouble(now_1());
}

defineClass(210, 1, $intern_4, LogRecord);
_.loggerName = '';
_.millis = {l:0, m:0, h:0};
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 210);
function $log_1(this$static, msg, thrown){
  $log(this$static.impl, msg, thrown);
}

function $setLevel_1(this$static, newLevel){
  $setLevel_0(this$static.impl, newLevel);
}

function $setParent_1(this$static, newParent){
  $setParent(this$static.impl, newParent);
}

function Logger(name_0){
  this.impl = new LoggerImplSevere;
  $setName(this.impl, name_0);
}

function getLogger(name_0){
  new LoggerImplSevere;
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(66, 1, {66:1}, Logger);
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 66);
function $clinit_AppActivateSectionEvent(){
  $clinit_AppActivateSectionEvent = emptyMethod;
  TYPE_3 = new Event$Type;
}

function $dispatch_1(this$static, handler){
  $onActivateSection(handler, this$static.sectionId);
}

function AppActivateSectionEvent(sectionId){
  $clinit_AppActivateSectionEvent();
  this.sectionId = sectionId;
}

defineClass(202, 308, {}, AppActivateSectionEvent);
_.dispatch = function dispatch_4(handler){
  $dispatch_1(this, dynamicCast(handler, 318));
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return TYPE_3;
}
;
_.sectionId = 0;
var TYPE_3;
var Lwe_are_bubblesort_MovieApp_client_AppActivateSectionEvent_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'AppActivateSectionEvent', 202);
function $addHandler_1(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler);
}

function $fireEvent_1(this$static, e){
  $doFire(this$static.eventBus, e);
}

function Presenter(){
  this.eventBus = new SimpleEventBus;
}

defineClass(48, 1, {});
var Lwe_are_bubblesort_MovieApp_client_Presenter_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'Presenter', 48);
function $activateSection(this$static, section){
  $hideAllSections(this$static);
  section.show();
  $fireEvent_1(this$static, new AppSectionActivatedEvent(section.id_0));
}

function $hideAllSections(this$static){
  var currentSection, currentSection$iterator;
  for (currentSection$iterator = new AbstractList$IteratorImpl(this$static.sections.elements); currentSection$iterator.i < currentSection$iterator.this$01_0.size_1();) {
    currentSection = (checkCriticalElement(currentSection$iterator.i < currentSection$iterator.this$01_0.size_1()) , dynamicCast(currentSection$iterator.this$01_0.get_0(currentSection$iterator.i++), 38));
    currentSection.hide();
  }
}

function $init(this$static, appPanel){
  $add_2(this$static.view.appMainNavigationPanel, this$static.mainNavigation.view);
  $add_0(appPanel, this$static.view);
  $addHandler_1(this$static.mainNavigation, ($clinit_AppActivateSectionEvent() , TYPE_3), this$static);
  $setupSections(this$static);
}

function $onActivateSection(this$static, sectionId){
  var section, section$iterator;
  for (section$iterator = new AbstractList$IteratorImpl(this$static.sections.elements); section$iterator.i < section$iterator.this$01_0.size_1();) {
    section = (checkCriticalElement(section$iterator.i < section$iterator.this$01_0.size_1()) , dynamicCast(section$iterator.this$01_0.get_0(section$iterator.i++), 38));
    if (section.id_0 == sectionId) {
      $activateSection(this$static, section);
      break;
    }
  }
}

function $setupSections(this$static){
  var currentSection, currentSection$iterator, table, world;
  world = new WorldMapSection(this$static.queryService);
  table = new TableSection;
  $add_5(this$static.sections, world);
  $add_5(this$static.sections, table);
  $addMenu(this$static.mainNavigation, world);
  $addMenu(this$static.mainNavigation, table);
  for (currentSection$iterator = new AbstractList$IteratorImpl(this$static.sections.elements); currentSection$iterator.i < currentSection$iterator.this$01_0.size_1();) {
    currentSection = (checkCriticalElement(currentSection$iterator.i < currentSection$iterator.this$01_0.size_1()) , dynamicCast(currentSection$iterator.this$01_0.get_0(currentSection$iterator.i++), 38));
    currentSection.init();
    currentSection.hide();
    $add_2(this$static.view.appSectionContainerPanel, currentSection.getCompositeView());
  }
  $activateSection(this$static, world);
}

function AppController(queryService){
  AppController_0.call(this, queryService, new AppView);
}

function AppController_0(queryService, view){
  Presenter.call(this);
  this.sections = new Collection;
  this.view = view;
  this.queryService = queryService;
  this.mainNavigation = new SectionNavigationPresenter(new ButtonNavigationView, this.eventBus);
}

defineClass(100, 48, {51:1, 318:1}, AppController);
_.getCompositeView = function getCompositeView(){
  return this.view;
}
;
var Lwe_are_bubblesort_MovieApp_client_AppController_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'AppController', 100);
function $clinit_AppSectionActivatedEvent(){
  $clinit_AppSectionActivatedEvent = emptyMethod;
  TYPE_4 = new Event$Type;
}

function $dispatch_2(this$static, handler){
  $onSectionActivated(handler, this$static.sectionId);
}

function AppSectionActivatedEvent(sectionId){
  $clinit_AppSectionActivatedEvent();
  this.sectionId = sectionId;
}

defineClass(208, 308, {}, AppSectionActivatedEvent);
_.dispatch = function dispatch_5(handler){
  $dispatch_2(this, dynamicCast(handler, 321));
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_4;
}
;
_.sectionId = 0;
var TYPE_4;
var Lwe_are_bubblesort_MovieApp_client_AppSectionActivatedEvent_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'AppSectionActivatedEvent', 208);
function $addHandler_2(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler);
}

function $fireEvent_2(this$static, event_0){
  $doFire(this$static.eventBus, event_0);
}

function View(){
  this.eventBus = new SimpleEventBus;
}

defineClass(50, 302, $intern_20);
var Lwe_are_bubblesort_MovieApp_client_View_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'View', 50);
function AppView(){
  View.call(this);
  $initWidget(this, $build_appPanel(new AppView_AppViewUiBinderImpl$Widgets(this)));
}

defineClass(180, 50, $intern_20, AppView);
var Lwe_are_bubblesort_MovieApp_client_AppView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'AppView', 180);
function $build_appPanel(this$static){
  var appPanel, f_FlowPanel1, appSectionContainerPanel, f_FlowPanel2, appHeaderPanel, appMainNavigationPanel;
  appPanel = new FlowPanel;
  $add_2(appPanel, (f_FlowPanel1 = new FlowPanel , $add_2(f_FlowPanel1, (f_FlowPanel2 = new FlowPanel , $add_2(f_FlowPanel2, (appHeaderPanel = new FlowPanel , $add_2(appHeaderPanel, (appMainNavigationPanel = new FlowPanel , setStyleName(($clinit_DOM() , appMainNavigationPanel.element), 'mainnavigation', true) , this$static.owner.appMainNavigationPanel = appMainNavigationPanel , appMainNavigationPanel)) , setStyleName(appHeaderPanel.element, 'navbar-collapse', true) , setStyleName(appHeaderPanel.element, 'collapse', true) , appHeaderPanel)) , setStyleName(f_FlowPanel2.element, 'container', true) , f_FlowPanel2)) , setStyleName(f_FlowPanel1.element, 'app-header', true) , setStyleName(f_FlowPanel1.element, 'navbar', true) , setStyleName(f_FlowPanel1.element, 'navbar-default', true) , setStyleName(f_FlowPanel1.element, 'navbar-fixed-top', true) , f_FlowPanel1));
  $add_2(appPanel, (appSectionContainerPanel = new FlowPanel , setStyleName(appSectionContainerPanel.element, 'app-section-container', true) , this$static.owner.appSectionContainerPanel = appSectionContainerPanel , appSectionContainerPanel));
  setStyleName(appPanel.element, 'app', true);
  return appPanel;
}

function AppView_AppViewUiBinderImpl$Widgets(owner){
  this.owner = owner;
}

defineClass(207, 1, {}, AppView_AppViewUiBinderImpl$Widgets);
var Lwe_are_bubblesort_MovieApp_client_AppView_1AppViewUiBinderImpl$Widgets_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'AppView_AppViewUiBinderImpl/Widgets', 207);
function $activateItem(this$static, value_0){
  var button;
  $deactivateAllItems(this$static);
  button = dynamicCast(this$static.valueButtonsMapping.get_1(value_0), 74);
  !!button && setStyleName(($clinit_DOM() , button.element), 'active', true);
}

function $addItem(this$static, item_0){
  var button;
  button = new Button;
  $setText(button, item_0.displayName);
  setStyleName(($clinit_DOM() , button.element), 'btn navbar-btn btn-default', true);
  this$static.valueButtonsMapping.put(item_0.value_0, button);
  $add_2(this$static.mainPanel, button);
  $addDomHandler(button, new ButtonNavigationView$1(this$static, item_0), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
}

function $addNavigationSelectedEventHandler(this$static, handler){
  $addHandler_2(this$static, ($clinit_NavigationSelectedEvent() , TYPE_6), handler);
  return null;
}

function $deactivateAllItems(this$static){
  var button, entry, entry$iterator;
  for (entry$iterator = this$static.valueButtonsMapping.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 9);
    button = dynamicCast(entry.getValue(), 74);
    setStyleName(($clinit_DOM() , button.element), 'active', false);
  }
}

function ButtonNavigationView(){
  View.call(this);
  this.valueButtonsMapping = new HashMap;
  this.mainPanel = new FlowPanel;
  $initWidget(this, this.mainPanel);
  $setClassName(($clinit_DOM() , this.element), 'button-navigation btn-group');
}

defineClass(198, 50, $intern_20, ButtonNavigationView);
var Lwe_are_bubblesort_MovieApp_client_ButtonNavigationView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'ButtonNavigationView', 198);
function ButtonNavigationView$1(this$0, val$thisItem){
  this.this$01 = this$0;
  this.val$thisItem2 = val$thisItem;
}

defineClass(199, 1, {322:1, 51:1}, ButtonNavigationView$1);
var Lwe_are_bubblesort_MovieApp_client_ButtonNavigationView$1_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'ButtonNavigationView/1', 199);
function $addFilterFor(this$static, attribute, view){
  var presenter;
  presenter = new FilterPresenter(attribute, view);
  $add_2(this$static.view.main, presenter.view);
  $addHandler_1(presenter, ($clinit_FilterChangedEvent() , TYPE_5), this$static);
}

function $getFilterValues(this$static){
  var attribute, presenter, presenter$iterator, resultSet;
  resultSet = new UnorderedSet;
  for (presenter$iterator = $iterator(new AbstractMap$1(this$static.presenters.elements.map_0)); presenter$iterator.val$outerIter2.hasNext();) {
    presenter = dynamicCast($next_0(presenter$iterator), 92);
    attribute = presenter.attribute;
    $add_4(resultSet.elements, attribute);
  }
  return resultSet;
}

function FilterBarPresenter(view){
  Presenter.call(this);
  this.presenters = new UnorderedSet;
  this.view = view;
}

defineClass(220, 48, {51:1, 279:1}, FilterBarPresenter);
_.getCompositeView = function getCompositeView_0(){
  return this.view;
}
;
_.onFilterValueChanged = function onFilterValueChanged(){
  $fireEvent_1(this, new FilterChangedEvent);
}
;
var Lwe_are_bubblesort_MovieApp_client_FilterBarPresenter_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterBarPresenter', 220);
function FilterBarView(){
  View.call(this);
  $initWidget(this, $build_main(new FilterBarView_FilterBarViewUiBinderImpl$Widgets(this)));
}

defineClass(221, 50, $intern_20, FilterBarView);
var Lwe_are_bubblesort_MovieApp_client_FilterBarView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterBarView', 221);
function $build_main(this$static){
  var main;
  main = new FlowPanel;
  setStyleName(($clinit_DOM() , main.element), 'filterbar', true);
  this$static.owner.main = main;
  return main;
}

function FilterBarView_FilterBarViewUiBinderImpl$Widgets(owner){
  this.owner = owner;
}

defineClass(239, 1, {}, FilterBarView_FilterBarViewUiBinderImpl$Widgets);
var Lwe_are_bubblesort_MovieApp_client_FilterBarView_1FilterBarViewUiBinderImpl$Widgets_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterBarView_FilterBarViewUiBinderImpl/Widgets', 239);
function $clinit_FilterChangedEvent(){
  $clinit_FilterChangedEvent = emptyMethod;
  TYPE_5 = new Event$Type;
}

function FilterChangedEvent(){
  $clinit_FilterChangedEvent();
}

defineClass(115, 308, {}, FilterChangedEvent);
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, 279).onFilterValueChanged();
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_5;
}
;
var TYPE_5;
var Lwe_are_bubblesort_MovieApp_client_FilterChangedEvent_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterChangedEvent', 115);
function $addChangeHandler(this$static, handler){
  return $addDomHandler(this$static.listBox, handler, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE));
}

function $addItem_0(this$static, displayName, value_0){
  $insertItem(this$static.listBox, displayName, value_0, -1);
}

function FilterListBoxView(){
  var panel;
  View.call(this);
  this.listBox = new ListBox;
  panel = new FlowPanel;
  $add_2(panel, this.listBox);
  $initWidget(this, panel);
  $setClassName(($clinit_DOM() , this.element), 'filter-list-box');
}

defineClass(222, 50, $intern_20, FilterListBoxView);
var Lwe_are_bubblesort_MovieApp_client_FilterListBoxView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterListBoxView', 222);
function $fillViewValues(this$static){
  var seletableView, val, val$iterator, values, values_0;
  if (this$static.view) {
    seletableView = this$static.view;
    values = (values_0 = new Collection , $add_5(values_0, new MovieYear_0('1995')) , $add_5(values_0, new MovieYear_0('1996')) , $add_5(values_0, new MovieYear_0('1997')) , $add_5(values_0, new MovieYear_0('1998')) , $add_5(values_0, new MovieYear_0('1999')) , $add_5(values_0, new MovieYear_0('2000')) , $add_5(values_0, new MovieYear_0('2001')) , $add_5(values_0, new MovieYear_0('2002')) , $add_5(values_0, new MovieYear_0('2003')) , $add_5(values_0, new MovieYear_0('2004')) , values_0);
    for (val$iterator = new AbstractList$IteratorImpl(values.elements); val$iterator.i < val$iterator.this$01_0.size_1();) {
      val = (checkCriticalElement(val$iterator.i < val$iterator.this$01_0.size_1()) , dynamicCast(val$iterator.this$01_0.get_0(val$iterator.i++), 20));
      $addItem_0(seletableView, val.displayName, val.displayName);
    }
  }
}

function $readValue(this$static){
  this$static.attribute.value_0 = $getSelectedValue(this$static.view.listBox);
}

function FilterPresenter(attribute, view){
  Presenter.call(this);
  this.view = view;
  this.attribute = attribute;
  $fillViewValues(this);
  $addChangeHandler(this.view, new FilterPresenter$1(this));
}

defineClass(92, 48, {92:1}, FilterPresenter);
_.getCompositeView = function getCompositeView_1(){
  return this.view;
}
;
_.hashCode$ = function hashCode_23(){
  return getHashCode_0(this.attribute.value_0);
}
;
var Lwe_are_bubblesort_MovieApp_client_FilterPresenter_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterPresenter', 92);
function FilterPresenter$1(this$0){
  this.this$01 = this$0;
}

defineClass(231, 1, {324:1, 51:1}, FilterPresenter$1);
var Lwe_are_bubblesort_MovieApp_client_FilterPresenter$1_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterPresenter/1', 231);
function $loadNewData(this$static, filterSet){
  $getWorldStatisticsModel(this$static.queryService, filterSet);
}

function MapPresenter(queryService, view){
  Presenter.call(this);
  this.view = view;
  this.queryService = queryService;
}

defineClass(216, 48, {}, MapPresenter);
_.getCompositeView = function getCompositeView_2(){
  return this.view;
}
;
var Lwe_are_bubblesort_MovieApp_client_MapPresenter_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'MapPresenter', 216);
function $onModuleLoad_1(this$static){
  var appViewer;
  appViewer = new AppController(this$static.queryService);
  $init(appViewer, ($clinit_RootPanel() , get_1()));
}

function MovieApp(){
  this.queryService = new QueryService_Proxy;
}

defineClass(128, 1, {}, MovieApp);
var Lwe_are_bubblesort_MovieApp_client_MovieApp_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'MovieApp', 128);
function $clinit_NavigationSelectedEvent(){
  $clinit_NavigationSelectedEvent = emptyMethod;
  TYPE_6 = new Event$Type;
}

function NavigationSelectedEvent(){
  $clinit_NavigationSelectedEvent();
}

defineClass(212, 308, {}, NavigationSelectedEvent);
_.dispatch = function dispatch_7(handler){
  $onItemSelected(dynamicCast(handler, 320));
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_6;
}
;
var TYPE_6;
var Lwe_are_bubblesort_MovieApp_client_NavigationSelectedEvent_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'NavigationSelectedEvent', 212);
function NavigationViewItem(displayName, value_0){
  this.displayName = displayName;
  this.value_0 = value_0;
}

defineClass(209, 1, {}, NavigationViewItem);
_.hashCode$ = function hashCode_24(){
  return getHashCode_0(this.value_0);
}
;
var Lwe_are_bubblesort_MovieApp_client_NavigationViewItem_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'NavigationViewItem', 209);
function $clinit_QueryService_Proxy(){
  $clinit_QueryService_Proxy = emptyMethod;
  SERIALIZER = new QueryService_TypeSerializer;
}

function $createStreamWriter(this$static){
  var toReturn, clientSerializationStreamWriter;
  toReturn = (clientSerializationStreamWriter = new ClientSerializationStreamWriter(this$static.serializer, this$static.moduleBaseURL, this$static.serializationPolicyName) , clientSerializationStreamWriter.objectCount = 0 , $reset(clientSerializationStreamWriter.objectMap) , clientSerializationStreamWriter.stringMap.clear_0() , clientSerializationStreamWriter.stringTable.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1) , clientSerializationStreamWriter.encodeBuffer = new StringBuilder , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.moduleBaseURL) , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.serializationPolicyStrongName) , clientSerializationStreamWriter);
  return toReturn;
}

function $getWorldStatisticsModel(this$static, filterSet){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static);
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'we.are.bubblesort.MovieApp.client.QueryService') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 1) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'we.are.bubblesort.MovieApp.shared.UnorderedSet/555144488'));
    $writeObject(streamWriter, filterSet);
    $finish_0(helper, $clinit_RequestCallbackAdapter$ResponseReader());
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 60)) {
      alert_0('Could not load worldmap data.');
    }
     else 
      throw unwrap($e0);
  }
}

function QueryService_Proxy(){
  $clinit_QueryService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), SERIALIZER);
}

defineClass(135, 134, {}, QueryService_Proxy);
var SERIALIZER;
var Lwe_are_bubblesort_MovieApp_client_QueryService_1Proxy_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'QueryService_Proxy', 135);
function $clinit_QueryService_TypeSerializer(){
  $clinit_QueryService_TypeSerializer = emptyMethod;
  methodMapNative_0 = loadMethodsNative();
  signatureMapNative_0 = loadSignaturesNative();
}

function QueryService_TypeSerializer(){
  $clinit_QueryService_TypeSerializer();
  SerializerBase.call(this, methodMapNative_0, signatureMapNative_0);
}

function loadMethodsNative(){
  var result = {};
  result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate, deserialize, serialize];
  result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_0, deserialize_0];
  result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_0];
  result['com.google.gwt.user.client.ui.ChangeListenerCollection/287642957'] = [instantiate_10, deserialize_12];
  result['com.google.gwt.user.client.ui.ClickListenerCollection/2152455986'] = [instantiate_11, deserialize_13];
  result['com.google.gwt.user.client.ui.FocusListenerCollection/119490835'] = [instantiate_12, deserialize_14];
  result['com.google.gwt.user.client.ui.FormHandlerCollection/3088681894'] = [instantiate_13, deserialize_15];
  result['com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242'] = [instantiate_14, deserialize_16];
  result['com.google.gwt.user.client.ui.LoadListenerCollection/3174178888'] = [instantiate_15, deserialize_17];
  result['com.google.gwt.user.client.ui.MouseListenerCollection/465158911'] = [instantiate_16, deserialize_18];
  result['com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552'] = [instantiate_17, deserialize_19];
  result['com.google.gwt.user.client.ui.PopupListenerCollection/1920131050'] = [instantiate_18, deserialize_20];
  result['com.google.gwt.user.client.ui.ScrollListenerCollection/210686268'] = [instantiate_19, deserialize_21];
  result['com.google.gwt.user.client.ui.TabListenerCollection/3768293299'] = [instantiate_20, deserialize_22];
  result['com.google.gwt.user.client.ui.TableListenerCollection/2254740473'] = [instantiate_21, deserialize_23];
  result['com.google.gwt.user.client.ui.TreeListenerCollection/3716243734'] = [instantiate_22, deserialize_24];
  result['java.lang.Boolean/476441737'] = [instantiate_1, deserialize_1];
  result['java.lang.Float/1718559123'] = [instantiate_2, deserialize_2];
  result['java.lang.Integer/3438268394'] = [instantiate_3, deserialize_3];
  result['java.lang.String/2004016611'] = [instantiate_4, deserialize_4, serialize_1];
  result['java.util.ArrayList/4159755760'] = [instantiate_5, deserialize_5];
  result['java.util.HashSet/3273092938'] = [instantiate_6, deserialize_7, serialize_3];
  result['java.util.LinkedHashSet/95640124'] = [instantiate_7, deserialize_8, serialize_4];
  result['java.util.TreeMap/1493889780'] = [instantiate_8, deserialize_10];
  result['java.util.TreeSet/4043497002'] = [instantiate_9, deserialize_11];
  result['we.are.bubblesort.MovieApp.shared.Collection/84754217'] = [instantiate_23, deserialize_25];
  result['we.are.bubblesort.MovieApp.shared.Movie/3613549064'] = [instantiate_31, deserialize_34];
  result['we.are.bubblesort.MovieApp.shared.MovieCountry/1431698832'] = [instantiate_24, deserialize_27, serialize_6];
  result['we.are.bubblesort.MovieApp.shared.MovieDuration/2774105791'] = [instantiate_25, deserialize_28, serialize_7];
  result['we.are.bubblesort.MovieApp.shared.MovieGenre/1603729709'] = [instantiate_26, deserialize_29, serialize_8];
  result['we.are.bubblesort.MovieApp.shared.MovieID/1209027508'] = [instantiate_27, deserialize_30, serialize_9];
  result['we.are.bubblesort.MovieApp.shared.MovieLanguage/1870926895'] = [instantiate_28, deserialize_31, serialize_10];
  result['we.are.bubblesort.MovieApp.shared.MovieTitle/2682170958'] = [instantiate_29, deserialize_32, serialize_11];
  result['we.are.bubblesort.MovieApp.shared.MovieYear/2005894511'] = [instantiate_30, deserialize_33, serialize_12];
  result['we.are.bubblesort.MovieApp.shared.OrderedSet/2756050036'] = [instantiate_32, deserialize_35];
  result['we.are.bubblesort.MovieApp.shared.UnorderedSet/555144488'] = [instantiate_33, deserialize_36, serialize_13];
  result['we.are.bubblesort.MovieApp.shared.WorldStatisticsModel/1674098603'] = [instantiate_35, deserialize_38];
  result['we.are.bubblesort.MovieApp.shared.WorldStatisticsModelEntry/1086226114'] = [instantiate_34, deserialize_37];
  return result;
}

function loadSignaturesNative(){
  var result = [];
  result[getHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result[getHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result[getHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result[getHashCode(Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ChangeListenerCollection/287642957';
  result[getHashCode(Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ClickListenerCollection/2152455986';
  result[getHashCode(Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FocusListenerCollection/119490835';
  result[getHashCode(Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FormHandlerCollection/3088681894';
  result[getHashCode(Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242';
  result[getHashCode(Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.LoadListenerCollection/3174178888';
  result[getHashCode(Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseListenerCollection/465158911';
  result[getHashCode(Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552';
  result[getHashCode(Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.PopupListenerCollection/1920131050';
  result[getHashCode(Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ScrollListenerCollection/210686268';
  result[getHashCode(Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TabListenerCollection/3768293299';
  result[getHashCode(Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TableListenerCollection/2254740473';
  result[getHashCode(Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TreeListenerCollection/3716243734';
  result[getHashCode(Ljava_lang_Boolean_2_classLit)] = 'java.lang.Boolean/476441737';
  result[getHashCode(Ljava_lang_Float_2_classLit)] = 'java.lang.Float/1718559123';
  result[getHashCode(Ljava_lang_Integer_2_classLit)] = 'java.lang.Integer/3438268394';
  result[getHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
  result[getHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760';
  result[getHashCode(Ljava_util_HashSet_2_classLit)] = 'java.util.HashSet/3273092938';
  result[getHashCode(Ljava_util_LinkedHashSet_2_classLit)] = 'java.util.LinkedHashSet/95640124';
  result[getHashCode(Ljava_util_TreeMap_2_classLit)] = 'java.util.TreeMap/1493889780';
  result[getHashCode(Ljava_util_TreeSet_2_classLit)] = 'java.util.TreeSet/4043497002';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_Collection_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.Collection/84754217';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_Movie_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.Movie/3613549064';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_MovieCountry_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.MovieCountry/1431698832';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_MovieDuration_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.MovieDuration/2774105791';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_MovieGenre_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.MovieGenre/1603729709';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_MovieID_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.MovieID/1209027508';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_MovieLanguage_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.MovieLanguage/1870926895';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_MovieTitle_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.MovieTitle/2682170958';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_MovieYear_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.MovieYear/2005894511';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_OrderedSet_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.OrderedSet/2756050036';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_UnorderedSet_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.UnorderedSet/555144488';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_WorldStatisticsModel_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.WorldStatisticsModel/1674098603';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_WorldStatisticsModelEntry_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.WorldStatisticsModelEntry/1086226114';
  return result;
}

defineClass(160, 159, {}, QueryService_TypeSerializer);
var methodMapNative_0, signatureMapNative_0;
var Lwe_are_bubblesort_MovieApp_client_QueryService_1TypeSerializer_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'QueryService_TypeSerializer', 160);
function Section(sectionName){
  Presenter.call(this);
  this.name_0 = sectionName;
  ++idCounter;
  this.id_0 = idCounter;
}

defineClass(38, 48, {38:1});
_.id_0 = 0;
var idCounter = 0;
var Lwe_are_bubblesort_MovieApp_client_Section_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'Section', 38);
function $addMenu(this$static, section){
  var item_0;
  item_0 = new NavigationViewItem(section.name_0, '' + section.id_0);
  $addItem(this$static.view, item_0);
}

function $onItemSelected(this$static){
  var selectedItem;
  selectedItem = this$static.view.selectedItem;
  $fireEvent_1(this$static, new AppActivateSectionEvent(__parseAndValidateInt(selectedItem.value_0)));
}

function $onSectionActivated(this$static, sectionId){
  $activateItem(this$static.view, '' + sectionId);
}

function SectionNavigationPresenter(navigationView, navigationEventBus){
  Presenter.call(this);
  this.view = navigationView;
  $addNavigationSelectedEventHandler(this.view, this);
  $doAdd(navigationEventBus, ($clinit_AppSectionActivatedEvent() , TYPE_4), this);
}

defineClass(181, 48, {51:1, 321:1, 320:1}, SectionNavigationPresenter);
_.getCompositeView = function getCompositeView_3(){
  return this.view;
}
;
var Lwe_are_bubblesort_MovieApp_client_SectionNavigationPresenter_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'SectionNavigationPresenter', 181);
function SectionView(){
  View.call(this);
}

defineClass(114, 50, $intern_20);
var Lwe_are_bubblesort_MovieApp_client_SectionView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'SectionView', 114);
function TableSection(){
  Section.call(this, 'Tabelle');
  this.view = new TableSectionView;
}

defineClass(110, 38, {38:1}, TableSection);
_.getCompositeView = function getCompositeView_4(){
  return this.view;
}
;
_.hide = function hide(){
  $addStyleName(this.view, 'section-hidden');
}
;
_.init = function init_0(){
}
;
_.show = function show(){
  $removeStyleName(this.view);
}
;
var Lwe_are_bubblesort_MovieApp_client_TableSection_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'TableSection', 110);
function TableSectionView(){
  var mainPanel, f_FlowPanel1, f_HTML2, sb;
  SectionView.call(this);
  $initWidget(this, (mainPanel = new FlowPanel , $add_2(mainPanel, (f_FlowPanel1 = new FlowPanel , $add_2(f_FlowPanel1, (f_HTML2 = new HTML , $setHTML(f_HTML2, (sb = new StringBuilder , sb.string += '<h1>TableSection<\/h1>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , f_HTML2)) , setStyleName(($clinit_DOM() , f_FlowPanel1.element), 'container', true) , f_FlowPanel1)) , setStyleName(mainPanel.element, 'section', true) , setStyleName(mainPanel.element, 'section-table', true) , mainPanel));
}

defineClass(223, 114, $intern_20, TableSectionView);
var Lwe_are_bubblesort_MovieApp_client_TableSectionView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'TableSectionView', 223);
function WorldMapSection(queryService){
  Section.call(this, 'Karte');
  this.queryService = queryService;
  this.view = new WorldMapSectionView;
}

defineClass(109, 38, {51:1, 279:1, 38:1}, WorldMapSection);
_.getCompositeView = function getCompositeView_5(){
  return this.view;
}
;
_.hide = function hide_0(){
  $addStyleName(this.view, 'section-hidden');
}
;
_.init = function init_1(){
  this.worldmap = new MapPresenter(this.queryService, new WorldMapView);
  this.filterbar = new FilterBarPresenter(new FilterBarView);
  $addFilterFor(this.filterbar, new MovieYear_0('0'), new FilterListBoxView);
  $addHandler_1(this.filterbar, ($clinit_FilterChangedEvent() , TYPE_5), this);
  $add_2(this.view.worldmap, this.worldmap.view);
  $add_2(this.view.toolbar_0, this.filterbar.view);
}
;
_.onFilterValueChanged = function onFilterValueChanged_0(){
  $loadNewData(this.worldmap, $getFilterValues(this.filterbar));
}
;
_.show = function show_0(){
  $removeStyleName(this.view);
}
;
var Lwe_are_bubblesort_MovieApp_client_WorldMapSection_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'WorldMapSection', 109);
function WorldMapSectionView(){
  SectionView.call(this);
  $initWidget(this, $build_mainPanel(new WorldMapSectionView_WorldMapSectionViewUiBinderImpl$Widgets(this)));
}

defineClass(215, 114, $intern_20, WorldMapSectionView);
var Lwe_are_bubblesort_MovieApp_client_WorldMapSectionView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'WorldMapSectionView', 215);
function $build_mainPanel(this$static){
  var mainPanel, worldmap, f_FlowPanel1, toolbar_0;
  mainPanel = new FlowPanel;
  $add_2(mainPanel, (worldmap = new FlowPanel , setStyleName(($clinit_DOM() , worldmap.element), 'worldmap', true) , this$static.owner.worldmap = worldmap , worldmap));
  $add_2(mainPanel, (f_FlowPanel1 = new FlowPanel , $add_2(f_FlowPanel1, (toolbar_0 = new FlowPanel , this$static.owner.toolbar_0 = toolbar_0 , toolbar_0)) , setStyleName(f_FlowPanel1.element, 'container', true) , setStyleName(f_FlowPanel1.element, 'worldmap-footer', true) , f_FlowPanel1));
  setStyleName(mainPanel.element, 'section', true);
  setStyleName(mainPanel.element, 'section-worldmap', true);
  return mainPanel;
}

function WorldMapSectionView_WorldMapSectionViewUiBinderImpl$Widgets(owner){
  this.owner = owner;
}

defineClass(238, 1, {}, WorldMapSectionView_WorldMapSectionViewUiBinderImpl$Widgets);
var Lwe_are_bubblesort_MovieApp_client_WorldMapSectionView_1WorldMapSectionViewUiBinderImpl$Widgets_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'WorldMapSectionView_WorldMapSectionViewUiBinderImpl/Widgets', 238);
function WorldMapView(){
  View.call(this);
  new WorldStatisticsModel;
  this.mainPanel = new FlowPanel;
  $addStyleName(this.mainPanel, 'mapview worldmapview');
  $initWidget(this, this.mainPanel);
  $inject($setCallback(($clinit_ScriptInjector() , new ScriptInjector$FromUrl('js/d3.v3.min.js')), new WorldMapView$1(this)));
}

function setupMap(topologyUrl, parent_0){
  d3.json(topologyUrl, function(topology){
    var map_0 = parent_0;
    var width_0;
    var height;
    var X = d3.scale.linear();
    var Y = d3.scale.linear();
    var svg = d3.select(map_0).append('svg');
    var projection = d3.geo.mercator();
    var path = d3.geo.path().projection(projection);
    var size_0 = function(){
      width_0 = map_0.clientWidth;
      height = map_0.clientHeight;
      X.domain([0, width_0]).range([0, width_0]);
      Y.domain([0, height]).range([0, height]);
      svg.attr('width', width_0).attr('height', height);
    }
    ;
    d3.select($wnd).on('resize', size_0);
    size_0();
    var g = svg.append('g');
    g.selectAll('path').data(topojson.object(topology, topology.objects.countries).geometries).enter().append('path').attr('class', 'country').attr('d', path);
    var bounds = g[0][0].getBBox(), scale = 0.9 / Math.max(bounds.width / width_0, bounds.height / height), translate = [width_0 / 2 - scale * bounds.x - scale * (bounds.width / 2), height / 2 - scale * bounds.y - scale * (bounds.height / 2)];
    g.attr('transform', 'translate(' + translate.join(',') + ')scale(' + scale + ')');
    zoom = d3.behavior.zoom().x(X).y(Y).translate(translate).scale(scale).on('zoom', function(){
      g.attr('transform', 'translate(' + d3.event.translate.join(',') + ')scale(' + d3.event.scale + ')');
    }
    );
    svg.call(zoom);
  }
  );
}

defineClass(217, 50, $intern_20, WorldMapView);
var Lwe_are_bubblesort_MovieApp_client_WorldMapView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'WorldMapView', 217);
function $onSuccess(this$static){
  $inject($setCallback(($clinit_ScriptInjector() , new ScriptInjector$FromUrl('js/topojson.v0.min.js')), new WorldMapView$1$1(this$static)));
}

function WorldMapView$1(this$0){
  this.this$01 = this$0;
}

defineClass(218, 1, {}, WorldMapView$1);
_.onFailure = function onFailure(reason){
  dynamicCast(reason, 6);
  alert_0('Script d3 load failed.');
}
;
_.onSuccess = function onSuccess(result){
  $onSuccess(this, throwClassCastExceptionUnlessNull(result));
}
;
var Lwe_are_bubblesort_MovieApp_client_WorldMapView$1_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'WorldMapView/1', 218);
function $onSuccess_0(this$static){
  setupMap('js/ne_110m_admin_0_countries_wo_antarctica.json', $getElement(this$static.this$11.this$01.mainPanel));
}

function WorldMapView$1$1(this$1){
  this.this$11 = this$1;
}

defineClass(219, 1, {}, WorldMapView$1$1);
_.onFailure = function onFailure_0(reason){
  dynamicCast(reason, 6);
  alert_0('Script topojson load failed.');
}
;
_.onSuccess = function onSuccess_0(result){
  $onSuccess_0(this, throwClassCastExceptionUnlessNull(result));
}
;
var Lwe_are_bubblesort_MovieApp_client_WorldMapView$1$1_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'WorldMapView/1/1', 219);
function Model(){
  new SimpleEventBus;
}

defineClass(71, 1, {});
var Lwe_are_bubblesort_MovieApp_shared_Model_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'Model', 71);
function $add_5(this$static, element){
  $add_1(this$static.elements, element);
}

function Collection(){
  Model.call(this);
  this.elements = new ArrayList;
}

defineClass(83, 71, {}, Collection);
_.iterator = function iterator_13(){
  return new AbstractList$IteratorImpl(this.elements);
}
;
var Lwe_are_bubblesort_MovieApp_shared_Collection_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'Collection', 83);
function deserialize_25(streamReader, instance){
  instance.elements = dynamicCast($readObject(streamReader), 5);
}

function instantiate_23(streamReader){
  return new Collection;
}

function Movie(){
}

defineClass(176, 1, {}, Movie);
_.hashCode$ = function hashCode_25(){
  return getHashCode_0(this.id_0.value_0);
}
;
var Lwe_are_bubblesort_MovieApp_shared_Movie_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'Movie', 176);
function $compareTo_4(this$static, a){
  return compareTo_3(this$static.value_0, a.value_0);
}

function MovieAttribute(value_0, dbLabelName, displayName){
  this.value_0 = value_0;
  this.dbLabelName = dbLabelName;
  this.displayName = displayName;
}

defineClass(20, 1, $intern_29);
_.compareTo = function compareTo_5(a){
  return $compareTo_4(this, dynamicCast(a, 20));
}
;
_.hashCode$ = function hashCode_26(){
  return getHashCode_0(this.value_0);
}
;
var Lwe_are_bubblesort_MovieApp_shared_MovieAttribute_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieAttribute', 20);
function deserialize_26(streamReader, instance){
  instance.dbLabelName = $getString(streamReader, $readInt(streamReader));
  instance.displayName = $getString(streamReader, $readInt(streamReader));
  instance.value_0 = $getString(streamReader, $readInt(streamReader));
}

function serialize_5(streamWriter, instance){
  $writeString(streamWriter, instance.dbLabelName);
  $writeString(streamWriter, instance.displayName);
  $writeString(streamWriter, instance.value_0);
}

function MovieCountry(){
  MovieAttribute.call(this, null, 'movie_countries', null);
}

defineClass(177, 20, $intern_29, MovieCountry);
var Lwe_are_bubblesort_MovieApp_shared_MovieCountry_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieCountry', 177);
function deserialize_27(streamReader, instance){
  deserialize_26(streamReader, instance);
}

function instantiate_24(streamReader){
  return new MovieCountry;
}

function serialize_6(streamWriter, instance){
  serialize_5(streamWriter, instance);
}

function MovieDuration(){
  MovieAttribute.call(this, null, 'movie_runtime', null);
}

defineClass(84, 20, {7:1, 20:1, 84:1}, MovieDuration);
var Lwe_are_bubblesort_MovieApp_shared_MovieDuration_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieDuration', 84);
function deserialize_28(streamReader, instance){
  deserialize_26(streamReader, instance);
}

function instantiate_25(streamReader){
  return new MovieDuration;
}

function serialize_7(streamWriter, instance){
  serialize_5(streamWriter, instance);
}

function MovieGenre(){
  MovieAttribute.call(this, null, 'movie_genre', null);
}

defineClass(178, 20, $intern_29, MovieGenre);
var Lwe_are_bubblesort_MovieApp_shared_MovieGenre_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieGenre', 178);
function deserialize_29(streamReader, instance){
  deserialize_26(streamReader, instance);
}

function instantiate_26(streamReader){
  return new MovieGenre;
}

function serialize_8(streamWriter, instance){
  serialize_5(streamWriter, instance);
}

function MovieID(){
  MovieAttribute.call(this, null, 'id', null);
}

defineClass(85, 20, {7:1, 20:1, 85:1}, MovieID);
var Lwe_are_bubblesort_MovieApp_shared_MovieID_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieID', 85);
function deserialize_30(streamReader, instance){
  deserialize_26(streamReader, instance);
}

function instantiate_27(streamReader){
  return new MovieID;
}

function serialize_9(streamWriter, instance){
  serialize_5(streamWriter, instance);
}

function MovieLanguage(){
  MovieAttribute.call(this, null, 'movie_languages', null);
}

defineClass(179, 20, $intern_29, MovieLanguage);
var Lwe_are_bubblesort_MovieApp_shared_MovieLanguage_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieLanguage', 179);
function deserialize_31(streamReader, instance){
  deserialize_26(streamReader, instance);
}

function instantiate_28(streamReader){
  return new MovieLanguage;
}

function serialize_10(streamWriter, instance){
  serialize_5(streamWriter, instance);
}

function MovieTitle(){
  MovieAttribute.call(this, null, 'movie_name', null);
}

defineClass(86, 20, {7:1, 20:1, 86:1}, MovieTitle);
var Lwe_are_bubblesort_MovieApp_shared_MovieTitle_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieTitle', 86);
function deserialize_32(streamReader, instance){
  deserialize_26(streamReader, instance);
}

function instantiate_29(streamReader){
  return new MovieTitle;
}

function serialize_11(streamWriter, instance){
  serialize_5(streamWriter, instance);
}

function MovieYear(){
  MovieAttribute.call(this, null, 'movie_release_year', null);
}

function MovieYear_0(value_0){
  MovieAttribute.call(this, value_0, 'movie_release_year', value_0);
}

defineClass(25, 20, {7:1, 20:1, 25:1}, MovieYear, MovieYear_0);
var Lwe_are_bubblesort_MovieApp_shared_MovieYear_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieYear', 25);
function deserialize_33(streamReader, instance){
  deserialize_26(streamReader, instance);
}

function instantiate_30(streamReader){
  return new MovieYear;
}

function serialize_12(streamWriter, instance){
  serialize_5(streamWriter, instance);
}

function deserialize_34(streamReader, instance){
  dynamicCast($readObject(streamReader), 42);
  dynamicCast($readObject(streamReader), 84);
  dynamicCast($readObject(streamReader), 42);
  instance.id_0 = dynamicCast($readObject(streamReader), 85);
  dynamicCast($readObject(streamReader), 42);
  dynamicCast($readObject(streamReader), 86);
  dynamicCast($readObject(streamReader), 25);
}

function instantiate_31(streamReader){
  return new Movie;
}

function OrderedSet(){
  Model.call(this);
  this.elements = new TreeSet;
}

defineClass(72, 71, {72:1}, OrderedSet);
_.iterator = function iterator_14(){
  return $iterator_0(new AbstractNavigableMap$NavigableKeySet(this.elements.map_0));
}
;
var Lwe_are_bubblesort_MovieApp_shared_OrderedSet_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'OrderedSet', 72);
function deserialize_35(streamReader, instance){
  setElements(instance, dynamicCast($readObject(streamReader), 70));
}

function instantiate_32(streamReader){
  return new OrderedSet;
}

function setElements(instance, value_0){
  instance.elements = value_0;
}

function UnorderedSet(){
  Model.call(this);
  this.elements = new HashSet;
}

defineClass(42, 71, {42:1}, UnorderedSet);
_.iterator = function iterator_15(){
  return $iterator(new AbstractMap$1(this.elements.map_0));
}
;
var Lwe_are_bubblesort_MovieApp_shared_UnorderedSet_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'UnorderedSet', 42);
function deserialize_36(streamReader, instance){
  setElements_0(instance, dynamicCast($readObject(streamReader), 34));
}

function instantiate_33(streamReader){
  return new UnorderedSet;
}

function serialize_13(streamWriter, instance){
  $writeObject(streamWriter, instance.elements);
}

function setElements_0(instance, value_0){
  instance.elements = value_0;
}

function WorldStatisticsModel(){
  Model.call(this);
  this.model = new OrderedSet;
}

defineClass(73, 71, {73:1}, WorldStatisticsModel);
_.iterator = function iterator_16(){
  return $iterator_0(new AbstractNavigableMap$NavigableKeySet(this.model.elements.map_0));
}
;
var Lwe_are_bubblesort_MovieApp_shared_WorldStatisticsModel_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'WorldStatisticsModel', 73);
function $compareTo_5(this$static, e){
  return compareTo_3(this$static.iso_alpha, e.iso_alpha);
}

function WorldStatisticsModelEntry(){
}

defineClass(87, 1, {7:1, 87:1}, WorldStatisticsModelEntry);
_.compareTo = function compareTo_6(e){
  return $compareTo_5(this, dynamicCast(e, 87));
}
;
var Lwe_are_bubblesort_MovieApp_shared_WorldStatisticsModelEntry_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'WorldStatisticsModelEntry', 87);
function deserialize_37(streamReader, instance){
  instance.iso_alpha = $getString(streamReader, $readInt(streamReader));
  dynamicCast($readObject(streamReader), 29);
  dynamicCast($readObject(streamReader), 39);
  dynamicCast($readObject(streamReader), 39);
  dynamicCast($readObject(streamReader), 29);
}

function instantiate_34(streamReader){
  return new WorldStatisticsModelEntry;
}

function deserialize_38(streamReader, instance){
  instance.model = dynamicCast($readObject(streamReader), 72);
}

function instantiate_35(streamReader){
  return new WorldStatisticsModel;
}

var Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 283), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 285), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 288), Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'XsrfToken', null), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=movieapp-0.js

