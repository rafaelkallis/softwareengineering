var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.movieapp;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '9A5D8532A0102FF07449632E2DDFB06B';
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
var $intern_0 = 2147483647, $intern_1 = {3:1, 4:1}, $intern_2 = {3:1, 213:1}, $intern_3 = {3:1}, $intern_4 = {68:1, 21:1, 3:1, 28:1, 22:1}, $intern_5 = {38:1, 3:1, 4:1}, $intern_6 = 4194303, $intern_7 = 1048575, $intern_8 = 4194304, $intern_9 = 17592186044416, $intern_10 = -9223372036854775808, $intern_11 = 524288, $intern_12 = 65536, $intern_13 = 16777216, $intern_14 = 33554432, $intern_15 = 67108864, $intern_16 = {12:1, 9:1, 11:1, 10:1, 13:1, 7:1, 6:1}, $intern_17 = {12:1, 9:1, 11:1, 10:1, 44:1, 13:1, 7:1, 6:1}, $intern_18 = {3:1, 5:1, 14:1}, $intern_19 = {12:1, 9:1, 11:1, 10:1, 44:1, 13:1, 52:1, 7:1, 6:1}, $intern_20 = {42:1}, $intern_21 = {16:1};
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
stringCastMap = {3:1, 250:1, 28:1, 2:1};
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

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
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

defineClass(70, 1, {}, Class);
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
_.toString$ = function toString_8(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 70);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $fillInStackTrace(this$static){
  this$static.stackTrace = null;
  captureStackTrace(this$static, this$static.detailMessage);
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
  className = $getName(this.___clazz$);
  msg = this.getMessage();
  return msg != null?className + ': ' + msg:className;
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4);
defineClass(49, 4, $intern_1);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 49);
function RuntimeException(){
  $fillInStackTrace(this);
}

function RuntimeException_0(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(15, 49, $intern_1, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 15);
defineClass(98, 15, $intern_1);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 98);
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

defineClass(25, 98, {25:1, 3:1, 4:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 25);
function create(milliseconds){
  return new Date(milliseconds);
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(216, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 216);
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
  reportToBrowser(instanceOf(e, 25)?dynamicCast(e, 25).getThrown():e);
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
      t[1]?t[0].nullMethod() && (rescheduled = push_0(rescheduled, t)):($wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed)) , undefined);
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

defineClass(161, 216, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 161);
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
      return dynamicCast((stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace), 213);
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
defineClass(228, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 228);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(99, 228, {}, StackTraceCreator$CollectorLegacy);
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
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 26, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 99);
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
  index_0 = $indexOf_2(toReturn, fromCodePoint(46));
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

defineClass(229, 228, {});
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
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 26, 0, 0, 1);
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 229);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(100, 229, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 100);
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
  if (!reference) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
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

function $isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $eventGetCurrentTarget(event_0){
  return event_0.currentTarget || $wnd;
}

function $getTabIndex(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(22, 1, {3:1, 28:1, 22:1});
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
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 22);
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
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_3, 21, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(21, 22, $intern_4);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 21, values_1);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(198, 21, $intern_4, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 198, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(199, 21, $intern_4, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 199, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(200, 21, $intern_4, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 200, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(201, 21, $intern_4, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 201, null);
defineClass(243, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 243);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(244, 243, {});
_.dispatch = function dispatch(handler){
  this.dispatch_0(dynamicCast(handler, 43));
}
;
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 244);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 5);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next_0(), 55);
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

defineClass(247, 244, {});
_.getAssociatedType_0 = function getAssociatedType_0(){
  return this.getAssociatedType_1();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 247);
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = emptyMethod;
  TYPE = new DomEvent$Type('change', new ChangeEvent);
}

function $dispatch(handler){
  $readValue(handler.this$01);
  $doFire(handler.this$01, new FilterChangedEvent);
}

function ChangeEvent(){
}

defineClass(207, 247, {}, ChangeEvent);
_.dispatch_0 = function dispatch_0(handler){
  $dispatch(dynamicCast(handler, 257));
}
;
_.getAssociatedType_1 = function getAssociatedType_1(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ChangeEvent', 207);
defineClass(248, 247, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 248);
defineClass(249, 248, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 249);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('click', new ClickEvent);
}

function $dispatch_0(handler){
  handler.this$01.selectedItem = handler.val$thisItem2;
  $fireEvent_1(handler.this$01, new NavigationSelectedEvent);
}

function ClickEvent(){
}

defineClass(197, 249, {}, ClickEvent);
_.dispatch_0 = function dispatch_1(handler){
  $dispatch_0(dynamicCast(handler, 256));
}
;
_.getAssociatedType_1 = function getAssociatedType_2(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 197);
function Event$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(48, 1, {}, Event$Type);
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
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 48);
function GwtEvent$Type(){
  Event$Type.call(this);
}

defineClass(64, 48, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 64);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 5);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_1(this);
  this.name_0 = eventName;
}

defineClass(55, 64, {55:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 55);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(208, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 208);
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE_1) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(184, 244, {}, CloseEvent_0);
_.dispatch_0 = function dispatch_2(handler){
  dynamicCast(handler, 253);
  detachWidgets();
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 184);
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
    if (instanceOf($e0, 38)) {
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

defineClass(63, 1, {9:1}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 63);
defineClass(233, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 233);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_2(this$static.deferredDeltas, command);
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
  l.add_1(handler);
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
          $add_5(causes, e);
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
  sourceMap = dynamicCast($get_0(this$static.map_0, type_0), 41);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_1(source), 5);
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
  sourceMap = dynamicCast($get_0(this$static.map_0, type_0), 41);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_1(null), 5);
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
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_0(c$iterator.i++), 251));
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

defineClass(36, 233, {}, SimpleEventBus);
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 36);
function HandlerManager$Bus(){
  SimpleEventBus_0.call(this);
}

defineClass(175, 36, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 175);
function LegacyHandlerWrapper(){
}

defineClass(202, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 202);
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

defineClass(38, 15, $intern_5, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 38);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(76, 38, $intern_5, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 76);
function throwIfNull(value_0){
  if (null == value_0) {
    throw new NullPointerException_0('encodedURLComponent cannot be null');
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
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_3, 47, 0, [RTL, LTR, DEFAULT]);
}

defineClass(47, 22, {47:1, 3:1, 28:1, 22:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 47, values_2);
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
  if (instanceOf(e, 25)) {
    jse = dynamicCast(e, 25);
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
  a0 = value_0 & $intern_6;
  a1 = value_0 >> 22 & $intern_6;
  a2 = value_0 < 0?$intern_7:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_8 + a.h * $intern_9;
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_10) {
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
  if (value_0 >= $intern_9) {
    a2 = round_int(value_0 / $intern_9);
    value_0 -= a2 * $intern_9;
  }
  a1 = 0;
  if (value_0 >= $intern_8) {
    a1 = round_int(value_0 / $intern_8);
    value_0 -= a1 * $intern_8;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_6 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_6 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_7 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_3, 260, 256, 0, 1));
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
  a2 = a.h & $intern_7;
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
  return {l:res0 & $intern_6, m:res1 & $intern_6, h:res2 & $intern_7};
}

function toDouble(a){
  var neg0, neg1, neg2;
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_10;
  }
  if (!gte(a, ZERO)) {
    return -toDoubleHelper((neg0 = ~a.l + 1 & $intern_6 , neg1 = ~a.m + (neg0 == 0?1:0) & $intern_6 , neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_7 , create0(neg0, neg1, neg2)));
  }
  return a.l + a.m * $intern_8 + a.h * $intern_9;
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
  MAX_VALUE = create0($intern_6, $intern_6, 524287);
  MIN_VALUE = create0(0, 0, $intern_11);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  var appViewer, global, key;
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad($clinit_LogConfiguration());
  $clinit_QueryService_Proxy();
  (key = '__gwtDevModeHook:' + $moduleName + ':moduleBase' , global = $wnd || self , global[key] || $moduleBase) + '/Query/QueryService';
  appViewer = new AppController;
  $init(appViewer, ($clinit_RootPanel() , get_1()));
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

defineClass(45, 1, {45:1});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 45);
function ConsoleLogHandler(){
  $setFormatter(this, new TextLogFormatter(true));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(176, 45, {45:1}, ConsoleLogHandler);
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
var Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 176);
function DevelopmentModeLogHandler(){
  $setFormatter(this, new TextLogFormatter(false));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(177, 45, {45:1}, DevelopmentModeLogHandler);
_.publish = function publish_0(record){
  return;
}
;
var Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 177);
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

defineClass(96, 1, {}, LogConfiguration$1);
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 96);
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
  levelParam = (ensureListParameterMap() , paramsForName = dynamicCast(listParamMap.get_1('logLevel'), 5) , !paramsForName?null:dynamicCastToString(paramsForName.get_0(paramsForName.size_1() - 1)));
  level = levelParam == null?null:($clinit_Level() , $parse_0(levelParam));
  level?$setLevel_0(l.impl, level):$setLevel_1(l, ($clinit_Level() , INFO));
}

defineClass(227, 1, {});
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 227);
function LogConfiguration$LogConfigurationImplSevere(){
}

defineClass(95, 227, {}, LogConfiguration$LogConfigurationImplSevere);
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplSevere_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplSevere', 95);
defineClass(245, 1, {});
var Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 245);
defineClass(246, 245, {});
var Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 246);
function $format(this$static, event_0){
  var message, date, s;
  message = new StringBuilder;
  $append(message, (date = new Date_0(event_0.millis) , s = new StringBuilder , $append(s, $toString_1(date)) , s.string += ' ' , $append(s, event_0.loggerName) , s.string += '\n' , s.string += 'SEVERE' , s.string += ': ' , s.string));
  $append(message, event_0.msg);
  this$static.showStackTraces && !!event_0.thrown && $printStackTrace(event_0.thrown, new StackTracePrintStream(message));
  return message.string;
}

function TextLogFormatter(showStackTraces){
  this.showStackTraces = showStackTraces;
}

defineClass(88, 246, {}, TextLogFormatter);
_.showStackTraces = false;
var Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 88);
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
  throw new IllegalArgumentException('Invalid level "' + name_0 + '"');
}

function $addHandler_0(this$static, handler){
  $add_2(this$static.handlers, handler);
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
  return dynamicCast($toArray(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, {3:1, 94:1}, 45, this$static.handlers.array.length, 0, 1)), 94);
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
    for (handler$array0 = dynamicCast($toArray(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, {3:1, 94:1}, 45, this$static.handlers.array.length, 0, 1)), 94) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
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

defineClass(130, 1, {});
_.level = null;
_.useParentHandlers = false;
var Lcom_google_gwt_logging_impl_LoggerImplRegular_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerImplRegular', 130);
function LoggerImplSevere(){
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

defineClass(60, 130, {}, LoggerImplSevere);
var Lcom_google_gwt_logging_impl_LoggerImplSevere_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerImplSevere', 60);
defineClass(239, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 239);
defineClass(240, 239, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 240);
defineClass(241, 240, {});
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 241);
function StackTracePrintStream(builder){
  this.builder = builder;
}

defineClass(182, 241, {}, StackTracePrintStream);
var Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 182);
function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(67, 1, {67:1, 215:1, 3:1}, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.equals$ = function equals_1(obj){
  if (!instanceOf(obj, 215)) {
    return false;
  }
  return $equals(this.html, dynamicCast(dynamicCast(obj, 215), 67).html);
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode_0(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 67);
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
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['CSS1Compat']);
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

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
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

defineClass(174, 244, {}, Window$ClosingEvent);
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
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 174);
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
        val = (throwIfNull(val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (!instanceOf($e0, 25))
          throw unwrap($e0);
      }
      values = dynamicCast(out.get_1(key), 5);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_1(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 16);
    entry.setValue(unmodifiableList(dynamicCast(entry.getValue(), 5)));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(87, 63, {9:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 87);
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
      return $intern_12;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_11;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_8;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_13;
    case 'gesturechange':
      return $intern_14;
    case 'gestureend':
      return $intern_15;
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
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 11)?maybeListener:null;
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
  var dispatchMap, dispatcher;
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
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
  chMask & $intern_12 && (elem.onerror = bits & $intern_12?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_11 && (elem.onpaste = bits & $intern_11?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_8 && (elem.ontouchend = bits & $intern_8?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_13 && (elem.ongesturestart = bits & $intern_13?dispatchEvent_1:null);
  chMask & $intern_14 && (elem.ongesturechange = bits & $intern_14?dispatchEvent_1:null);
  chMask & $intern_15 && (elem.ongestureend = bits & $intern_15?dispatchEvent_1:null);
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

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function IncompatibleRemoteServiceException(){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

defineClass(134, 15, $intern_1, IncompatibleRemoteServiceException);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 134);
function deserialize(streamReader, instance){
  setDetailMessage(instance, null.nullMethod());
}

function instantiate(streamReader){
  return new IncompatibleRemoteServiceException;
}

function serialize(streamWriter, instance){
  null.nullMethod(instance.detailMessage);
}

function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(135, 15, $intern_1, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 135);
function deserialize_0(streamReader, instance){
  setDetailMessage(instance, null.nullMethod());
}

function instantiate_0(streamReader){
  return new RpcTokenException;
}

function serialize_0(streamWriter, instance){
  null.nullMethod(instance.nullField);
}

function deserialize_1(streamReader, instance){
}

function instantiate_1(streamReader){
  return null.nullMethod();
}

function serialize_1(streamWriter, instance){
  null.nullMethod();
}

function setDetailMessage(instance, value_0){
  instance.detailMessage = value_0;
}

function deserialize_2(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_2(streamReader){
  return new ArrayList;
}

function deserialize_3(streamReader, instance){
}

function instantiate_3(streamReader){
  var array;
  array = null.nullMethod();
  return new Arrays$ArrayList(array);
}

function deserialize_4(instance){
  var i, obj, size_0;
  size_0 = null.nullMethod();
  for (i = 0; i < size_0; ++i) {
    obj = null.nullMethod();
    instance.add_1(obj);
  }
}

function deserialize_5(streamReader, instance){
}

function instantiate_4(streamReader){
  return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
}

function deserialize_6(streamReader, instance){
}

function instantiate_5(streamReader){
  return $clinit_Collections() , new Collections$SingletonList(null.nullMethod());
}

function serialize_2(streamWriter, instance){
  serialize_4(instance);
}

function serialize_3(streamWriter, instance){
  null.nullMethod(instance.nullField);
  serialize_4(instance);
}

function deserialize_7(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_6(streamReader){
  return new LinkedList;
}

function serialize_4(instance){
  var entry, entry$iterator;
  null.nullMethod();
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(instance)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next_0(), 16));
    null.nullMethod(entry.getKey());
    null.nullMethod(entry.getValue());
  }
}

function deserialize_8(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_7(streamReader){
  return new Stack;
}

function deserialize_9(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_8(streamReader){
  return new Vector;
}

defineClass(132, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 132);
function $addStyleName(this$static){
  setStyleName(($clinit_DOM() , this$static.element), 'section-hidden', true);
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
    throw new IllegalArgumentException('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

defineClass(7, 1, {10:1, 7:1});
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.toString$ = function toString_5(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 7);
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
      if (!!related && $isOrHasChild(this$static.element, related)) {
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
   else if (instanceOf(this$static.parent_0, 44)) {
    dynamicCast(this$static.parent_0, 44).remove(this$static);
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

defineClass(6, 7, $intern_16);
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
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 6);
defineClass(234, 6, $intern_17);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 234);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_4(this$static.children, child);
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

defineClass(75, 234, $intern_17);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 75);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(109, 75, $intern_17);
_.remove = function remove_0(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 109);
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
    w = dynamicCast(w$iterator.next_0(), 6);
    try {
      c.execute(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_5(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(113, 76, $intern_5, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 113);
function AttachDetachException$1(){
}

defineClass(114, 1, {}, AttachDetachException$1);
_.execute = function execute(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 114);
function AttachDetachException$2(){
}

defineClass(115, 1, {}, AttachDetachException$2);
_.execute = function execute_0(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 115);
function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(92, 6, $intern_16);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM() , this.element));
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 92);
function $setText(this$static, text_0){
  $setInnerText(($clinit_DOM() , this$static.element), text_0);
}

function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(194, 92, $intern_16);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 194);
function Button(){
  var e;
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.setAttribute('type', 'button') , e));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Button');
}

defineClass(54, 194, {12:1, 9:1, 11:1, 54:1, 10:1, 13:1, 7:1, 6:1}, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 54);
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

function $toString(this$static){
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

defineClass(231, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toString$ = function toString_6(){
  return $toString(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 231);
function $indexOf(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.array.length; i < n; ++i) {
    if (equals_14(toFind, (checkElementIndex(i, this$static.array.length) , this$static.array[i]))) {
      return i;
    }
  }
  return -1;
}

defineClass(235, 231, {5:1});
_.add_0 = function add_1(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_2(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_2(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 5)) {
    return false;
  }
  other = dynamicCast(o, 5);
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
  return hashCode_13(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 235);
function $add_1(this$static, index_0, o){
  checkPositionIndex(index_0, this$static.array.length);
  splice(this$static.array, index_0, 0, o);
}

function $add_2(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_14(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
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
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(8, 235, $intern_18, ArrayList);
_.add_0 = function add_3(index_0, o){
  $add_1(this, index_0, o);
}
;
_.add_1 = function add_4(o){
  return $add_2(this, o);
}
;
_.contains_0 = function contains_0(o){
  return $indexOf_0(this, o, 0) != -1;
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
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 8);
function ChangeListenerCollection(){
  ArrayList.call(this);
}

defineClass(136, 8, $intern_18, ChangeListenerCollection);
var Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ChangeListenerCollection', 136);
function deserialize_10(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_9(streamReader){
  return new ChangeListenerCollection;
}

function ClickListenerCollection(){
  ArrayList.call(this);
}

defineClass(137, 8, $intern_18, ClickListenerCollection);
var Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ClickListenerCollection', 137);
function deserialize_11(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_10(streamReader){
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

defineClass(238, 6, $intern_16);
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
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 238);
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

defineClass(212, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 212);
function $add_3(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function FlowPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
}

defineClass(20, 75, $intern_17, FlowPanel);
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 20);
function FocusListenerCollection(){
  ArrayList.call(this);
}

defineClass(138, 8, $intern_18, FocusListenerCollection);
var Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusListenerCollection', 138);
function deserialize_12(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_11(streamReader){
  return new FocusListenerCollection;
}

function FormHandlerCollection(){
  ArrayList.call(this);
}

defineClass(139, 8, $intern_18, FormHandlerCollection);
var Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormHandlerCollection', 139);
function deserialize_13(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_12(streamReader){
  return new FormHandlerCollection;
}

function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(93, 6, $intern_16);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 93);
function Label(element){
  LabelBase.call(this, element, $equalsIgnoreCase('span', element.tagName));
}

defineClass(210, 93, $intern_16);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 210);
function $setHTML(this$static, html){
  $setTextOrHtml(this$static.directionalTextHelper, html);
}

function HTML(){
  Label.call(this, $doc.createElement('div'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-HTML');
}

defineClass(211, 210, $intern_16, HTML);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 211);
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  $clinit_Style$TextAlign();
}

function KeyboardListenerCollection(){
  ArrayList.call(this);
}

defineClass(140, 8, $intern_18, KeyboardListenerCollection);
var Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'KeyboardListenerCollection', 140);
function deserialize_14(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_13(streamReader){
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

defineClass(205, 92, $intern_16, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 205);
function LoadListenerCollection(){
  ArrayList.call(this);
}

defineClass(141, 8, $intern_18, LoadListenerCollection);
var Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LoadListenerCollection', 141);
function deserialize_15(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_14(streamReader){
  return new LoadListenerCollection;
}

function MouseListenerCollection(){
  ArrayList.call(this);
}

defineClass(142, 8, $intern_18, MouseListenerCollection);
var Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MouseListenerCollection', 142);
function deserialize_16(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_15(streamReader){
  return new MouseListenerCollection;
}

function MouseWheelListenerCollection(){
  ArrayList.call(this);
}

defineClass(143, 8, $intern_18, MouseWheelListenerCollection);
var Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MouseWheelListenerCollection', 143);
function deserialize_17(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_16(streamReader){
  return new MouseWheelListenerCollection;
}

function PopupListenerCollection(){
  ArrayList.call(this);
}

defineClass(144, 8, $intern_18, PopupListenerCollection);
var Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupListenerCollection', 144);
function deserialize_18(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_17(streamReader){
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
    $remove_3(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_1(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast($get_0(rootPanels, null), 52);
  if (rp) {
    return rp;
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put(rootPanels, null, rp);
  $add_5(widgetsToDetach, rp);
  return rp;
}

defineClass(52, 109, $intern_19);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 52);
function RootPanel$1(){
}

defineClass(111, 1, {}, RootPanel$1);
_.execute = function execute_1(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 111);
function RootPanel$2(){
}

defineClass(112, 1, {253:1, 43:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 112);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(110, 52, $intern_19, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 110);
function ScrollListenerCollection(){
  ArrayList.call(this);
}

defineClass(145, 8, $intern_18, ScrollListenerCollection);
var Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollListenerCollection', 145);
function deserialize_19(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_18(streamReader){
  return new ScrollListenerCollection;
}

function TabListenerCollection(){
  ArrayList.call(this);
}

defineClass(146, 8, $intern_18, TabListenerCollection);
var Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabListenerCollection', 146);
function deserialize_20(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_19(streamReader){
  return new TabListenerCollection;
}

function TableListenerCollection(){
  ArrayList.call(this);
}

defineClass(147, 8, $intern_18, TableListenerCollection);
var Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TableListenerCollection', 147);
function deserialize_21(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_20(streamReader){
  return new TableListenerCollection;
}

function TreeListenerCollection(){
  ArrayList.call(this);
}

defineClass(148, 8, $intern_18, TreeListenerCollection);
var Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TreeListenerCollection', 148);
function deserialize_22(streamReader, instance){
  deserialize_4(instance);
}

function instantiate_21(streamReader){
  return new TreeListenerCollection;
}

function $add_4(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf_1(this$static, w){
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
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 6, this$static.array.length * 2, 0, 1);
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
  index_0 = $indexOf_1(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_0(this$static, index_0);
}

function WidgetCollection(){
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 6, 4, 0, 1);
}

defineClass(185, 1, {}, WidgetCollection);
_.iterator = function iterator_2(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 185);
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

defineClass(89, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 89);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('safari', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(58, 4, $intern_1);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 58);
defineClass(17, 58, $intern_1);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 17);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(97, 17, $intern_1, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 97);
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

function SimpleEventBus$1(){
}

defineClass(107, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 107);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(108, 1, {251:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 108);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(71, 1, {});
_.toString$ = function toString_7(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 71);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(32, 15, $intern_1, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 32);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

defineClass(209, 32, $intern_1, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 209);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(50, 15, $intern_1, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 50);
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

defineClass(34, 15, $intern_1, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 34);
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

defineClass(69, 1, {3:1, 69:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 69);
function IllegalArgumentException(message){
  RuntimeException_0.call(this, message);
}

defineClass(53, 15, $intern_1, IllegalArgumentException);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 53);
function IllegalStateException(s){
  RuntimeException_0.call(this, s);
}

defineClass(40, 15, $intern_1, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 40);
function Integer(value_0){
  this.value_0 = value_0;
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

defineClass(35, 69, {3:1, 28:1, 35:1, 69:1}, Integer);
_.equals$ = function equals_3(o){
  return instanceOf(o, 35) && dynamicCast(o, 35).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_5(){
  return this.value_0;
}
;
_.toString$ = function toString_9(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 35);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_3, 35, 256, 0, 1);
}

var boxedValues_0;
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

defineClass(31, 15, $intern_1, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 31);
function NumberFormatException(message){
  IllegalArgumentException.call(this, message);
}

defineClass(57, 53, $intern_1, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 57);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(26, 1, {3:1, 26:1}, StackTraceElement);
_.equals$ = function equals_4(other){
  var st;
  if (instanceOf(other, 26)) {
    st = dynamicCast(other, 26);
    return this.lineNumber == st.lineNumber && equals_14(this.methodName, st.methodName) && equals_14(this.className_0, st.className_0) && equals_14(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_6(){
  return hashCode_11(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_3, 1, 3, [valueOf(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_10(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 26);
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

function $indexOf_2(this$static, str){
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
  return initDim(Ljava_lang_String_2_classLit, $intern_3, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_12) {
    hiSurrogate = 55296 + (codePoint - $intern_12 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - $intern_12 & 1023) & 65535;
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

defineClass(29, 71, {250:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 29);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(39, 15, $intern_1, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 39);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static)).this$01); $hasNext(iter);) {
    entry = (checkStructuralChange(iter.this$01, iter) , checkCriticalElement($hasNext(iter)) , dynamicCast(iter.current.next_0(), 16));
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_0(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(230, 1, {41:1});
_.equals$ = function equals_5(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 41)) {
    return false;
  }
  otherMap = dynamicCast(obj, 41);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 16);
    if (!$containsEntry(this, entry)) {
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
_.hashCode$ = function hashCode_7(){
  return hashCode_12(new AbstractHashMap$EntrySet(this));
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.size_1 = function size_2(){
  return (new AbstractHashMap$EntrySet(this)).this$01.size_0;
}
;
_.toString$ = function toString_11(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next_0(), 16));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append(sb, $toString_0(this, entry.getKey()));
    sb.string += '=';
    $append(sb, $toString_0(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 230);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return this$static.stringMap.containsValue(value_0) || this$static.hashCodeMap.containsValue(value_0);
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
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0);
}

function $remove_2(this$static, key){
  return $remove_4(this$static.hashCodeMap, key);
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

defineClass(101, 230, {41:1});
_.entrySet_0 = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_3(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.size_1 = function size_3(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 101);
defineClass(232, 231, $intern_20);
_.equals$ = function equals_6(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 42)) {
    return false;
  }
  other = dynamicCast(o, 42);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_8(){
  return hashCode_12(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 232);
function $contains(this$static, o){
  if (instanceOf(o, 16)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 16));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(23, 232, $intern_20, AbstractHashMap$EntrySet);
_.contains_0 = function contains_1(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_3(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_4(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 23);
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

function $next_0(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , dynamicCast(this$static.current.next_0(), 16);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(30, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_0(){
  return $hasNext(this);
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 30);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(24, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_2(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_0(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 24);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(125, 24, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(--this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 125);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(72, 232, $intern_20, AbstractMap$1);
_.contains_0 = function contains_2(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_4(){
  return $iterator(this);
}
;
_.size_1 = function size_5(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 72);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(104, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_2(){
  return $hasNext(this.val$outerIter2);
}
;
_.next_0 = function next_3(){
  var entry;
  entry = $next_0(this.val$outerIter2);
  return entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 104);
function $iterator_0(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$2$1(outerIter);
}

function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(73, 231, {}, AbstractMap$2);
_.contains_0 = function contains_3(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator = function iterator_5(){
  return $iterator_0(this);
}
;
_.size_1 = function size_6(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 73);
function $next_1(this$static){
  var entry;
  entry = $next_0(this$static.val$outerIter2);
  return entry.getValue();
}

function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(105, 1, {}, AbstractMap$2$1);
_.hasNext = function hasNext_3(){
  return $hasNext(this.val$outerIter2);
}
;
_.next_0 = function next_4(){
  return $next_1(this);
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 105);
defineClass(102, 1, $intern_21);
_.equals$ = function equals_7(other){
  var entry;
  if (!instanceOf(other, 16)) {
    return false;
  }
  entry = dynamicCast(other, 16);
  return equals_14(this.key, entry.getKey()) && equals_14(this.value_0, entry.getValue());
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
_.hashCode$ = function hashCode_9(){
  return hashCode_19(this.key) ^ hashCode_19(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_12(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 102);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(103, 102, $intern_21, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 103);
defineClass(236, 1, $intern_21);
_.equals$ = function equals_8(other){
  var entry;
  if (!instanceOf(other, 16)) {
    return false;
  }
  entry = dynamicCast(other, 16);
  return equals_14(this.getKey(), entry.getKey()) && equals_14(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_19(this.getKey()) ^ hashCode_19(this.getValue());
}
;
_.toString$ = function toString_13(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 236);
defineClass(237, 235, {5:1});
_.add_0 = function add_5(index_0, element){
  var iter;
  iter = $listIterator(this, index_0);
  $addNode(iter.this$01, element, iter.currentNode.prev, iter.currentNode);
  ++iter.currentIndex;
  iter.lastNode = null;
}
;
_.get_0 = function get_4(index_0){
  var iter;
  iter = $listIterator(this, index_0);
  try {
    return checkCriticalElement(iter.currentNode != iter.this$01.tail) , iter.lastNode = iter.currentNode , iter.currentNode = iter.currentNode.next , ++iter.currentIndex , iter.lastNode.value_0;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 33)) {
      throw new IndexOutOfBoundsException_0("Can't get element " + index_0);
    }
     else 
      throw unwrap($e0);
  }
}
;
_.iterator = function iterator_6(){
  return $listIterator(this, 0);
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 237);
function hashCode_11(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function Arrays$ArrayList(array){
  this.array = array;
}

defineClass(149, 235, $intern_18, Arrays$ArrayList);
_.contains_0 = function contains_4(o){
  return $indexOf(this, o) != -1;
}
;
_.get_0 = function get_5(index_0){
  return checkElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_7(){
  return this.array.length;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 149);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_12(collection){
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

function hashCode_13(list){
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
  return instanceOf(list, 14)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(116, 235, $intern_18, Collections$EmptyList);
_.contains_0 = function contains_5(object){
  return false;
}
;
_.get_0 = function get_6(location_0){
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
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 116);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(117, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_4(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_5(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_0(){
  throw new NoSuchElementException;
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 117);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(118, 235, {3:1, 5:1}, Collections$SingletonList);
_.contains_0 = function contains_6(item_0){
  return equals_14(this.element, item_0);
}
;
_.get_0 = function get_7(index_0){
  checkElementIndex(index_0, 1);
  return this.element;
}
;
_.size_1 = function size_9(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 118);
function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(77, 1, {});
_.add_1 = function add_6(o){
  throw new UnsupportedOperationException;
}
;
_.iterator = function iterator_8(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_10(){
  return this.coll.size_1();
}
;
_.toString$ = function toString_14(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 77);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(79, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_5(){
  return this.it.hasNext();
}
;
_.next_0 = function next_6(){
  return this.it.next_0();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 79);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(78, 77, {5:1}, Collections$UnmodifiableList);
_.equals$ = function equals_9(o){
  return this.list.equals$(o);
}
;
_.get_0 = function get_8(index_0){
  return this.list.get_0(index_0);
}
;
_.hashCode$ = function hashCode_14(){
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
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 78);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(80, 79, {}, Collections$UnmodifiableListIterator);
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_1(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 80);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(119, 1, {41:1}, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_0(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_10(o){
  return this.map_0.equals$(o);
}
;
_.get_1 = function get_9(key){
  return this.map_0.get_1(key);
}
;
_.hashCode$ = function hashCode_15(){
  return this.map_0.hashCode$();
}
;
_.put = function put_1(key, value_0){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_11(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_15(){
  return this.map_0.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 119);
defineClass(120, 77, $intern_20);
_.equals$ = function equals_11(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_16(){
  return this.coll.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 120);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableCollection.call(this, s);
}

defineClass(121, 120, $intern_20, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_9(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 121);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(124, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_6(){
  return this.val$it2.hasNext();
}
;
_.next_0 = function next_7(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(dynamicCast(this.val$it2.next_0(), 16));
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 124);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(122, 1, $intern_21, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_12(o){
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
_.hashCode$ = function hashCode_17(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_0(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_16(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 122);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(123, 78, {5:1, 14:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 123);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
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

defineClass(206, 15, $intern_1, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 206);
function $toString_1(this$static){
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

defineClass(56, 1, {3:1, 28:1, 56:1}, Date_0);
_.equals$ = function equals_13(obj){
  return instanceOf(obj, 56) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, 56).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_18(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_17(){
  return $toString_1(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 56);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset(this);
}

defineClass(19, 101, {3:1, 41:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 19);
function $add_5(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_3(this$static, o){
  return $remove_2(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(62, 232, {3:1, 42:1}, HashSet);
_.contains_0 = function contains_7(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_10(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.size_1 = function size_12(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_18(){
  return $toString(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 62);
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
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_0(key, entry.getKey())) {
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
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_4(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = !key?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_0(key, entry.getKey())) {
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

defineClass(84, 1, {}, InternalJsHashCodeMap);
_.containsValue = function containsValue(value_0){
  var entry, entry$array, entry$index, entry$max, hashCode, hashCode$array, hashCode$index, hashCode$max;
  for (hashCode$array = $keys(this) , hashCode$index = 0 , hashCode$max = hashCode$array.length; hashCode$index < hashCode$max; ++hashCode$index) {
    hashCode = hashCode$array[hashCode$index];
    for (entry$array = this.backingMap[hashCode] , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
      entry = entry$array[entry$index];
      if ($equals_0(value_0, entry.getValue())) {
        return true;
      }
    }
  }
  return false;
}
;
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 84);
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
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_3, 16, 0, 0, 1);
}

defineClass(160, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_7(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_8(){
  return checkCriticalElement($hasNext_0(this)) , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 160);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(158, 84, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.containsValue = function containsValue_0(value_0){
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue();
        if (this.equalsBridge(value_0, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}
;
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
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.equalsBridge = function equalsBridge(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 158);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(159, 8, $intern_18, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 159);
function InternalJsMapFactory(){
}

defineClass(155, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 155);
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

defineClass(157, 155, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 157);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(156, 155, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 156);
function $containsValue_0(this$static, value_0){
  var map_0 = this$static.backingMap;
  for (var key in map_0) {
    if (this$static.equalsBridge_0(value_0, map_0[key])) {
      return true;
    }
  }
  return false;
}

function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $set(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(59, 1, {}, InternalJsStringMap);
_.containsValue = function containsValue_1(value_0){
  return $containsValue_0(this, value_0);
}
;
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
_.equalsBridge_0 = function equalsBridge_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.get_2 = function get_10(key){
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
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 59);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(129, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_8(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_9(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.i++]);
}
;
_.i = 0;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 129);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(81, 236, $intern_21, InternalJsStringMap$2);
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
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 81);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(126, 59, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.containsValue = function containsValue_2(value_0){
  var map_0 = this.backingMap;
  for (var key in map_0) {
    if (key.charCodeAt(0) == 58) {
      var entryValue = map_0[key];
      if (this.equalsBridge_0(value_0, entryValue)) {
        return true;
      }
    }
  }
  return false;
}
;
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_2 = function get_11(key){
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
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 126);
function InternalJsStringMap$InternalJsStringMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(128, 8, $intern_18, InternalJsStringMap$InternalJsStringMapLegacy$1);
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 128);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(127, 59, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.containsValue = function containsValue_3(value_0){
  var protoValue;
  protoValue = this.backingMap['__proto__'];
  if (!(protoValue === undefined) && (maskUndefined(value_0) === maskUndefined(protoValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, protoValue))) {
    return true;
  }
  return $containsValue_0(this, value_0);
}
;
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 127);
function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next = next;
  next.prev = prev.next = node;
  ++this$static.size_0;
}

function $listIterator(this$static, index_0){
  var i, node;
  checkPositionIndex(index_0, this$static.size_0);
  if (index_0 >= this$static.size_0 >> 1) {
    node = this$static.tail;
    for (i = this$static.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this$static.header.next;
    for (i = 0; i < index_0; ++i) {
      node = node.next;
    }
  }
  return new LinkedList$ListIteratorImpl(this$static, index_0, node);
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  this.header.next = this.tail;
  this.tail.prev = this.header;
  this.header.prev = this.tail.next = null;
  this.size_0 = 0;
}

defineClass(150, 237, {3:1, 5:1}, LinkedList);
_.add_1 = function add_7(o){
  $addNode(this, o, this.tail.prev, this.tail);
  return true;
}
;
_.listIterator_0 = function listIterator_4(index_0){
  return $listIterator(this, index_0);
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 150);
function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode = startNode;
  this.currentIndex = index_0;
}

defineClass(195, 1, {}, LinkedList$ListIteratorImpl);
_.hasNext = function hasNext_9(){
  return this.currentNode != this.this$01.tail;
}
;
_.hasPrevious = function hasPrevious_2(){
  return this.currentNode.prev != this.this$01.header;
}
;
_.next_0 = function next_10(){
  return checkCriticalElement(this.currentNode != this.this$01.tail) , this.lastNode = this.currentNode , this.currentNode = this.currentNode.next , ++this.currentIndex , this.lastNode.value_0;
}
;
_.previous = function previous_2(){
  checkCriticalElement(this.currentNode.prev != this.this$01.header);
  this.lastNode = this.currentNode = this.currentNode.prev;
  --this.currentIndex;
  return this.lastNode.value_0;
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 195);
function LinkedList$Node(){
}

defineClass(65, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 65);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(33, 15, {3:1, 4:1, 33:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 33);
function equals_14(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_19(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function Vector(){
  this.arrayList = new ArrayList;
}

function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new ArrayIndexOutOfBoundsException;
  }
}

defineClass(82, 235, $intern_18, Vector);
_.add_0 = function add_8(index_0, o){
  checkArrayElementIndex(index_0, this.arrayList.array.length + 1);
  $add_1(this.arrayList, index_0, o);
}
;
_.add_1 = function add_9(o){
  return $add_2(this.arrayList, o);
}
;
_.contains_0 = function contains_8(elem){
  return $indexOf_0(this.arrayList, elem, 0) != -1;
}
;
_.get_0 = function get_12(index_0){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $get(this.arrayList, index_0);
}
;
_.iterator = function iterator_11(){
  return new AbstractList$IteratorImpl(this.arrayList);
}
;
_.size_1 = function size_14(){
  return this.arrayList.array.length;
}
;
_.toString$ = function toString_19(){
  return $toString(this.arrayList);
}
;
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 82);
function Stack(){
  Vector.call(this);
}

defineClass(151, 82, $intern_18, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 151);
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

defineClass(242, 1, $intern_3);
_.getName = function getName_0(){
  return 'DUMMY';
}
;
_.intValue = function intValue(){
  return -1;
}
;
_.toString$ = function toString_20(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO, OFF, SEVERE, WARNING;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 242);
function Level$LevelAll(){
}

defineClass(162, 242, $intern_3, Level$LevelAll);
_.getName = function getName_1(){
  return 'ALL';
}
;
_.intValue = function intValue_0(){
  return -2147483648;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 162);
function Level$LevelConfig(){
}

defineClass(163, 242, $intern_3, Level$LevelConfig);
_.getName = function getName_2(){
  return 'CONFIG';
}
;
_.intValue = function intValue_1(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 163);
function Level$LevelFine(){
}

defineClass(164, 242, $intern_3, Level$LevelFine);
_.getName = function getName_3(){
  return 'FINE';
}
;
_.intValue = function intValue_2(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 164);
function Level$LevelFiner(){
}

defineClass(165, 242, $intern_3, Level$LevelFiner);
_.getName = function getName_4(){
  return 'FINER';
}
;
_.intValue = function intValue_3(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 165);
function Level$LevelFinest(){
}

defineClass(166, 242, $intern_3, Level$LevelFinest);
_.getName = function getName_5(){
  return 'FINEST';
}
;
_.intValue = function intValue_4(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 166);
function Level$LevelInfo(){
}

defineClass(167, 242, $intern_3, Level$LevelInfo);
_.getName = function getName_6(){
  return 'INFO';
}
;
_.intValue = function intValue_5(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 167);
function Level$LevelOff(){
}

defineClass(168, 242, $intern_3, Level$LevelOff);
_.getName = function getName_7(){
  return 'OFF';
}
;
_.intValue = function intValue_6(){
  return $intern_0;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 168);
function Level$LevelSevere(){
}

defineClass(169, 242, $intern_3, Level$LevelSevere);
_.getName = function getName_8(){
  return 'SEVERE';
}
;
_.intValue = function intValue_7(){
  return 1000;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 169);
function Level$LevelWarning(){
}

defineClass(170, 242, $intern_3, Level$LevelWarning);
_.getName = function getName_9(){
  return 'WARNING';
}
;
_.intValue = function intValue_8(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 170);
function $addLoggerImpl(this$static, logger){
  $putStringValue(this$static.loggerMap, logger.impl.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = dynamicCast($getStringValue(this$static.loggerMap, name_0), 51);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = newLogger.impl.name_0;
    parentName = __substr(name_1, 0, max_0($lastIndexOf(name_1, fromCodePoint(46))));
    $setParent_1(newLogger, $ensureLogger(this$static, parentName));
    $putStringValue(this$static.loggerMap, newLogger.impl.name_0, newLogger);
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

defineClass(131, 1, {}, LogManager);
var singleton;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 131);
function $setLoggerName(this$static, newName){
  this$static.loggerName = newName;
}

function LogRecord(msg){
  this.msg = msg;
  this.millis = fromDouble(now_1());
}

defineClass(181, 1, $intern_3, LogRecord);
_.loggerName = '';
_.millis = {l:0, m:0, h:0};
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 181);
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

defineClass(51, 1, {51:1}, Logger);
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 51);
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

defineClass(173, 243, {}, AppActivateSectionEvent);
_.dispatch = function dispatch_4(handler){
  $dispatch_1(this, dynamicCast(handler, 252));
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return TYPE_3;
}
;
_.sectionId = 0;
var TYPE_3;
var Lwe_are_bubblesort_MovieApp_client_AppActivateSectionEvent_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'AppActivateSectionEvent', 173);
function Presenter(){
  SimpleEventBus.call(this);
}

defineClass(37, 36, {});
var Lwe_are_bubblesort_MovieApp_client_Presenter_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'Presenter', 37);
function $activateSection(this$static, section){
  $hideAllSections(this$static);
  section.show();
  $doFire(this$static, new AppSectionActivatedEvent(section.id_0));
}

function $hideAllSections(this$static){
  var currentSection, currentSection$iterator;
  for (currentSection$iterator = new AbstractList$IteratorImpl(this$static.sections.elements); currentSection$iterator.i < currentSection$iterator.this$01_0.size_1();) {
    currentSection = (checkCriticalElement(currentSection$iterator.i < currentSection$iterator.this$01_0.size_1()) , dynamicCast(currentSection$iterator.this$01_0.get_0(currentSection$iterator.i++), 27));
    currentSection.hide();
  }
}

function $init(this$static, appPanel){
  $add_3(this$static.view.appMainNavigationPanel, this$static.mainNavigation.view);
  $add_0(appPanel, this$static.view);
  $doAdd(this$static.mainNavigation, ($clinit_AppActivateSectionEvent() , TYPE_3), this$static);
  $setupSections(this$static);
}

function $onActivateSection(this$static, sectionId){
  var section, section$iterator;
  for (section$iterator = new AbstractList$IteratorImpl(this$static.sections.elements); section$iterator.i < section$iterator.this$01_0.size_1();) {
    section = (checkCriticalElement(section$iterator.i < section$iterator.this$01_0.size_1()) , dynamicCast(section$iterator.this$01_0.get_0(section$iterator.i++), 27));
    if (section.id_0 == sectionId) {
      $activateSection(this$static, section);
      break;
    }
  }
}

function $setupSections(this$static){
  var currentSection, currentSection$iterator, table, world;
  world = new WorldMapSection;
  table = new TableSection;
  $add_6(this$static.sections, world);
  $add_6(this$static.sections, table);
  $addMenu(this$static.mainNavigation, world);
  $addMenu(this$static.mainNavigation, table);
  for (currentSection$iterator = new AbstractList$IteratorImpl(this$static.sections.elements); currentSection$iterator.i < currentSection$iterator.this$01_0.size_1();) {
    currentSection = (checkCriticalElement(currentSection$iterator.i < currentSection$iterator.this$01_0.size_1()) , dynamicCast(currentSection$iterator.this$01_0.get_0(currentSection$iterator.i++), 27));
    currentSection.init();
    currentSection.hide();
    $add_3(this$static.view.appSectionContainerPanel, currentSection.getCompositeView());
  }
  $activateSection(this$static, world);
}

function AppController(){
  AppController_0.call(this, new AppView);
}

function AppController_0(view){
  Presenter.call(this);
  this.sections = new Collection;
  this.view = view;
  this.mainNavigation = new SectionNavigationPresenter(new ButtonNavigationView, this);
}

defineClass(74, 37, {43:1, 252:1}, AppController);
_.getCompositeView = function getCompositeView(){
  return this.view;
}
;
var Lwe_are_bubblesort_MovieApp_client_AppController_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'AppController', 74);
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

defineClass(179, 243, {}, AppSectionActivatedEvent);
_.dispatch = function dispatch_5(handler){
  $dispatch_2(this, dynamicCast(handler, 255));
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_4;
}
;
_.sectionId = 0;
var TYPE_4;
var Lwe_are_bubblesort_MovieApp_client_AppSectionActivatedEvent_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'AppSectionActivatedEvent', 179);
function $addHandler_1(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler);
}

function $fireEvent_1(this$static, event_0){
  $doFire(this$static.eventBus, event_0);
}

function View(){
  this.eventBus = new SimpleEventBus;
}

defineClass(46, 238, $intern_16);
var Lwe_are_bubblesort_MovieApp_client_View_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'View', 46);
function AppView(){
  View.call(this);
  $initWidget(this, $build_appPanel(new AppView_AppViewUiBinderImpl$Widgets(this)));
}

defineClass(153, 46, $intern_16, AppView);
var Lwe_are_bubblesort_MovieApp_client_AppView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'AppView', 153);
function $build_appPanel(this$static){
  var appPanel, appHeaderPanel, appMainNavigationPanel, appSectionContainerPanel;
  appPanel = new FlowPanel;
  $add_3(appPanel, (appHeaderPanel = new FlowPanel , $add_3(appHeaderPanel, (appMainNavigationPanel = new FlowPanel , setStyleName(($clinit_DOM() , appMainNavigationPanel.element), 'mainnavigation', true) , this$static.owner.appMainNavigationPanel = appMainNavigationPanel , appMainNavigationPanel)) , setStyleName(appHeaderPanel.element, 'app-header', true) , appHeaderPanel));
  $add_3(appPanel, (appSectionContainerPanel = new FlowPanel , setStyleName(appSectionContainerPanel.element, 'app-section-container', true) , this$static.owner.appSectionContainerPanel = appSectionContainerPanel , appSectionContainerPanel));
  setStyleName(appPanel.element, 'app', true);
  return appPanel;
}

function AppView_AppViewUiBinderImpl$Widgets(owner){
  this.owner = owner;
}

defineClass(178, 1, {}, AppView_AppViewUiBinderImpl$Widgets);
var Lwe_are_bubblesort_MovieApp_client_AppView_1AppViewUiBinderImpl$Widgets_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'AppView_AppViewUiBinderImpl/Widgets', 178);
function $activateItem(this$static, value_0){
  var button;
  $deactivateAllItems(this$static);
  button = dynamicCast($getStringValue(this$static.valueButtonsMapping, value_0), 54);
  !!button && setStyleName(($clinit_DOM() , button.element), 'active', true);
}

function $addItem(this$static, item_0){
  var button;
  button = new Button;
  $setText(button, item_0.displayName);
  $putStringValue(this$static.valueButtonsMapping, item_0.value_0, button);
  $add_3(this$static.mainPanel, button);
  $addDomHandler(button, new ButtonNavigationView$1(this$static, item_0), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
}

function $addNavigationSelectedEventHandler(this$static, handler){
  $addHandler_1(this$static, ($clinit_NavigationSelectedEvent() , TYPE_6), handler);
  return null;
}

function $deactivateAllItems(this$static){
  var button, entry, entry$iterator;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.valueButtonsMapping)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next_0(), 16));
    button = dynamicCast(entry.getValue(), 54);
    setStyleName(($clinit_DOM() , button.element), 'active', false);
  }
}

function ButtonNavigationView(){
  View.call(this);
  this.valueButtonsMapping = new HashMap;
  this.mainPanel = new FlowPanel;
  $initWidget(this, this.mainPanel);
  $setClassName(($clinit_DOM() , this.element), 'button-navigation');
}

defineClass(171, 46, $intern_16, ButtonNavigationView);
var Lwe_are_bubblesort_MovieApp_client_ButtonNavigationView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'ButtonNavigationView', 171);
function ButtonNavigationView$1(this$0, val$thisItem){
  this.this$01 = this$0;
  this.val$thisItem2 = val$thisItem;
}

defineClass(172, 1, {256:1, 43:1}, ButtonNavigationView$1);
var Lwe_are_bubblesort_MovieApp_client_ButtonNavigationView$1_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'ButtonNavigationView/1', 172);
function $addFilterFor(this$static, attribute, view){
  var presenter;
  presenter = new FilterPresenter(attribute, view);
  $add_3(this$static.view.main, presenter.view);
  $doAdd(presenter, ($clinit_FilterChangedEvent() , TYPE_5), this$static);
}

function $getFilterValues(this$static){
  var attribute, presenter, presenter$iterator, resultSet, key;
  resultSet = new Set_0;
  for (presenter$iterator = $iterator_0(new AbstractMap$2(this$static.presenters.elements)); $hasNext(presenter$iterator.val$outerIter2);) {
    presenter = dynamicCast($next_1(presenter$iterator), 66);
    attribute = presenter.attribute;
    key = attribute.value_0;
    $put(resultSet.elements, key, attribute);
  }
  return resultSet;
}

function FilterBarPresenter(view){
  Presenter.call(this);
  this.presenters = new Set_0;
  this.view = view;
}

defineClass(188, 37, {43:1, 214:1}, FilterBarPresenter);
_.getCompositeView = function getCompositeView_0(){
  return this.view;
}
;
_.onFilterValueChanged = function onFilterValueChanged(){
  $doFire(this, new FilterChangedEvent);
}
;
var Lwe_are_bubblesort_MovieApp_client_FilterBarPresenter_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterBarPresenter', 188);
function FilterBarView(){
  View.call(this);
  $initWidget(this, $build_main(new FilterBarView_FilterBarViewUiBinderImpl$Widgets(this)));
}

defineClass(189, 46, $intern_16, FilterBarView);
var Lwe_are_bubblesort_MovieApp_client_FilterBarView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterBarView', 189);
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

defineClass(204, 1, {}, FilterBarView_FilterBarViewUiBinderImpl$Widgets);
var Lwe_are_bubblesort_MovieApp_client_FilterBarView_1FilterBarViewUiBinderImpl$Widgets_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterBarView_FilterBarViewUiBinderImpl/Widgets', 204);
function $clinit_FilterChangedEvent(){
  $clinit_FilterChangedEvent = emptyMethod;
  TYPE_5 = new Event$Type;
}

function FilterChangedEvent(){
  $clinit_FilterChangedEvent();
}

defineClass(91, 243, {}, FilterChangedEvent);
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, 214).onFilterValueChanged();
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_5;
}
;
var TYPE_5;
var Lwe_are_bubblesort_MovieApp_client_FilterChangedEvent_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterChangedEvent', 91);
function $addChangeHandler(this$static, handler){
  return throwClassCastExceptionUnlessNull($addHandler_1(this$static, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE), handler));
}

function $addItem_0(this$static, displayName, value_0){
  $insertItem(this$static.listBox, displayName, value_0, -1);
}

function FilterListBoxView(){
  View.call(this);
  this.listBox = new ListBox;
}

defineClass(192, 46, $intern_16, FilterListBoxView);
var Lwe_are_bubblesort_MovieApp_client_FilterListBoxView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterListBoxView', 192);
function $fillViewValues(this$static){
  var seletableView, val, val$iterator, values, values_0;
  if (this$static.view) {
    seletableView = this$static.view;
    values = (values_0 = new Collection , $add_6(values_0, new MovieAttributeValue('1995')) , $add_6(values_0, new MovieAttributeValue('1996')) , $add_6(values_0, new MovieAttributeValue('1997')) , $add_6(values_0, new MovieAttributeValue('1998')) , $add_6(values_0, new MovieAttributeValue('1999')) , $add_6(values_0, new MovieAttributeValue('2000')) , $add_6(values_0, new MovieAttributeValue('2001')) , $add_6(values_0, new MovieAttributeValue('2002')) , $add_6(values_0, new MovieAttributeValue('2003')) , $add_6(values_0, new MovieAttributeValue('2004')) , values_0);
    for (val$iterator = new AbstractList$IteratorImpl(values.elements); val$iterator.i < val$iterator.this$01_0.size_1();) {
      val = (checkCriticalElement(val$iterator.i < val$iterator.this$01_0.size_1()) , dynamicCast(val$iterator.this$01_0.get_0(val$iterator.i++), 18));
      $addItem_0(seletableView, val.displayName, val.value_0);
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

defineClass(66, 37, {66:1}, FilterPresenter);
_.getCompositeView = function getCompositeView_1(){
  return this.view;
}
;
var Lwe_are_bubblesort_MovieApp_client_FilterPresenter_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterPresenter', 66);
function FilterPresenter$1(this$0){
  this.this$01 = this$0;
}

defineClass(196, 1, {257:1, 43:1}, FilterPresenter$1);
var Lwe_are_bubblesort_MovieApp_client_FilterPresenter$1_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'FilterPresenter/1', 196);
function $clinit_NavigationSelectedEvent(){
  $clinit_NavigationSelectedEvent = emptyMethod;
  TYPE_6 = new Event$Type;
}

function NavigationSelectedEvent(){
  $clinit_NavigationSelectedEvent();
}

defineClass(183, 243, {}, NavigationSelectedEvent);
_.dispatch = function dispatch_7(handler){
  $onItemSelected(dynamicCast(handler, 254));
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_6;
}
;
var TYPE_6;
var Lwe_are_bubblesort_MovieApp_client_NavigationSelectedEvent_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'NavigationSelectedEvent', 183);
function NavigationViewItem(displayName, value_0){
  this.displayName = displayName;
  this.value_0 = value_0;
}

defineClass(180, 1, {}, NavigationViewItem);
var Lwe_are_bubblesort_MovieApp_client_NavigationViewItem_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'NavigationViewItem', 180);
function $clinit_QueryService_Proxy(){
  $clinit_QueryService_Proxy = emptyMethod;
  new QueryService_TypeSerializer;
}

function $clinit_QueryService_TypeSerializer(){
  $clinit_QueryService_TypeSerializer = emptyMethod;
  loadMethodsNative();
  loadSignaturesNative();
}

function QueryService_TypeSerializer(){
  $clinit_QueryService_TypeSerializer();
  new HashMap;
}

function loadMethodsNative(){
  var result = {};
  result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate, deserialize, serialize];
  result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_0, deserialize_0];
  result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_0];
  result['com.google.gwt.user.client.ui.ChangeListenerCollection/287642957'] = [instantiate_9, deserialize_10];
  result['com.google.gwt.user.client.ui.ClickListenerCollection/2152455986'] = [instantiate_10, deserialize_11];
  result['com.google.gwt.user.client.ui.FocusListenerCollection/119490835'] = [instantiate_11, deserialize_12];
  result['com.google.gwt.user.client.ui.FormHandlerCollection/3088681894'] = [instantiate_12, deserialize_13];
  result['com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242'] = [instantiate_13, deserialize_14];
  result['com.google.gwt.user.client.ui.LoadListenerCollection/3174178888'] = [instantiate_14, deserialize_15];
  result['com.google.gwt.user.client.ui.MouseListenerCollection/465158911'] = [instantiate_15, deserialize_16];
  result['com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552'] = [instantiate_16, deserialize_17];
  result['com.google.gwt.user.client.ui.PopupListenerCollection/1920131050'] = [instantiate_17, deserialize_18];
  result['com.google.gwt.user.client.ui.ScrollListenerCollection/210686268'] = [instantiate_18, deserialize_19];
  result['com.google.gwt.user.client.ui.TabListenerCollection/3768293299'] = [instantiate_19, deserialize_20];
  result['com.google.gwt.user.client.ui.TableListenerCollection/2254740473'] = [instantiate_20, deserialize_21];
  result['com.google.gwt.user.client.ui.TreeListenerCollection/3716243734'] = [instantiate_21, deserialize_22];
  result['java.lang.String/2004016611'] = [instantiate_1, deserialize_1, serialize_1];
  result['java.util.ArrayList/4159755760'] = [instantiate_2, deserialize_2];
  result['java.util.Arrays$ArrayList/2507071751'] = [instantiate_3, deserialize_3];
  result['java.util.Collections$EmptyList/4157118744'] = [instantiate_4, deserialize_5];
  result['java.util.Collections$SingletonList/1586180994'] = [instantiate_5, deserialize_6];
  result['java.util.HashMap/1797211028'] = [undefined, undefined, serialize_2];
  result['java.util.LinkedHashMap/3008245022'] = [undefined, undefined, serialize_3];
  result['java.util.LinkedList/3953877921'] = [instantiate_6, deserialize_7];
  result['java.util.Stack/1346942793'] = [instantiate_7, deserialize_8];
  result['java.util.Vector/3057315478'] = [instantiate_8, deserialize_9];
  result['we.are.bubblesort.MovieApp.shared.Collection/1891393118'] = [instantiate_22, deserialize_23];
  result['we.are.bubblesort.MovieApp.shared.Set/626022322'] = [undefined, undefined, serialize_5];
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
  result[getHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
  result[getHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760';
  result[getHashCode(Ljava_util_Arrays$ArrayList_2_classLit)] = 'java.util.Arrays$ArrayList/2507071751';
  result[getHashCode(Ljava_util_Collections$EmptyList_2_classLit)] = 'java.util.Collections$EmptyList/4157118744';
  result[getHashCode(Ljava_util_Collections$SingletonList_2_classLit)] = 'java.util.Collections$SingletonList/1586180994';
  result[getHashCode(Ljava_util_HashMap_2_classLit)] = 'java.util.HashMap/1797211028';
  result[getHashCode(Ljava_util_LinkedHashMap_2_classLit)] = 'java.util.LinkedHashMap/3008245022';
  result[getHashCode(Ljava_util_LinkedList_2_classLit)] = 'java.util.LinkedList/3953877921';
  result[getHashCode(Ljava_util_Stack_2_classLit)] = 'java.util.Stack/1346942793';
  result[getHashCode(Ljava_util_Vector_2_classLit)] = 'java.util.Vector/3057315478';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_Collection_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.Collection/1891393118';
  result[getHashCode(Lwe_are_bubblesort_MovieApp_shared_Set_2_classLit)] = 'we.are.bubblesort.MovieApp.shared.Set/626022322';
  return result;
}

defineClass(133, 132, {}, QueryService_TypeSerializer);
var Lwe_are_bubblesort_MovieApp_client_QueryService_1TypeSerializer_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'QueryService_TypeSerializer', 133);
function Section(sectionName){
  Presenter.call(this);
  this.name_0 = sectionName;
  ++idCounter;
  this.id_0 = idCounter;
}

defineClass(27, 37, {27:1});
_.id_0 = 0;
var idCounter = 0;
var Lwe_are_bubblesort_MovieApp_client_Section_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'Section', 27);
function $addMenu(this$static, section){
  var item_0;
  item_0 = new NavigationViewItem(section.name_0, '' + section.id_0);
  $addItem(this$static.view, item_0);
}

function $onItemSelected(this$static){
  var selectedItem;
  selectedItem = this$static.view.selectedItem;
  $doFire(this$static, new AppActivateSectionEvent(__parseAndValidateInt(selectedItem.value_0)));
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

defineClass(154, 37, {43:1, 255:1, 254:1}, SectionNavigationPresenter);
_.getCompositeView = function getCompositeView_2(){
  return this.view;
}
;
var Lwe_are_bubblesort_MovieApp_client_SectionNavigationPresenter_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'SectionNavigationPresenter', 154);
function SectionView(){
  View.call(this);
}

defineClass(90, 46, $intern_16);
var Lwe_are_bubblesort_MovieApp_client_SectionView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'SectionView', 90);
function TableSection(){
  Section.call(this, 'Tabelle');
  this.view = new TableSectionView;
}

defineClass(86, 27, {27:1}, TableSection);
_.getCompositeView = function getCompositeView_3(){
  return this.view;
}
;
_.hide = function hide(){
  $addStyleName(this.view);
}
;
_.init = function init_0(){
}
;
_.show = function show(){
  $removeStyleName(this.view);
}
;
var Lwe_are_bubblesort_MovieApp_client_TableSection_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'TableSection', 86);
function TableSectionView(){
  var mainPanel, f_HTML1, sb;
  SectionView.call(this);
  $initWidget(this, (mainPanel = new FlowPanel , $add_3(mainPanel, (f_HTML1 = new HTML , $setHTML(f_HTML1, (sb = new StringBuilder , sb.string += '<h1>TableSection<\/h1>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , f_HTML1)) , setStyleName(($clinit_DOM() , mainPanel.element), 'section', true) , setStyleName(mainPanel.element, 'section-table', true) , mainPanel));
}

defineClass(193, 90, $intern_16, TableSectionView);
var Lwe_are_bubblesort_MovieApp_client_TableSectionView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'TableSectionView', 193);
function WorldMapPresenter(){
  Presenter.call(this);
}

defineClass(187, 37, {}, WorldMapPresenter);
_.getCompositeView = function getCompositeView_4(){
  return this.view;
}
;
var Lwe_are_bubblesort_MovieApp_client_WorldMapPresenter_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'WorldMapPresenter', 187);
function WorldMapSection(){
  Section.call(this, 'Karte');
  this.view = new WorldMapSectionView;
}

defineClass(85, 27, {43:1, 214:1, 27:1}, WorldMapSection);
_.getCompositeView = function getCompositeView_5(){
  return this.view;
}
;
_.hide = function hide_0(){
  $addStyleName(this.view);
}
;
_.init = function init_1(){
  this.worldmap = new WorldMapPresenter;
  this.filterbar = new FilterBarPresenter(new FilterBarView);
  $addFilterFor(this.filterbar, new MovieYear(valueOf(0)), new FilterListBoxView);
  $doAdd(this.filterbar, ($clinit_FilterChangedEvent() , TYPE_5), this);
  $add_3(this.view.worldmap, this.worldmap.view);
  $add_3(this.view.toolbar_0, this.filterbar.view);
}
;
_.onFilterValueChanged = function onFilterValueChanged_0(){
  $getFilterValues(this.filterbar);
  $wnd.alert('New Data is being fetched');
}
;
_.show = function show_0(){
  $removeStyleName(this.view);
}
;
var Lwe_are_bubblesort_MovieApp_client_WorldMapSection_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'WorldMapSection', 85);
function WorldMapSectionView(){
  SectionView.call(this);
  $initWidget(this, $build_mainPanel(new WorldMapSectionView_WorldMapSectionViewUiBinderImpl$Widgets(this)));
}

defineClass(186, 90, $intern_16, WorldMapSectionView);
var Lwe_are_bubblesort_MovieApp_client_WorldMapSectionView_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'WorldMapSectionView', 186);
function $build_mainPanel(this$static){
  var mainPanel, worldmap, toolbar_0;
  mainPanel = new FlowPanel;
  $add_3(mainPanel, (worldmap = new FlowPanel , setStyleName(($clinit_DOM() , worldmap.element), 'worldmap', true) , this$static.owner.worldmap = worldmap , worldmap));
  $add_3(mainPanel, (toolbar_0 = new FlowPanel , setStyleName(toolbar_0.element, 'worldmap-toolbar', true) , this$static.owner.toolbar_0 = toolbar_0 , toolbar_0));
  setStyleName(mainPanel.element, 'section', true);
  setStyleName(mainPanel.element, 'section-worldmap', true);
  return mainPanel;
}

function WorldMapSectionView_WorldMapSectionViewUiBinderImpl$Widgets(owner){
  this.owner = owner;
}

defineClass(203, 1, {}, WorldMapSectionView_WorldMapSectionViewUiBinderImpl$Widgets);
var Lwe_are_bubblesort_MovieApp_client_WorldMapSectionView_1WorldMapSectionViewUiBinderImpl$Widgets_2_classLit = createForClass('we.are.bubblesort.MovieApp.client', 'WorldMapSectionView_WorldMapSectionViewUiBinderImpl/Widgets', 203);
defineClass(152, 36, {});
var Lwe_are_bubblesort_MovieApp_shared_Model_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'Model', 152);
function $add_6(this$static, element){
  $add_2(this$static.elements, element);
}

function Collection(){
  SimpleEventBus.call(this);
  this.elements = new ArrayList;
}

defineClass(61, 152, {}, Collection);
_.iterator = function iterator_12(){
  return new AbstractList$IteratorImpl(this.elements);
}
;
var Lwe_are_bubblesort_MovieApp_shared_Collection_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'Collection', 61);
function deserialize_23(streamReader, instance){
  instance.elements = null.nullMethod();
}

function instantiate_22(streamReader){
  return new Collection;
}

defineClass(190, 1, {});
var Lwe_are_bubblesort_MovieApp_shared_MovieAttribute_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieAttribute', 190);
function MovieAttributeValue(value_0){
  this.displayName = value_0;
  this.value_0 = value_0;
}

defineClass(18, 1, {18:1}, MovieAttributeValue);
var Lwe_are_bubblesort_MovieApp_shared_MovieAttributeValue_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieAttributeValue', 18);
function MovieYear(value_0){
  this.value_0 = value_0;
}

defineClass(191, 190, {}, MovieYear);
var Lwe_are_bubblesort_MovieApp_shared_MovieYear_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'MovieYear', 191);
function Set_0(){
  SimpleEventBus.call(this);
  this.elements = new HashMap;
}

defineClass(83, 36, {}, Set_0);
_.iterator = function iterator_13(){
  return $iterator_0(new AbstractMap$2(this.elements));
}
;
var Lwe_are_bubblesort_MovieApp_shared_Set_2_classLit = createForClass('we.are.bubblesort.MovieApp.shared', 'Set', 83);
function serialize_5(streamWriter, instance){
  null.nullMethod();
}

var Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 218), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 220), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 223), Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'XsrfToken', null), Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', null), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=movieapp-0.js
