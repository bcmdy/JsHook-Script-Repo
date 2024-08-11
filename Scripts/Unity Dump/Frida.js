(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (setImmediate){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("frida-il2cpp-bridge");

const e = require("./main");

setImmediate(e.start);

}).call(this)}).call(this,require("timers").setImmediate)

},{"./main":2,"frida-il2cpp-bridge":3,"timers":5}],2:[function(require,module,exports){
"use strict";

function e() {
  Il2Cpp.perform((() => {
    console.log("Unity Version: " + Il2Cpp.unityVersion), console.log("Dump Start"), 
    Il2Cpp.dump("Dump.cs", "data/user/0/" + runtime.packageName), console.log("Dump End");
  }));
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.start = void 0, exports.start = e;

},{}],3:[function(require,module,exports){
(function (setImmediate){(function (){
"use strict";

var e, t, n = this && this.__decorate || function(e, t, n, r) {
  var i, s = arguments.length, a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var o = e.length - 1; o >= 0; o--) (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
  return s > 3 && a && Object.defineProperty(t, n, a), a;
};

function r(e) {
  const t = new Error(`[0m${e}`);
  throw t.name = "[0m[38;5;9mil2cpp[0m", t.stack = t.stack?.replace("Error", t.name)?.replace(/\n    at (.+) \((.+):(.+)\)/, "[3m[2m")?.concat("[0m"), 
  t;
}

function i(e) {
  globalThis.console.log(`[38;5;11mil2cpp[0m: ${e}`);
}

function s(e) {
  globalThis.console.log(`[38;5;10mil2cpp[0m: ${e}`);
}

function a(e) {
  globalThis.console.log(`[38;5;12mil2cpp[0m: ${e}`);
}

function o(e, t, n, r) {
  globalThis.Object.defineProperty(e, t, r?.(e, t, {
    get: n,
    configurable: !0
  }) ?? {
    get: n
  });
}

function l(e, t, n) {
  const r = n.get;
  if (!r) throw new Error("@lazy can only be applied to getter accessors");
  return n.get = function() {
    const e = r.call(this);
    return Object.defineProperty(this, t, {
      value: e,
      configurable: n.configurable,
      enumerable: n.enumerable,
      writable: !1
    }), e;
  }, n;
}

class c {
  handle;
  constructor(e) {
    e instanceof NativePointer ? this.handle = e : this.handle = e.handle;
  }
  equals(e) {
    return this.handle.equals(e.handle);
  }
  isNull() {
    return this.handle.isNull();
  }
  asNullable() {
    return this.isNull() ? null : this;
  }
}

class p {
  stringEncoding;
  address;
  constructor(e, t, n) {
    this.stringEncoding = n, this.address = Module.findExportByName(e, t) ?? NULL;
  }
  static get targets() {
    const [t, ...n] = function() {
      switch (Process.platform) {
       case "linux":
        try {
          return e.gte(Java.androidVersion, "12") ? [ null, [ "__loader_dlopen", "utf8" ] ] : [ "libdl.so", [ "dlopen", "utf8" ], [ "android_dlopen_ext", "utf8" ] ];
        } catch (e) {
          return [ null, [ "dlopen", "utf8" ] ];
        }

       case "darwin":
        return [ "libdyld.dylib", [ "dlopen", "utf8" ] ];

       case "windows":
        const t = "LoadLibrary";
        return [ "kernel32.dll", [ `${t}W`, "utf16" ], [ `${t}ExW`, "utf16" ], [ `${t}A`, "ansi" ], [ `${t}ExA`, "ansi" ] ];
      }
    }();
    return n.map((([e, n]) => new p(t, e, n))).filter((e => !e.address.isNull()));
  }
  readString(e) {
    switch (this.stringEncoding) {
     case "utf8":
      return e.readUtf8String();

     case "utf16":
      return e.readUtf16String();

     case "ansi":
      return e.readAnsiString();
    }
  }
}

function u(...e) {
  return new Promise((t => {
    for (const n of e) {
      if (null != Process.findModuleByName(n)) return void t(n);
    }
    const n = p.targets.map((r => Interceptor.attach(r.address, {
      onEnter(e) {
        this.modulePath = r.readString(e[0]) ?? "";
      },
      onLeave(r) {
        if (!r.isNull()) for (const r of e) this.modulePath.endsWith(r) && (setImmediate((() => n.forEach((e => e.detach())))), 
        t(r));
      }
    })));
  }));
}

function d(e) {
  const t = [], n = Memory.alloc(Process.pointerSize);
  let r = e(n);
  for (;!r.isNull(); ) t.push(r), r = e(n);
  return t;
}

function m(e) {
  const t = Memory.alloc(Process.pointerSize), n = e(t);
  if (n.isNull()) return [];
  const r = new Array(t.readInt());
  for (let e = 0; e < r.length; e++) r[e] = n.add(e * Process.pointerSize).readPointer();
  return r;
}

function h(e) {
  return new Proxy(e, {
    cache: new Map,
    construct(e, t) {
      const n = t[0].toUInt32();
      return this.cache.has(n) || this.cache.set(n, new e(t[0])), this.cache.get(n);
    }
  });
}

function y(e, t, n = Object.getOwnPropertyDescriptors(e)) {
  for (const r in n) n[r] = t(e, r, n[r]);
  return Object.defineProperties(e, n), e;
}

NativePointer.prototype.offsetOf = function(e, t) {
  t || (t = 512);
  for (let n = 0; n < t; n++) if (e(this.add(n))) return n;
  return null;
}, function(e) {
  const t = /(20\d{2}|\d)\.(\d)\.(\d{1,2})(?:[abcfp]|rc){0,2}\d?/;
  function n(e, n) {
    const r = e.match(t), i = n.match(t);
    for (let e = 1; e <= 3; e++) {
      const t = Number(r?.[e] ?? -1), n = Number(i?.[e] ?? -1);
      if (t > n) return 1;
      if (t < n) return -1;
    }
    return 0;
  }
  e.find = function(e) {
    return e?.match(t)?.[0];
  }, e.gte = function(e, t) {
    return n(e, t) >= 0;
  }, e.lt = function(e, t) {
    return n(e, t) < 0;
  };
}(e || (e = {})), function(e) {
  function t(t, n, i) {
    const s = e.module.findExportByName(t) ?? e.memorySnapshotApi[t];
    return new NativeFunction(s ?? r(`couldn't resolve export ${t}`), n, i);
  }
  e.api = {
    get alloc() {
      return t("il2cpp_alloc", "pointer", [ "size_t" ]);
    },
    get arrayGetLength() {
      return t("il2cpp_array_length", "uint32", [ "pointer" ]);
    },
    get arrayNew() {
      return t("il2cpp_array_new", "pointer", [ "pointer", "uint32" ]);
    },
    get assemblyGetImage() {
      return t("il2cpp_assembly_get_image", "pointer", [ "pointer" ]);
    },
    get classForEach() {
      return t("il2cpp_class_for_each", "void", [ "pointer", "pointer" ]);
    },
    get classFromName() {
      return t("il2cpp_class_from_name", "pointer", [ "pointer", "pointer", "pointer" ]);
    },
    get classFromObject() {
      return t("il2cpp_class_from_system_type", "pointer", [ "pointer" ]);
    },
    get classGetArrayClass() {
      return t("il2cpp_array_class_get", "pointer", [ "pointer", "uint32" ]);
    },
    get classGetArrayElementSize() {
      return t("il2cpp_class_array_element_size", "int", [ "pointer" ]);
    },
    get classGetAssemblyName() {
      return t("il2cpp_class_get_assemblyname", "pointer", [ "pointer" ]);
    },
    get classGetBaseType() {
      return t("il2cpp_class_enum_basetype", "pointer", [ "pointer" ]);
    },
    get classGetDeclaringType() {
      return t("il2cpp_class_get_declaring_type", "pointer", [ "pointer" ]);
    },
    get classGetElementClass() {
      return t("il2cpp_class_get_element_class", "pointer", [ "pointer" ]);
    },
    get classGetFieldFromName() {
      return t("il2cpp_class_get_field_from_name", "pointer", [ "pointer", "pointer" ]);
    },
    get classGetFields() {
      return t("il2cpp_class_get_fields", "pointer", [ "pointer", "pointer" ]);
    },
    get classGetFlags() {
      return t("il2cpp_class_get_flags", "int", [ "pointer" ]);
    },
    get classGetImage() {
      return t("il2cpp_class_get_image", "pointer", [ "pointer" ]);
    },
    get classGetInstanceSize() {
      return t("il2cpp_class_instance_size", "int32", [ "pointer" ]);
    },
    get classGetInterfaces() {
      return t("il2cpp_class_get_interfaces", "pointer", [ "pointer", "pointer" ]);
    },
    get classGetMethodFromName() {
      return t("il2cpp_class_get_method_from_name", "pointer", [ "pointer", "pointer", "int" ]);
    },
    get classGetMethods() {
      return t("il2cpp_class_get_methods", "pointer", [ "pointer", "pointer" ]);
    },
    get classGetName() {
      return t("il2cpp_class_get_name", "pointer", [ "pointer" ]);
    },
    get classGetNamespace() {
      return t("il2cpp_class_get_namespace", "pointer", [ "pointer" ]);
    },
    get classGetNestedClasses() {
      return t("il2cpp_class_get_nested_types", "pointer", [ "pointer", "pointer" ]);
    },
    get classGetParent() {
      return t("il2cpp_class_get_parent", "pointer", [ "pointer" ]);
    },
    get classGetStaticFieldData() {
      return t("il2cpp_class_get_static_field_data", "pointer", [ "pointer" ]);
    },
    get classGetValueTypeSize() {
      return t("il2cpp_class_value_size", "int32", [ "pointer", "pointer" ]);
    },
    get classGetType() {
      return t("il2cpp_class_get_type", "pointer", [ "pointer" ]);
    },
    get classHasReferences() {
      return t("il2cpp_class_has_references", "bool", [ "pointer" ]);
    },
    get classInitialize() {
      return t("il2cpp_runtime_class_init", "void", [ "pointer" ]);
    },
    get classIsAbstract() {
      return t("il2cpp_class_is_abstract", "bool", [ "pointer" ]);
    },
    get classIsAssignableFrom() {
      return t("il2cpp_class_is_assignable_from", "bool", [ "pointer", "pointer" ]);
    },
    get classIsBlittable() {
      return t("il2cpp_class_is_blittable", "bool", [ "pointer" ]);
    },
    get classIsEnum() {
      return t("il2cpp_class_is_enum", "bool", [ "pointer" ]);
    },
    get classIsGeneric() {
      return t("il2cpp_class_is_generic", "bool", [ "pointer" ]);
    },
    get classIsInflated() {
      return t("il2cpp_class_is_inflated", "bool", [ "pointer" ]);
    },
    get classIsInterface() {
      return t("il2cpp_class_is_interface", "bool", [ "pointer" ]);
    },
    get classIsSubclassOf() {
      return t("il2cpp_class_is_subclass_of", "bool", [ "pointer", "pointer", "bool" ]);
    },
    get classIsValueType() {
      return t("il2cpp_class_is_valuetype", "bool", [ "pointer" ]);
    },
    get domainGetAssemblyFromName() {
      return t("il2cpp_domain_assembly_open", "pointer", [ "pointer", "pointer" ]);
    },
    get domainGet() {
      return t("il2cpp_domain_get", "pointer", []);
    },
    get domainGetAssemblies() {
      return t("il2cpp_domain_get_assemblies", "pointer", [ "pointer", "pointer" ]);
    },
    get fieldGetClass() {
      return t("il2cpp_field_get_parent", "pointer", [ "pointer" ]);
    },
    get fieldGetFlags() {
      return t("il2cpp_field_get_flags", "int", [ "pointer" ]);
    },
    get fieldGetName() {
      return t("il2cpp_field_get_name", "pointer", [ "pointer" ]);
    },
    get fieldGetOffset() {
      return t("il2cpp_field_get_offset", "int32", [ "pointer" ]);
    },
    get fieldGetStaticValue() {
      return t("il2cpp_field_static_get_value", "void", [ "pointer", "pointer" ]);
    },
    get fieldGetType() {
      return t("il2cpp_field_get_type", "pointer", [ "pointer" ]);
    },
    get fieldSetStaticValue() {
      return t("il2cpp_field_static_set_value", "void", [ "pointer", "pointer" ]);
    },
    get free() {
      return t("il2cpp_free", "void", [ "pointer" ]);
    },
    get gcCollect() {
      return t("il2cpp_gc_collect", "void", [ "int" ]);
    },
    get gcCollectALittle() {
      return t("il2cpp_gc_collect_a_little", "void", []);
    },
    get gcDisable() {
      return t("il2cpp_gc_disable", "void", []);
    },
    get gcEnable() {
      return t("il2cpp_gc_enable", "void", []);
    },
    get gcGetHeapSize() {
      return t("il2cpp_gc_get_heap_size", "int64", []);
    },
    get gcGetMaxTimeSlice() {
      return t("il2cpp_gc_get_max_time_slice_ns", "int64", []);
    },
    get gcGetUsedSize() {
      return t("il2cpp_gc_get_used_size", "int64", []);
    },
    get gcHandleGetTarget() {
      return t("il2cpp_gchandle_get_target", "pointer", [ "uint32" ]);
    },
    get gcHandleFree() {
      return t("il2cpp_gchandle_free", "void", [ "uint32" ]);
    },
    get gcHandleNew() {
      return t("il2cpp_gchandle_new", "uint32", [ "pointer", "bool" ]);
    },
    get gcHandleNewWeakRef() {
      return t("il2cpp_gchandle_new_weakref", "uint32", [ "pointer", "bool" ]);
    },
    get gcIsDisabled() {
      return t("il2cpp_gc_is_disabled", "bool", []);
    },
    get gcIsIncremental() {
      return t("il2cpp_gc_is_incremental", "bool", []);
    },
    get gcSetMaxTimeSlice() {
      return t("il2cpp_gc_set_max_time_slice_ns", "void", [ "int64" ]);
    },
    get gcStartIncrementalCollection() {
      return t("il2cpp_gc_start_incremental_collection", "void", []);
    },
    get gcStartWorld() {
      return t("il2cpp_start_gc_world", "void", []);
    },
    get gcStopWorld() {
      return t("il2cpp_stop_gc_world", "void", []);
    },
    get getCorlib() {
      return t("il2cpp_get_corlib", "pointer", []);
    },
    get imageGetAssembly() {
      return t("il2cpp_image_get_assembly", "pointer", [ "pointer" ]);
    },
    get imageGetClass() {
      return t("il2cpp_image_get_class", "pointer", [ "pointer", "uint" ]);
    },
    get imageGetClassCount() {
      return t("il2cpp_image_get_class_count", "uint32", [ "pointer" ]);
    },
    get imageGetName() {
      return t("il2cpp_image_get_name", "pointer", [ "pointer" ]);
    },
    get initialize() {
      return t("il2cpp_init", "void", [ "pointer" ]);
    },
    get livenessAllocateStruct() {
      return t("il2cpp_unity_liveness_allocate_struct", "pointer", [ "pointer", "int", "pointer", "pointer", "pointer" ]);
    },
    get livenessCalculationBegin() {
      return t("il2cpp_unity_liveness_calculation_begin", "pointer", [ "pointer", "int", "pointer", "pointer", "pointer", "pointer" ]);
    },
    get livenessCalculationEnd() {
      return t("il2cpp_unity_liveness_calculation_end", "void", [ "pointer" ]);
    },
    get livenessCalculationFromStatics() {
      return t("il2cpp_unity_liveness_calculation_from_statics", "void", [ "pointer" ]);
    },
    get livenessFinalize() {
      return t("il2cpp_unity_liveness_finalize", "void", [ "pointer" ]);
    },
    get livenessFreeStruct() {
      return t("il2cpp_unity_liveness_free_struct", "void", [ "pointer" ]);
    },
    get memorySnapshotCapture() {
      return t("il2cpp_capture_memory_snapshot", "pointer", []);
    },
    get memorySnapshotFree() {
      return t("il2cpp_free_captured_memory_snapshot", "void", [ "pointer" ]);
    },
    get memorySnapshotGetClasses() {
      return t("il2cpp_memory_snapshot_get_classes", "pointer", [ "pointer", "pointer" ]);
    },
    get memorySnapshotGetObjects() {
      return t("il2cpp_memory_snapshot_get_objects", "pointer", [ "pointer", "pointer" ]);
    },
    get methodGetClass() {
      return t("il2cpp_method_get_class", "pointer", [ "pointer" ]);
    },
    get methodGetFlags() {
      return t("il2cpp_method_get_flags", "uint32", [ "pointer", "pointer" ]);
    },
    get methodGetName() {
      return t("il2cpp_method_get_name", "pointer", [ "pointer" ]);
    },
    get methodGetObject() {
      return t("il2cpp_method_get_object", "pointer", [ "pointer", "pointer" ]);
    },
    get methodGetParameterCount() {
      return t("il2cpp_method_get_param_count", "uint8", [ "pointer" ]);
    },
    get methodGetParameterName() {
      return t("il2cpp_method_get_param_name", "pointer", [ "pointer", "uint32" ]);
    },
    get methodGetParameters() {
      return t("il2cpp_method_get_parameters", "pointer", [ "pointer", "pointer" ]);
    },
    get methodGetParameterType() {
      return t("il2cpp_method_get_param", "pointer", [ "pointer", "uint32" ]);
    },
    get methodGetReturnType() {
      return t("il2cpp_method_get_return_type", "pointer", [ "pointer" ]);
    },
    get methodIsGeneric() {
      return t("il2cpp_method_is_generic", "bool", [ "pointer" ]);
    },
    get methodIsInflated() {
      return t("il2cpp_method_is_inflated", "bool", [ "pointer" ]);
    },
    get methodIsInstance() {
      return t("il2cpp_method_is_instance", "bool", [ "pointer" ]);
    },
    get monitorEnter() {
      return t("il2cpp_monitor_enter", "void", [ "pointer" ]);
    },
    get monitorExit() {
      return t("il2cpp_monitor_exit", "void", [ "pointer" ]);
    },
    get monitorPulse() {
      return t("il2cpp_monitor_pulse", "void", [ "pointer" ]);
    },
    get monitorPulseAll() {
      return t("il2cpp_monitor_pulse_all", "void", [ "pointer" ]);
    },
    get monitorTryEnter() {
      return t("il2cpp_monitor_try_enter", "bool", [ "pointer", "uint32" ]);
    },
    get monitorTryWait() {
      return t("il2cpp_monitor_try_wait", "bool", [ "pointer", "uint32" ]);
    },
    get monitorWait() {
      return t("il2cpp_monitor_wait", "void", [ "pointer" ]);
    },
    get objectGetClass() {
      return t("il2cpp_object_get_class", "pointer", [ "pointer" ]);
    },
    get objectGetVirtualMethod() {
      return t("il2cpp_object_get_virtual_method", "pointer", [ "pointer", "pointer" ]);
    },
    get objectInitialize() {
      return t("il2cpp_runtime_object_init_exception", "void", [ "pointer", "pointer" ]);
    },
    get objectNew() {
      return t("il2cpp_object_new", "pointer", [ "pointer" ]);
    },
    get objectGetSize() {
      return t("il2cpp_object_get_size", "uint32", [ "pointer" ]);
    },
    get objectUnbox() {
      return t("il2cpp_object_unbox", "pointer", [ "pointer" ]);
    },
    get resolveInternalCall() {
      return t("il2cpp_resolve_icall", "pointer", [ "pointer" ]);
    },
    get stringGetChars() {
      return t("il2cpp_string_chars", "pointer", [ "pointer" ]);
    },
    get stringGetLength() {
      return t("il2cpp_string_length", "int32", [ "pointer" ]);
    },
    get stringNew() {
      return t("il2cpp_string_new", "pointer", [ "pointer" ]);
    },
    get valueTypeBox() {
      return t("il2cpp_value_box", "pointer", [ "pointer", "pointer" ]);
    },
    get threadAttach() {
      return t("il2cpp_thread_attach", "pointer", [ "pointer" ]);
    },
    get threadDetach() {
      return t("il2cpp_thread_detach", "void", [ "pointer" ]);
    },
    get threadGetAttachedThreads() {
      return t("il2cpp_thread_get_all_attached_threads", "pointer", [ "pointer" ]);
    },
    get threadGetCurrent() {
      return t("il2cpp_thread_current", "pointer", []);
    },
    get threadIsVm() {
      return t("il2cpp_is_vm_thread", "bool", [ "pointer" ]);
    },
    get typeGetClass() {
      return t("il2cpp_class_from_type", "pointer", [ "pointer" ]);
    },
    get typeGetName() {
      return t("il2cpp_type_get_name", "pointer", [ "pointer" ]);
    },
    get typeGetObject() {
      return t("il2cpp_type_get_object", "pointer", [ "pointer" ]);
    },
    get typeGetTypeEnum() {
      return t("il2cpp_type_get_type", "int", [ "pointer" ]);
    }
  }, y(e.api, l), o(e, "memorySnapshotApi", (() => new CModule("#include <stdint.h>\n#include <string.h>\n\ntypedef struct Il2CppManagedMemorySnapshot Il2CppManagedMemorySnapshot;\ntypedef struct Il2CppMetadataType Il2CppMetadataType;\n\nstruct Il2CppManagedMemorySnapshot\n{\n  struct Il2CppManagedHeap\n  {\n    uint32_t section_count;\n    void * sections;\n  } heap;\n  struct Il2CppStacks\n  {\n    uint32_t stack_count;\n    void * stacks;\n  } stacks;\n  struct Il2CppMetadataSnapshot\n  {\n    uint32_t type_count;\n    Il2CppMetadataType * types;\n  } metadata_snapshot;\n  struct Il2CppGCHandles\n  {\n    uint32_t tracked_object_count;\n    void ** pointers_to_objects;\n  } gc_handles;\n  struct Il2CppRuntimeInformation\n  {\n    uint32_t pointer_size;\n    uint32_t object_header_size;\n    uint32_t array_header_size;\n    uint32_t array_bounds_offset_in_header;\n    uint32_t array_size_offset_in_header;\n    uint32_t allocation_granularity;\n  } runtime_information;\n  void * additional_user_information;\n};\n\nstruct Il2CppMetadataType\n{\n  uint32_t flags;\n  void * fields;\n  uint32_t field_count;\n  uint32_t statics_size;\n  uint8_t * statics;\n  uint32_t base_or_element_type_index;\n  char * name;\n  const char * assembly_name;\n  uint64_t type_info_address;\n  uint32_t size;\n};\n\nuintptr_t\nil2cpp_memory_snapshot_get_classes (\n    const Il2CppManagedMemorySnapshot * snapshot, Il2CppMetadataType ** iter)\n{\n  const int zero = 0;\n  const void * null = 0;\n\n  if (iter != NULL && snapshot->metadata_snapshot.type_count > zero)\n  {\n    if (*iter == null)\n    {\n      *iter = snapshot->metadata_snapshot.types;\n      return (uintptr_t) (*iter)->type_info_address;\n    }\n    else\n    {\n      Il2CppMetadataType * metadata_type = *iter + 1;\n\n      if (metadata_type < snapshot->metadata_snapshot.types +\n                              snapshot->metadata_snapshot.type_count)\n      {\n        *iter = metadata_type;\n        return (uintptr_t) (*iter)->type_info_address;\n      }\n    }\n  }\n  return 0;\n}\n\nvoid **\nil2cpp_memory_snapshot_get_objects (\n    const Il2CppManagedMemorySnapshot * snapshot, uint32_t * size)\n{\n  *size = snapshot->gc_handles.tracked_object_count;\n  return snapshot->gc_handles.pointers_to_objects;\n}\n")), l);
}(t || (t = {})), function(t) {
  function n(e) {
    const n = t.api.resolveInternalCall(Memory.allocUtf8String("UnityEngine.Application::" + e)), r = new NativeFunction(n, "pointer", []);
    return r.isNull() ? null : new t.String(r()).asNullable()?.content ?? null;
  }
  t.application = {
    get dataPath() {
      return n("get_persistentDataPath");
    },
    get identifier() {
      return n("get_identifier") ?? n("get_bundleIdentifier");
    },
    get version() {
      return n("get_version");
    }
  }, o(t, "unityVersion", (() => {
    const i = n("get_unityVersion");
    if (null != i) return i;
    for (const n of t.module.enumerateRanges("r--").concat(Process.getRangeByAddress(t.module.base))) for (let {address: t} of Memory.scanSync(n.base, n.size, "45 64 69 74 6f 72 ?? 44 61 74 61 ?? 69 6c 32 63 70 70")) {
      for (;0 != t.readU8(); ) t = t.sub(1);
      const n = e.find(t.add(1).readCString());
      if (null != n) return n;
    }
    r("couldn't determine the Unity version, please specify it manually");
  }), l), o(t, "unityVersionIsBelow201830", (() => e.lt(t.unityVersion, "2018.3.0")), l);
}(t || (t = {})), function(e) {
  e.dump = function(t, n) {
    t = t ?? `${e.application.identifier ?? "unknown"}_${e.application.version ?? "unknown"}.cs`;
    const r = `${n ?? e.application.dataPath}/${t}`, i = new File(r, "w");
    for (const t of e.domain.assemblies) {
      a(`dumping ${t.name}...`);
      for (const e of t.image.classes) i.write(`${e}\n\n`);
    }
    i.flush(), i.close(), s(`dump saved to ${r}`);
  };
}(t || (t = {})), function(e) {
  e.installExceptionListener = function(t = "current") {
    const n = e.api.threadGetCurrent();
    return Interceptor.attach(e.module.getExportByName("__cxa_throw"), (function(r) {
      ("current" != t || e.api.threadGetCurrent().equals(n)) && a(new e.Object(r[0].readPointer()));
    }));
  };
}(t || (t = {})), function(e) {
  e.is = function(t) {
    return n => n instanceof e.Class ? t.isAssignableFrom(n) : t.isAssignableFrom(n.class);
  }, e.isExactly = function(t) {
    return n => n instanceof e.Class ? n.equals(t) : n.class.equals(t);
  };
}(t || (t = {})), function(t) {
  t.gc = {
    get heapSize() {
      return t.api.gcGetHeapSize();
    },
    get isEnabled() {
      return !t.api.gcIsDisabled();
    },
    get isIncremental() {
      return !!t.api.gcIsIncremental();
    },
    get maxTimeSlice() {
      return t.api.gcGetMaxTimeSlice();
    },
    get usedHeapSize() {
      return t.api.gcGetUsedSize();
    },
    set isEnabled(e) {
      e ? t.api.gcEnable() : t.api.gcDisable();
    },
    set maxTimeSlice(e) {
      t.api.gcSetMaxTimeSlice(e);
    },
    choose(n) {
      const r = [], i = new NativeCallback(((e, n) => {
        for (let i = 0; i < n; i++) r.push(new t.Object(e.add(i * Process.pointerSize).readPointer()));
      }), "void", [ "pointer", "int", "pointer" ]);
      if (e.gte(t.unityVersion, "2021.2.0")) {
        const e = new NativeCallback(((e, n) => e.isNull() || 0 != n.compare(0) ? t.alloc(n) : (t.free(e), 
        NULL)), "pointer", [ "pointer", "size_t", "pointer" ]);
        this.stopWorld();
        const r = t.api.livenessAllocateStruct(n, 0, i, NULL, e);
        t.api.livenessCalculationFromStatics(r), t.api.livenessFinalize(r), this.startWorld(), 
        t.api.livenessFreeStruct(r);
      } else {
        const e = new NativeCallback((() => {}), "void", []), r = t.api.livenessCalculationBegin(n, 0, i, NULL, e, e);
        t.api.livenessCalculationFromStatics(r), t.api.livenessCalculationEnd(r);
      }
      return r;
    },
    collect(e) {
      t.api.gcCollect(e < 0 ? 0 : e > 2 ? 2 : e);
    },
    collectALittle() {
      t.api.gcCollectALittle();
    },
    startWorld: () => t.api.gcStartWorld(),
    startIncrementalCollection: () => t.api.gcStartIncrementalCollection(),
    stopWorld: () => t.api.gcStopWorld()
  };
}(t || (t = {})), function(e) {
  function t(n) {
    const r = n.type.class.fields.filter((e => !e.isStatic));
    return 0 == r.length ? [ n.handle.readU8() ] : r.map((e => e.withHolder(n).value)).map((n => n instanceof e.ValueType ? t(n) : n instanceof c ? n.handle : "boolean" == typeof n ? +n : n));
  }
  e.alloc = function(t = Process.pointerSize) {
    return e.api.alloc(t);
  }, e.free = function(t) {
    return e.api.free(t);
  }, e.read = function(t, n) {
    switch (n.typeEnum) {
     case e.Type.enum.boolean:
      return !!t.readS8();

     case e.Type.enum.byte:
      return t.readS8();

     case e.Type.enum.unsignedByte:
      return t.readU8();

     case e.Type.enum.short:
      return t.readS16();

     case e.Type.enum.unsignedShort:
      return t.readU16();

     case e.Type.enum.int:
      return t.readS32();

     case e.Type.enum.unsignedInt:
      return t.readU32();

     case e.Type.enum.char:
      return t.readU16();

     case e.Type.enum.long:
      return t.readS64();

     case e.Type.enum.unsignedLong:
      return t.readU64();

     case e.Type.enum.float:
      return t.readFloat();

     case e.Type.enum.double:
      return t.readDouble();

     case e.Type.enum.nativePointer:
     case e.Type.enum.unsignedNativePointer:
      return t.readPointer();

     case e.Type.enum.pointer:
      return new e.Pointer(t.readPointer(), n.class.baseType);

     case e.Type.enum.valueType:
      return new e.ValueType(t, n);

     case e.Type.enum.object:
     case e.Type.enum.class:
      return new e.Object(t.readPointer());

     case e.Type.enum.genericInstance:
      return n.class.isValueType ? new e.ValueType(t, n) : new e.Object(t.readPointer());

     case e.Type.enum.string:
      return new e.String(t.readPointer());

     case e.Type.enum.array:
     case e.Type.enum.multidimensionalArray:
      return new e.Array(t.readPointer());
    }
    r(`couldn't read the value from ${t} using an unhandled or unknown type ${n.name} (${n.typeEnum}), please file an issue`);
  }, e.write = function(t, n, i) {
    switch (i.typeEnum) {
     case e.Type.enum.boolean:
      return t.writeS8(+n);

     case e.Type.enum.byte:
      return t.writeS8(n);

     case e.Type.enum.unsignedByte:
      return t.writeU8(n);

     case e.Type.enum.short:
      return t.writeS16(n);

     case e.Type.enum.unsignedShort:
      return t.writeU16(n);

     case e.Type.enum.int:
      return t.writeS32(n);

     case e.Type.enum.unsignedInt:
      return t.writeU32(n);

     case e.Type.enum.char:
      return t.writeU16(n);

     case e.Type.enum.long:
      return t.writeS64(n);

     case e.Type.enum.unsignedLong:
      return t.writeU64(n);

     case e.Type.enum.float:
      return t.writeFloat(n);

     case e.Type.enum.double:
      return t.writeDouble(n);

     case e.Type.enum.nativePointer:
     case e.Type.enum.unsignedNativePointer:
     case e.Type.enum.pointer:
     case e.Type.enum.valueType:
     case e.Type.enum.string:
     case e.Type.enum.object:
     case e.Type.enum.class:
     case e.Type.enum.array:
     case e.Type.enum.multidimensionalArray:
     case e.Type.enum.genericInstance:
      return n instanceof e.ValueType ? (Memory.copy(t, n, i.class.valueTypeSize), t) : t.writePointer(n);
    }
    r(`couldn't write value ${n} to ${t} using an unhandled or unknown type ${i.name} (${i.typeEnum}), please file an issue`);
  }, e.fromFridaValue = function(t, n) {
    if (globalThis.Array.isArray(t)) return function(t, n) {
      function r(t, n = 0) {
        const i = [];
        for (const s of t.class.fields) if (!s.isStatic) {
          const t = n + s.offset - e.Object.headerSize;
          s.type.typeEnum == e.Type.enum.valueType || s.type.typeEnum == e.Type.enum.genericInstance && s.type.class.isValueType ? i.push(...r(s.type, t)) : i.push([ s.type.typeEnum, t ]);
        }
        return 0 == i.length && i.push([ e.Type.enum.unsignedByte, 0 ]), i;
      }
      const s = Memory.alloc(t.class.valueTypeSize);
      n = n.flat(1 / 0);
      const a = r(t);
      for (let t = 0; t < n.length; t++) {
        const r = n[t], [o, l] = a[t], c = s.add(l);
        switch (o) {
         case e.Type.enum.boolean:
         case e.Type.enum.byte:
          c.writeS8(r);
          break;

         case e.Type.enum.unsignedByte:
          c.writeU8(r);
          break;

         case e.Type.enum.short:
          c.writeS16(r);
          break;

         case e.Type.enum.unsignedShort:
          c.writeU16(r);
          break;

         case e.Type.enum.int:
          c.writeS32(r);
          break;

         case e.Type.enum.unsignedInt:
          c.writeU32(r);
          break;

         case e.Type.enum.char:
          c.writeU16(r);
          break;

         case e.Type.enum.long:
          c.writeS64(r);
          break;

         case e.Type.enum.unsignedLong:
          c.writeU64(r);
          break;

         case e.Type.enum.float:
          c.writeFloat(r);
          break;

         case e.Type.enum.double:
          c.writeDouble(r);
          break;

         case e.Type.enum.nativePointer:
         case e.Type.enum.unsignedNativePointer:
         case e.Type.enum.pointer:
         case e.Type.enum.array:
         case e.Type.enum.multidimensionalArray:
         case e.Type.enum.string:
         case e.Type.enum.object:
         case e.Type.enum.class:
         case e.Type.enum.genericInstance:
          c.writePointer(r);
          break;

         default:
          i(`arrayToValueType: defaulting ${o} to pointer`), c.writePointer(r);
        }
      }
      return new e.ValueType(s, t);
    }(n, t);
    if (!(t instanceof NativePointer)) return n.typeEnum == e.Type.enum.boolean ? !!t : t;
    if (n.isByReference) return new e.Reference(t, n);
    switch (n.typeEnum) {
     case e.Type.enum.pointer:
      return new e.Pointer(t, n.class.baseType);

     case e.Type.enum.string:
      return new e.String(t);

     case e.Type.enum.class:
     case e.Type.enum.genericInstance:
     case e.Type.enum.object:
      return new e.Object(t);

     case e.Type.enum.array:
     case e.Type.enum.multidimensionalArray:
      return new e.Array(t);

     default:
      return t;
    }
  }, e.toFridaValue = function(n) {
    return "boolean" == typeof n ? +n : n instanceof e.ValueType ? t(n) : n;
  };
}(t || (t = {})), function(e) {
  o(e, "moduleName", (() => {
    switch (Process.platform) {
     case "linux":
      try {
        Java.androidVersion;
        return "libil2cpp.so";
      } catch (e) {
        return "GameAssembly.so";
      }

     case "windows":
      return "GameAssembly.dll";

     case "darwin":
      try {
        return "UnityFramework";
      } catch (e) {
        return "GameAssembly.dylib";
      }
    }
    r(`${Process.platform} is not supported yet`);
  })), o(e, "module", (() => Process.getModuleByName(e.moduleName)), l), e.initialize = async function(t = !1) {
    return "darwin" == Process.platform ? Reflect.defineProperty(e, "moduleName", {
      value: DebugSymbol.fromName("il2cpp_init").moduleName ?? await u("UnityFramework", "GameAssembly.dylib")
    }) : await u(e.moduleName), !!e.api.getCorlib().isNull() && await new Promise((n => {
      const r = Interceptor.attach(e.api.initialize, {
        onLeave() {
          r.detach(), t ? n(!0) : setImmediate((() => n(!1)));
        }
      });
    }));
  };
}(t || (t = {})), function(e) {
  e.perform = async function t(n, r = "bind") {
    try {
      const i = await e.initialize("main" == r);
      if ("main" == r && !i) return t((() => e.mainThread.schedule(n)), "free");
      let s = e.currentThread;
      const a = null == s;
      s || (s = e.domain.attach());
      const o = n();
      return a && ("free" == r ? s.detach() : "bind" == r && Script.bindWeak(globalThis, (() => s.detach()))), 
      o instanceof Promise ? await o : o;
    } catch (e) {
      return Script.nextTick((e => {
        throw e;
      }), e), Promise.reject(e);
    }
  };
}(t || (t = {})), function(e) {
  e.Tracer = class {
    #e={
      depth: 0,
      buffer: [],
      history: new Set,
      flush: () => {
        if (0 == this.#e.depth) {
          const e = `\n${this.#e.buffer.join("\n")}\n`;
          if (this.#t) a(e); else {
            const t = function(e) {
              let t = 3735928559, n = 1103547991;
              for (let r, i = 0; i < e.length; i++) r = e.charCodeAt(i), t = Math.imul(t ^ r, 2654435761), 
              n = Math.imul(n ^ r, 1597334677);
              return t = Math.imul(t ^ t >>> 16, 2246822507), t ^= Math.imul(n ^ n >>> 13, 3266489909), 
              n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(t ^ t >>> 13, 3266489909), 
              4294967296 * (2097151 & n) + (t >>> 0);
            }(e);
            this.#e.history.has(t) || (this.#e.history.add(t), a(e));
          }
          this.#e.buffer.length = 0;
        }
      }
    };
    #n=e.mainThread.id;
    #t=!1;
    #r;
    #i=[];
    #s;
    #a;
    #o;
    #l;
    #c;
    #p;
    #u;
    #d;
    constructor(e) {
      this.#r = e;
    }
    thread(e) {
      return this.#n = e.id, this;
    }
    verbose(e) {
      return this.#t = e, this;
    }
    domain() {
      return this.#s = e.domain, this;
    }
    assemblies(...e) {
      return this.#a = e, this;
    }
    classes(...e) {
      return this.#o = e, this;
    }
    methods(...e) {
      return this.#l = e, this;
    }
    filterAssemblies(e) {
      return this.#c = e, this;
    }
    filterClasses(e) {
      return this.#p = e, this;
    }
    filterMethods(e) {
      return this.#u = e, this;
    }
    filterParameters(e) {
      return this.#d = e, this;
    }
    and() {
      const e = e => {
        if (null != this.#d) {
          for (const t of e.parameters) if (this.#d(t)) {
            this.#i.push(e);
            break;
          }
        } else this.#i.push(e);
      }, t = t => {
        for (const n of t) e(n);
      }, n = n => {
        if (null != this.#u) for (const t of n.methods) this.#u(t) && e(t); else t(n.methods);
      }, r = e => {
        for (const t of e) n(t);
      }, i = e => {
        if (null != this.#p) for (const t of e.image.classes) this.#p(t) && n(t); else r(e.image.classes);
      }, s = e => {
        for (const t of e) i(t);
      };
      return this.#l ? t(this.#l) : this.#o ? r(this.#o) : this.#a ? s(this.#a) : this.#s && (e => {
        if (null != this.#c) for (const t of e.assemblies) this.#c(t) && i(t); else s(e.assemblies);
      })(this.#s), this.#a = void 0, this.#o = void 0, this.#l = void 0, this.#c = void 0, 
      this.#p = void 0, this.#u = void 0, this.#d = void 0, this;
    }
    attach() {
      for (const e of this.#i) if (!e.virtualAddress.isNull()) try {
        this.#r(e, this.#e, this.#n);
      } catch (e) {
        switch (e.message) {
         case /unable to intercept function at \w+; please file a bug/.exec(e.message)?.input:
         case "already replaced this function":
          break;

         default:
          throw e;
        }
      }
    }
  }, e.trace = function(t = !1) {
    return new e.Tracer(t ? (t, n, r) => {
      const i = t.relativeVirtualAddress.toString(16).padStart(8, "0"), s = +!t.isStatic | +e.unityVersionIsBelow201830;
      t.revert();
      const a = new NativeCallback((function(...a) {
        if (this.threadId == r) {
          const r = t.isStatic ? void 0 : new e.Parameter("this", -1, t.class.type), o = r ? [ r ].concat(t.parameters) : t.parameters;
          n.buffer.push(`[2m0x${i}[0m ${"│ ".repeat(n.depth++)}┌─[35m${t.class.type.name}::[1m${t.name}[0m[0m(${o.map((t => `[32m${t.name}[0m = [31m${e.fromFridaValue(a[t.position + s], t.type)}[0m`)).join(", ")})`);
        }
        const o = t.nativeFunction(...a);
        return this.threadId == r && (n.buffer.push(`[2m0x${i}[0m ${"│ ".repeat(--n.depth)}└─[33m${t.class.type.name}::[1m${t.name}[0m[0m${null == o ? "" : ` = [36m${e.fromFridaValue(o, t.returnType)}`}[0m`), 
        n.flush()), o;
      }), t.returnType.fridaAlias, t.fridaSignature);
      Interceptor.replace(t.virtualAddress, a);
    } : (e, t, n) => {
      const r = e.relativeVirtualAddress.toString(16).padStart(8, "0");
      Interceptor.attach(e.virtualAddress, {
        onEnter() {
          this.threadId == n && t.buffer.push(`[2m0x${r}[0m ${"│ ".repeat(t.depth++)}┌─[35m${e.class.type.name}::[1m${e.name}[0m[0m`);
        },
        onLeave() {
          this.threadId == n && (t.buffer.push(`[2m0x${r}[0m ${"│ ".repeat(--t.depth)}└─[33m${e.class.type.name}::[1m${e.name}[0m[0m`), 
          t.flush());
        }
      });
    });
  }, e.backtrace = function(t) {
    const n = e.domain.assemblies.flatMap((e => e.image.classes.flatMap((e => e.methods.filter((e => !e.virtualAddress.isNull())))))).sort(((e, t) => e.virtualAddress.compare(t.virtualAddress))), r = e => {
      let t = 0, r = n.length - 1;
      for (;t <= r; ) {
        const i = Math.floor((t + r) / 2), s = n[i].virtualAddress.compare(e);
        if (0 == s) return n[i];
        s > 0 ? r = i - 1 : t = i + 1;
      }
      return n[r];
    };
    return new e.Tracer(((n, i, s) => {
      Interceptor.attach(n.virtualAddress, (function() {
        if (this.threadId == s) {
          const s = globalThis.Thread.backtrace(this.context, t);
          s.unshift(n.virtualAddress);
          for (const t of s) if (t.compare(e.module.base) > 0 && t.compare(e.module.base.add(e.module.size)) < 0) {
            const e = r(t);
            if (e) {
              const n = t.sub(e.virtualAddress);
              n.compare(4095) < 0 && i.buffer.push(`[2m0x${e.relativeVirtualAddress.toString(16).padStart(8, "0")}[0m[2m+0x${n.toString(16).padStart(3, "0")}[0m ${e.class.type.name}::[1m${e.name}[0m`);
            }
          }
          i.flush();
        }
      }));
    }));
  };
}(t || (t = {})), function(e) {
  class t extends c {
    static get headerSize() {
      return e.corlib.class("System.Array").instanceSize;
    }
    get elements() {
      const t = e.string("vfsfitvnm"), n = t.object.method("Split", 1).invoke(NULL).handle.offsetOf((e => e.readPointer().equals(t.handle))) ?? r("couldn't find the elements offset in the native array struct");
      return o(e.Array.prototype, "elements", (function() {
        return new e.Pointer(this.handle.add(n), this.elementType);
      }), l), this.elements;
    }
    get elementSize() {
      return this.elementType.class.arrayElementSize;
    }
    get elementType() {
      return this.object.class.type.class.baseType;
    }
    get length() {
      return e.api.arrayGetLength(this);
    }
    get object() {
      return new e.Object(this);
    }
    get(e) {
      return (e < 0 || e >= this.length) && r(`cannot get element at index ${e} as the array length is ${this.length}`), 
      this.elements.get(e);
    }
    set(e, t) {
      (e < 0 || e >= this.length) && r(`cannot set element at index ${e} as the array length is ${this.length}`), 
      this.elements.set(e, t);
    }
    toString() {
      return this.isNull() ? "null" : `[${this.elements.read(this.length, 0)}]`;
    }
    * [Symbol.iterator]() {
      for (let e = 0; e < this.length; e++) yield this.elements.get(e);
    }
  }
  n([ l ], t.prototype, "elementSize", null), n([ l ], t.prototype, "elementType", null), 
  n([ l ], t.prototype, "length", null), n([ l ], t.prototype, "object", null), n([ l ], t, "headerSize", null), 
  e.Array = t, e.array = function(t, n) {
    const r = "number" == typeof n ? n : n.length, i = new e.Array(e.api.arrayNew(t, r));
    return globalThis.Array.isArray(n) && i.elements.write(n), i;
  };
}(t || (t = {})), function(e) {
  let t = class extends c {
    get image() {
      let t = function() {
        return new e.Image(e.api.assemblyGetImage(this));
      };
      try {
        e.api.assemblyGetImage;
      } catch (n) {
        t = function() {
          return new e.Image(this.object.method("GetType", 1).invoke(e.string("<Module>")).method("get_Module").invoke().field("_impl").value);
        };
      }
      return o(e.Assembly.prototype, "image", t, l), this.image;
    }
    get name() {
      return this.image.name.replace(".dll", "");
    }
    get object() {
      for (const t of e.domain.object.method("GetAssemblies", 1).invoke(!1)) if (t.field("_mono_assembly").value.equals(this)) return t;
      r("couldn't find the object of the native assembly struct");
    }
  };
  n([ l ], t.prototype, "name", null), n([ l ], t.prototype, "object", null), t = n([ h ], t), 
  e.Assembly = t;
}(t || (t = {})), function(e) {
  let t = class extends c {
    get actualInstanceSize() {
      const t = e.corlib.class("System.String"), n = t.handle.offsetOf((e => e.readInt() == t.instanceSize - 2)) ?? r("couldn't find the actual instance size offset in the native class struct");
      return o(e.Class.prototype, "actualInstanceSize", (function() {
        return this.handle.add(n).readS32();
      }), l), this.actualInstanceSize;
    }
    get arrayClass() {
      return new e.Class(e.api.classGetArrayClass(this, 1));
    }
    get arrayElementSize() {
      return e.api.classGetArrayElementSize(this);
    }
    get assemblyName() {
      return e.api.classGetAssemblyName(this).readUtf8String();
    }
    get declaringClass() {
      return new e.Class(e.api.classGetDeclaringType(this)).asNullable();
    }
    get baseType() {
      return new e.Type(e.api.classGetBaseType(this)).asNullable();
    }
    get elementClass() {
      return new e.Class(e.api.classGetElementClass(this)).asNullable();
    }
    get fields() {
      return d((t => e.api.classGetFields(this, t))).map((t => new e.Field(t)));
    }
    get flags() {
      return e.api.classGetFlags(this);
    }
    get fullName() {
      return this.namespace ? `${this.namespace}.${this.name}` : this.name;
    }
    get genericParameterCount() {
      return this.isGeneric ? this.type.object.method("GetGenericArguments").invoke().length : 0;
    }
    get hasReferences() {
      return !!e.api.classHasReferences(this);
    }
    get hasStaticConstructor() {
      const e = this.tryMethod(".cctor");
      return null != e && !e.virtualAddress.isNull();
    }
    get image() {
      return new e.Image(e.api.classGetImage(this));
    }
    get instanceSize() {
      return e.api.classGetInstanceSize(this);
    }
    get isAbstract() {
      return !!e.api.classIsAbstract(this);
    }
    get isBlittable() {
      return !!e.api.classIsBlittable(this);
    }
    get isEnum() {
      return !!e.api.classIsEnum(this);
    }
    get isGeneric() {
      return !!e.api.classIsGeneric(this);
    }
    get isInflated() {
      return !!e.api.classIsInflated(this);
    }
    get isInterface() {
      return !!e.api.classIsInterface(this);
    }
    get isValueType() {
      return !!e.api.classIsValueType(this);
    }
    get interfaces() {
      return d((t => e.api.classGetInterfaces(this, t))).map((t => new e.Class(t)));
    }
    get methods() {
      return d((t => e.api.classGetMethods(this, t))).map((t => new e.Method(t)));
    }
    get name() {
      return e.api.classGetName(this).readUtf8String();
    }
    get namespace() {
      return e.api.classGetNamespace(this).readUtf8String();
    }
    get nestedClasses() {
      return d((t => e.api.classGetNestedClasses(this, t))).map((t => new e.Class(t)));
    }
    get parent() {
      return new e.Class(e.api.classGetParent(this)).asNullable();
    }
    get rank() {
      let e = 0;
      const t = this.name;
      for (let n = this.name.length - 1; n > 0; n--) {
        const r = t[n];
        if ("]" == r) e++; else {
          if ("[" == r || 0 == e) break;
          if ("," != r) break;
          e++;
        }
      }
      return e;
    }
    get staticFieldsData() {
      return e.api.classGetStaticFieldData(this);
    }
    get valueTypeSize() {
      return e.api.classGetValueTypeSize(this, NULL);
    }
    get type() {
      return new e.Type(e.api.classGetType(this));
    }
    alloc() {
      return new e.Object(e.api.objectNew(this));
    }
    field(e) {
      return this.tryField(e) ?? r(`couldn't find field ${e} in class ${this.type.name}`);
    }
    inflate(...t) {
      this.isGeneric || r(`cannot inflate class ${this.type.name} as it has no generic parameters`), 
      this.genericParameterCount != t.length && r(`cannot inflate class ${this.type.name} as it needs ${this.genericParameterCount} generic parameter(s), not ${t.length}`);
      const n = t.map((e => e.type.object)), i = e.array(e.corlib.class("System.Type"), n), s = this.type.object.method("MakeGenericType", 1).invoke(i);
      return new e.Class(e.api.classFromObject(s));
    }
    initialize() {
      return e.api.classInitialize(this), this;
    }
    isAssignableFrom(t) {
      return !!e.api.classIsAssignableFrom(this, t);
    }
    isSubclassOf(t, n) {
      return !!e.api.classIsSubclassOf(this, t, +n);
    }
    method(e, t = -1) {
      return this.tryMethod(e, t) ?? r(`couldn't find method ${e} in class ${this.type.name}`);
    }
    nested(e) {
      return this.tryNested(e) ?? r(`couldn't find nested class ${e} in class ${this.type.name}`);
    }
    new() {
      const t = this.alloc(), n = Memory.alloc(Process.pointerSize);
      e.api.objectInitialize(t, n);
      const i = n.readPointer();
      return i.isNull() || r(new e.Object(i).toString()), t;
    }
    tryField(t) {
      return new e.Field(e.api.classGetFieldFromName(this, Memory.allocUtf8String(t))).asNullable();
    }
    tryMethod(t, n = -1) {
      return new e.Method(e.api.classGetMethodFromName(this, Memory.allocUtf8String(t), n)).asNullable();
    }
    tryNested(e) {
      return this.nestedClasses.find((t => t.name == e));
    }
    toString() {
      const e = [ this.parent ].concat(this.interfaces);
      return `// ${this.assemblyName}\n${this.isEnum ? "enum" : this.isValueType ? "struct" : this.isInterface ? "interface" : "class"} ${this.type.name}${e ? ` : ${e.map((e => e?.type.name)).join(", ")}` : ""}\n{\n    ${this.fields.join("\n    ")}\n    ${this.methods.join("\n    ")}\n}`;
    }
    static enumerate(t) {
      const n = new NativeCallback((n => t(new e.Class(n))), "void", [ "pointer", "pointer" ]);
      return e.api.classForEach(n, NULL);
    }
  };
  n([ l ], t.prototype, "arrayClass", null), n([ l ], t.prototype, "arrayElementSize", null), 
  n([ l ], t.prototype, "assemblyName", null), n([ l ], t.prototype, "declaringClass", null), 
  n([ l ], t.prototype, "baseType", null), n([ l ], t.prototype, "elementClass", null), 
  n([ l ], t.prototype, "fields", null), n([ l ], t.prototype, "flags", null), n([ l ], t.prototype, "fullName", null), 
  n([ l ], t.prototype, "genericParameterCount", null), n([ l ], t.prototype, "hasReferences", null), 
  n([ l ], t.prototype, "hasStaticConstructor", null), n([ l ], t.prototype, "image", null), 
  n([ l ], t.prototype, "instanceSize", null), n([ l ], t.prototype, "isAbstract", null), 
  n([ l ], t.prototype, "isBlittable", null), n([ l ], t.prototype, "isEnum", null), 
  n([ l ], t.prototype, "isGeneric", null), n([ l ], t.prototype, "isInflated", null), 
  n([ l ], t.prototype, "isInterface", null), n([ l ], t.prototype, "isValueType", null), 
  n([ l ], t.prototype, "interfaces", null), n([ l ], t.prototype, "methods", null), 
  n([ l ], t.prototype, "name", null), n([ l ], t.prototype, "namespace", null), n([ l ], t.prototype, "nestedClasses", null), 
  n([ l ], t.prototype, "parent", null), n([ l ], t.prototype, "rank", null), n([ l ], t.prototype, "staticFieldsData", null), 
  n([ l ], t.prototype, "valueTypeSize", null), n([ l ], t.prototype, "type", null), 
  t = n([ h ], t), e.Class = t;
}(t || (t = {})), function(e) {
  e.delegate = function(t, n) {
    const i = e.corlib.class("System.Delegate"), s = e.corlib.class("System.MulticastDelegate");
    i.isAssignableFrom(t) || r(`cannot create a delegate for ${t.type.name} as it's a non-delegate class`), 
    (t.equals(i) || t.equals(s)) && r(`cannot create a delegate for neither ${i.type.name} nor ${s.type.name}, use a subclass instead`);
    const a = t.alloc(), o = a.handle.toString(), l = a.tryMethod("Invoke") ?? r(`cannot create a delegate for ${t.type.name}, there is no Invoke method`);
    a.method(".ctor").invoke(a, l.handle);
    const c = l.wrap(n);
    return a.field("method_ptr").value = c, a.field("invoke_impl").value = c, e._callbacksToKeepAlive[o] = c, 
    a;
  }, e._callbacksToKeepAlive = {};
}(t || (t = {})), function(e) {
  let t = class extends c {
    get assemblies() {
      let t = m((t => e.api.domainGetAssemblies(this, t)));
      if (0 == t.length) {
        const e = this.object.method("GetAssemblies").overload().invoke();
        t = globalThis.Array.from(e).map((e => e.field("_mono_assembly").value));
      }
      return t.map((t => new e.Assembly(t)));
    }
    get object() {
      return e.corlib.class("System.AppDomain").method("get_CurrentDomain").invoke();
    }
    assembly(e) {
      return this.tryAssembly(e) ?? r(`couldn't find assembly ${e}`);
    }
    attach() {
      return new e.Thread(e.api.threadAttach(this));
    }
    tryAssembly(t) {
      return new e.Assembly(e.api.domainGetAssemblyFromName(this, Memory.allocUtf8String(t))).asNullable();
    }
  };
  n([ l ], t.prototype, "assemblies", null), n([ l ], t.prototype, "object", null), 
  t = n([ h ], t), e.Domain = t, o(e, "domain", (() => new e.Domain(e.api.domainGet())), l);
}(t || (t = {})), function(e) {
  class t extends c {
    get class() {
      return new e.Class(e.api.fieldGetClass(this));
    }
    get flags() {
      return e.api.fieldGetFlags(this);
    }
    get isLiteral() {
      return 0 != (64 & this.flags);
    }
    get isStatic() {
      return 0 != (16 & this.flags);
    }
    get isThreadStatic() {
      const t = e.corlib.class("System.AppDomain").field("type_resolve_in_progress").offset;
      return o(e.Field.prototype, "isThreadStatic", (function() {
        return this.offset == t;
      }), l), this.isThreadStatic;
    }
    get modifier() {
      switch (7 & this.flags) {
       case 1:
        return "private";

       case 2:
        return "private protected";

       case 3:
        return "internal";

       case 4:
        return "protected";

       case 5:
        return "protected internal";

       case 6:
        return "public";
      }
    }
    get name() {
      return e.api.fieldGetName(this).readUtf8String();
    }
    get offset() {
      return e.api.fieldGetOffset(this);
    }
    get type() {
      return new e.Type(e.api.fieldGetType(this));
    }
    get value() {
      this.isStatic || r(`cannot access instance field ${this.class.type.name}::${this.name} from a class, use an object instead`);
      const t = Memory.alloc(Process.pointerSize);
      return e.api.fieldGetStaticValue(this.handle, t), e.read(t, this.type);
    }
    set value(t) {
      this.isStatic || r(`cannot access instance field ${this.class.type.name}::${this.name} from a class, use an object instead`), 
      (this.isThreadStatic || this.isLiteral) && r(`cannot write the value of field ${this.name} as it's thread static or literal`);
      const n = Memory.alloc(Process.pointerSize);
      e.write(n, t, this.type), e.api.fieldSetStaticValue(this.handle, n);
    }
    toString() {
      return `${this.isThreadStatic ? "[ThreadStatic] " : ""}${this.isStatic ? "static " : ""}${this.type.name} ${this.name}${this.isLiteral ? ` = ${this.type.class.isEnum ? e.read(this.value.handle, this.type.class.baseType) : this.value}` : ""};${this.isThreadStatic || this.isLiteral ? "" : ` // 0x${this.offset.toString(16)}`}`;
    }
    withHolder(t) {
      this.isStatic && r(`cannot access static field ${this.class.type.name}::${this.name} from an object, use a class instead`);
      let n = t.handle.add(this.offset);
      return t instanceof e.ValueType && (n = n.sub(e.Object.headerSize)), new Proxy(this, {
        get: (t, r) => "value" == r ? e.read(n, t.type) : Reflect.get(t, r),
        set: (t, r, i) => "value" == r ? (e.write(n, i, t.type), !0) : Reflect.set(t, r, i)
      });
    }
  }
  n([ l ], t.prototype, "class", null), n([ l ], t.prototype, "flags", null), n([ l ], t.prototype, "isLiteral", null), 
  n([ l ], t.prototype, "isStatic", null), n([ l ], t.prototype, "isThreadStatic", null), 
  n([ l ], t.prototype, "modifier", null), n([ l ], t.prototype, "name", null), n([ l ], t.prototype, "offset", null), 
  n([ l ], t.prototype, "type", null), e.Field = t;
}(t || (t = {})), function(e) {
  e.GCHandle = class {
    handle;
    constructor(e) {
      this.handle = e;
    }
    get target() {
      return new e.Object(e.api.gcHandleGetTarget(this.handle)).asNullable();
    }
    free() {
      return e.api.gcHandleFree(this.handle);
    }
  };
}(t || (t = {})), function(e) {
  let t = class extends c {
    get assembly() {
      return new e.Assembly(e.api.imageGetAssembly(this));
    }
    get classCount() {
      return e.api.imageGetClassCount(this);
    }
    get classes() {
      if (e.unityVersionIsBelow201830) {
        const t = this.assembly.object.method("GetTypes").invoke(!1);
        return globalThis.Array.from(t).map((t => new e.Class(e.api.classFromObject(t))));
      }
      return globalThis.Array.from(globalThis.Array(this.classCount), ((t, n) => new e.Class(e.api.imageGetClass(this, n))));
    }
    get name() {
      return e.api.imageGetName(this).readUtf8String();
    }
    class(e) {
      return this.tryClass(e) ?? r(`couldn't find class ${e} in assembly ${this.name}`);
    }
    tryClass(t) {
      const n = t.lastIndexOf("."), r = Memory.allocUtf8String(-1 == n ? "" : t.slice(0, n)), i = Memory.allocUtf8String(t.slice(n + 1));
      return new e.Class(e.api.classFromName(this, r, i)).asNullable();
    }
  };
  n([ l ], t.prototype, "assembly", null), n([ l ], t.prototype, "classCount", null), 
  n([ l ], t.prototype, "classes", null), n([ l ], t.prototype, "name", null), t = n([ h ], t), 
  e.Image = t, o(e, "corlib", (() => new e.Image(e.api.getCorlib())), l);
}(t || (t = {})), function(e) {
  class t extends c {
    static capture() {
      return new e.MemorySnapshot;
    }
    constructor(t = e.api.memorySnapshotCapture()) {
      super(t);
    }
    get classes() {
      return d((t => e.api.memorySnapshotGetClasses(this, t))).map((t => new e.Class(t)));
    }
    get objects() {
      return m((t => e.api.memorySnapshotGetObjects(this, t))).filter((e => !e.isNull())).map((t => new e.Object(t)));
    }
    free() {
      e.api.memorySnapshotFree(this);
    }
  }
  n([ l ], t.prototype, "classes", null), n([ l ], t.prototype, "objects", null), 
  e.MemorySnapshot = t, e.memorySnapshot = function(t) {
    const n = e.MemorySnapshot.capture(), r = t(n);
    return n.free(), r;
  };
}(t || (t = {})), function(e) {
  class t extends c {
    get class() {
      return new e.Class(e.api.methodGetClass(this));
    }
    get flags() {
      return e.api.methodGetFlags(this, NULL);
    }
    get implementationFlags() {
      const t = Memory.alloc(Process.pointerSize);
      return e.api.methodGetFlags(this, t), t.readU32();
    }
    get fridaSignature() {
      const t = [];
      for (const e of this.parameters) t.push(e.type.fridaAlias);
      return this.isStatic && !e.unityVersionIsBelow201830 || t.unshift("pointer"), this.isInflated && t.push("pointer"), 
      t;
    }
    get genericParameterCount() {
      return this.isGeneric ? this.object.method("GetGenericArguments").invoke().length : 0;
    }
    get isExternal() {
      return 0 != (4096 & this.implementationFlags);
    }
    get isGeneric() {
      return !!e.api.methodIsGeneric(this);
    }
    get isInflated() {
      return !!e.api.methodIsInflated(this);
    }
    get isStatic() {
      return !e.api.methodIsInstance(this);
    }
    get isSynchronized() {
      return 0 != (32 & this.implementationFlags);
    }
    get modifier() {
      switch (7 & this.flags) {
       case 1:
        return "private";

       case 2:
        return "private protected";

       case 3:
        return "internal";

       case 4:
        return "protected";

       case 5:
        return "protected internal";

       case 6:
        return "public";
      }
    }
    get name() {
      return e.api.methodGetName(this).readUtf8String();
    }
    get nativeFunction() {
      return new NativeFunction(this.virtualAddress, this.returnType.fridaAlias, this.fridaSignature);
    }
    get object() {
      return new e.Object(e.api.methodGetObject(this, NULL));
    }
    get parameterCount() {
      return e.api.methodGetParameterCount(this);
    }
    get parameters() {
      return globalThis.Array.from(globalThis.Array(this.parameterCount), ((t, n) => {
        const r = e.api.methodGetParameterName(this, n).readUtf8String(), i = e.api.methodGetParameterType(this, n);
        return new e.Parameter(r, n, new e.Type(i));
      }));
    }
    get relativeVirtualAddress() {
      return this.virtualAddress.sub(e.module.base);
    }
    get returnType() {
      return new e.Type(e.api.methodGetReturnType(this));
    }
    get virtualAddress() {
      const t = e.corlib.class("System.Reflection.Module").initialize().field("FilterTypeName").value, n = t.field("method_ptr").value, i = t.field("method").value.offsetOf((e => e.readPointer().equals(n))) ?? r("couldn't find the virtual address offset in the native method struct");
      return o(e.Method.prototype, "virtualAddress", (function() {
        return this.handle.add(i).readPointer();
      }), l), e.corlib.class("System.Reflection.Module").method(".cctor").invoke(), this.virtualAddress;
    }
    set implementation(e) {
      try {
        Interceptor.replace(this.virtualAddress, this.wrap(e));
      } catch (e) {
        switch (e.message) {
         case "access violation accessing 0x0":
          r(`couldn't set implementation for method ${this.name} as it has a NULL virtual address`);

         case /unable to intercept function at \w+; please file a bug/.exec(e.message)?.input:
          i(`couldn't set implementation for method ${this.name} as it may be a thunk`);
          break;

         case "already replaced this function":
          i(`couldn't set implementation for method ${this.name} as it has already been replaced by a thunk`);
          break;

         default:
          throw e;
        }
      }
    }
    inflate(...t) {
      this.isGeneric || r(`cannot inflate method ${this.name} as it has no generic parameters`), 
      this.genericParameterCount != t.length && r(`cannot inflate method ${this.name} as it needs ${this.genericParameterCount} generic parameter(s), not ${t.length}`);
      const n = t.map((e => e.type.object)), i = e.array(e.corlib.class("System.Type"), n), s = this.object.method("MakeGenericMethod", 1).invoke(i);
      return new e.Method(s.field("mhandle").value);
    }
    invoke(...e) {
      return this.isStatic || r(`cannot invoke non-static method ${this.name} as it must be invoked throught a Il2Cpp.Object, not a Il2Cpp.Class`), 
      this.invokeRaw(NULL, ...e);
    }
    invokeRaw(t, ...n) {
      const i = n.map(e.toFridaValue);
      this.isStatic && !e.unityVersionIsBelow201830 || i.unshift(t), this.isInflated && i.push(this.handle);
      try {
        const t = this.nativeFunction(...i);
        return e.fromFridaValue(t, this.returnType);
      } catch (e) {
        switch (null == e && r("an unexpected native invocation exception occurred, this is due to parameter types mismatch"), 
        e.message) {
         case "bad argument count":
          r(`couldn't invoke method ${this.name} as it needs ${this.parameterCount} parameter(s), not ${n.length}`);

         case "expected a pointer":
         case "expected number":
         case "expected array with fields":
          r(`couldn't invoke method ${this.name} using incorrect parameter types`);
        }
        throw e;
      }
    }
    overload(...e) {
      const t = this.tryOverload(...e);
      if (null != t) return t;
      r(`couldn't find overloaded method ${this.name}(${e})`);
    }
    parameter(e) {
      return this.tryParameter(e) ?? r(`couldn't find parameter ${e} in method ${this.name}`);
    }
    revert() {
      Interceptor.revert(this.virtualAddress), Interceptor.flush();
    }
    tryOverload(...e) {
      return this.class.methods.find((t => t.name == this.name && t.parameterCount == e.length && t.parameters.every(((t, n) => t.type.name == e[n]))));
    }
    tryParameter(e) {
      return this.parameters.find((t => t.name == e));
    }
    toString() {
      return `${this.isStatic ? "static " : ""}${this.returnType.name} ${this.name}(${this.parameters.join(", ")});${this.virtualAddress.isNull() ? "" : ` // 0x${this.relativeVirtualAddress.toString(16).padStart(8, "0")}`}`;
    }
    withHolder(e) {
      return this.isStatic && r(`cannot access static method ${this.class.type.name}::${this.name} from an object, use a class instead`), 
      new Proxy(this, {
        get(t, n) {
          switch (n) {
           case "invoke":
            return t.invokeRaw.bind(t, e.handle);

           case "inflate":
           case "overload":
           case "tryOverload":
            return function(...r) {
              return t[n](...r)?.withHolder(e);
            };
          }
          return Reflect.get(t, n);
        }
      });
    }
    wrap(t) {
      const n = +!this.isStatic | +e.unityVersionIsBelow201830;
      return new NativeCallback(((...r) => {
        const i = this.isStatic ? this.class : new e.Object(r[0]), s = this.parameters.map(((t, i) => e.fromFridaValue(r[i + n], t.type))), a = t.call(i, ...s);
        return e.toFridaValue(a);
      }), this.returnType.fridaAlias, this.fridaSignature);
    }
  }
  n([ l ], t.prototype, "class", null), n([ l ], t.prototype, "flags", null), n([ l ], t.prototype, "implementationFlags", null), 
  n([ l ], t.prototype, "fridaSignature", null), n([ l ], t.prototype, "genericParameterCount", null), 
  n([ l ], t.prototype, "isExternal", null), n([ l ], t.prototype, "isGeneric", null), 
  n([ l ], t.prototype, "isInflated", null), n([ l ], t.prototype, "isStatic", null), 
  n([ l ], t.prototype, "isSynchronized", null), n([ l ], t.prototype, "modifier", null), 
  n([ l ], t.prototype, "name", null), n([ l ], t.prototype, "nativeFunction", null), 
  n([ l ], t.prototype, "object", null), n([ l ], t.prototype, "parameterCount", null), 
  n([ l ], t.prototype, "parameters", null), n([ l ], t.prototype, "relativeVirtualAddress", null), 
  n([ l ], t.prototype, "returnType", null), e.Method = t;
}(t || (t = {})), function(e) {
  class t extends c {
    static get headerSize() {
      return e.corlib.class("System.Object").instanceSize;
    }
    get class() {
      return new e.Class(e.api.objectGetClass(this));
    }
    get size() {
      return e.api.objectGetSize(this);
    }
    enter() {
      return e.api.monitorEnter(this);
    }
    exit() {
      return e.api.monitorExit(this);
    }
    field(e) {
      return this.class.field(e).withHolder(this);
    }
    method(e, t = -1) {
      return this.class.method(e, t).withHolder(this);
    }
    pulse() {
      return e.api.monitorPulse(this);
    }
    pulseAll() {
      return e.api.monitorPulseAll(this);
    }
    ref(t) {
      return new e.GCHandle(e.api.gcHandleNew(this, +t));
    }
    virtualMethod(t) {
      return new e.Method(e.api.objectGetVirtualMethod(this, t)).withHolder(this);
    }
    tryEnter(t) {
      return !!e.api.monitorTryEnter(this, t);
    }
    tryField(e) {
      return this.class.tryField(e)?.withHolder(this);
    }
    tryMethod(e, t = -1) {
      return this.class.tryMethod(e, t)?.withHolder(this);
    }
    tryWait(t) {
      return !!e.api.monitorTryWait(this, t);
    }
    toString() {
      return this.isNull() ? "null" : this.method("ToString").invoke().content ?? "null";
    }
    unbox() {
      return new e.ValueType(e.api.objectUnbox(this), this.class.type);
    }
    wait() {
      return e.api.monitorWait(this);
    }
    weakRef(t) {
      return new e.GCHandle(e.api.gcHandleNewWeakRef(this, +t));
    }
  }
  n([ l ], t.prototype, "class", null), n([ l ], t.prototype, "size", null), n([ l ], t, "headerSize", null), 
  e.Object = t;
}(t || (t = {})), function(e) {
  e.Parameter = class {
    name;
    position;
    type;
    constructor(e, t, n) {
      this.name = e, this.position = t, this.type = n;
    }
    toString() {
      return `${this.type.name} ${this.name}`;
    }
  };
}(t || (t = {})), function(e) {
  e.Pointer = class extends c {
    type;
    constructor(e, t) {
      super(e), this.type = t;
    }
    get(t) {
      return e.read(this.handle.add(t * this.type.class.arrayElementSize), this.type);
    }
    read(e, t = 0) {
      const n = new globalThis.Array(e);
      for (let r = 0; r < e; r++) n[r] = this.get(r + t);
      return n;
    }
    set(t, n) {
      e.write(this.handle.add(t * this.type.class.arrayElementSize), n, this.type);
    }
    toString() {
      return this.handle.toString();
    }
    write(e, t = 0) {
      for (let n = 0; n < e.length; n++) this.set(n + t, e[n]);
    }
  };
}(t || (t = {})), function(e) {
  e.Reference = class extends c {
    type;
    constructor(e, t) {
      super(e), this.type = t;
    }
    get value() {
      return e.read(this.handle, this.type);
    }
    set value(t) {
      e.write(this.handle, t, this.type);
    }
    toString() {
      return this.isNull() ? "null" : `->${this.value}`;
    }
  }, e.reference = function(t, n) {
    const i = Memory.alloc(Process.pointerSize);
    switch (typeof t) {
     case "boolean":
      return new e.Reference(i.writeS8(+t), e.corlib.class("System.Boolean").type);

     case "number":
      switch (n?.typeEnum) {
       case e.Type.enum.unsignedByte:
        return new e.Reference(i.writeU8(t), n);

       case e.Type.enum.byte:
        return new e.Reference(i.writeS8(t), n);

       case e.Type.enum.char:
       case e.Type.enum.unsignedShort:
        return new e.Reference(i.writeU16(t), n);

       case e.Type.enum.short:
        return new e.Reference(i.writeS16(t), n);

       case e.Type.enum.unsignedInt:
        return new e.Reference(i.writeU32(t), n);

       case e.Type.enum.int:
        return new e.Reference(i.writeS32(t), n);

       case e.Type.enum.unsignedLong:
        return new e.Reference(i.writeU64(t), n);

       case e.Type.enum.long:
        return new e.Reference(i.writeS64(t), n);

       case e.Type.enum.float:
        return new e.Reference(i.writeFloat(t), n);

       case e.Type.enum.double:
        return new e.Reference(i.writeDouble(t), n);
      }

     case "object":
      if (t instanceof e.ValueType || t instanceof e.Pointer) return new e.Reference(i.writePointer(t), t.type);
      if (t instanceof e.Object) return new e.Reference(i.writePointer(t), t.class.type);
      if (t instanceof e.String || t instanceof e.Array) return new e.Reference(i.writePointer(t), t.object.class.type);
      if (t instanceof NativePointer) switch (n?.typeEnum) {
       case e.Type.enum.unsignedNativePointer:
       case e.Type.enum.nativePointer:
        return new e.Reference(i.writePointer(t), n);
      } else {
        if (t instanceof Int64) return new e.Reference(i.writeS64(t), e.corlib.class("System.Int64").type);
        if (t instanceof UInt64) return new e.Reference(i.writeU64(t), e.corlib.class("System.UInt64").type);
      }

     default:
      r(`couldn't create a reference to ${t} using an unhandled type ${n?.name}`);
    }
  };
}(t || (t = {})), function(e) {
  e.String = class extends c {
    get content() {
      return e.api.stringGetChars(this).readUtf16String(this.length);
    }
    set content(t) {
      const n = e.string("vfsfitvnm").handle.offsetOf((e => 32 == e.readInt())) ?? r("couldn't find the length offset in the native string struct");
      globalThis.Object.defineProperty(e.String.prototype, "content", {
        set(t) {
          e.api.stringGetChars(this).writeUtf16String(t ?? ""), this.handle.add(n).writeS32(t?.length ?? 0);
        }
      }), this.content = t;
    }
    get length() {
      return e.api.stringGetLength(this);
    }
    get object() {
      return new e.Object(this);
    }
    toString() {
      return this.isNull() ? "null" : `"${this.content}"`;
    }
  }, e.string = function(t) {
    return new e.String(e.api.stringNew(Memory.allocUtf8String(t ?? "")));
  };
}(t || (t = {})), function(e) {
  class t extends c {
    get id() {
      let t = function() {
        return this.internal.field("thread_id").value.toNumber();
      };
      if ("windows" != Process.platform) {
        const n = Process.getCurrentThreadId(), i = ptr(t.apply(e.currentThread)).offsetOf((e => e.readS32() == n), 1024) ?? r("couldn't find the offset for determining the kernel id of a posix thread"), s = t;
        t = function() {
          return ptr(s.apply(this)).add(i).readS32();
        };
      }
      return o(e.Thread.prototype, "id", t, l), this.id;
    }
    get internal() {
      return this.object.tryField("internal_thread")?.value ?? this.object;
    }
    get isFinalizer() {
      return !e.api.threadIsVm(this);
    }
    get managedId() {
      return this.object.method("get_ManagedThreadId").invoke();
    }
    get object() {
      return new e.Object(this);
    }
    get staticData() {
      return this.internal.field("static_data").value;
    }
    get synchronizationContext() {
      const t = (this.object.tryMethod("GetMutableExecutionContext") ?? this.object.method("get_ExecutionContext")).invoke();
      let n = t.tryField("_syncContext")?.value ?? t.tryMethod("get_SynchronizationContext")?.invoke() ?? this.tryLocalValue(e.corlib.class("System.Threading.SynchronizationContext"));
      return (null == n || n.isNull()) && (this.handle.equals(e.mainThread.handle) ? r("couldn't find the synchronization context of the main thread, perhaps this is early instrumentation?") : r(`couldn't find the synchronization context of thread #${this.managedId}, only the main thread is expected to have one`)), 
      n;
    }
    detach() {
      return e.api.threadDetach(this);
    }
    schedule(t) {
      const n = this.synchronizationContext.method("Post");
      return new Promise((r => {
        const i = e.delegate(e.corlib.class("System.Threading.SendOrPostCallback"), (() => {
          const e = t();
          setImmediate((() => r(e)));
        }));
        Script.bindWeak(globalThis, (() => {
          i.field("method_ptr").value = i.field("invoke_impl").value = e.api.domainGet;
        })), n.invoke(i, NULL);
      }));
    }
    tryLocalValue(t) {
      for (let n = 0; n < 16; n++) {
        const r = this.staticData.add(n * Process.pointerSize).readPointer();
        if (!r.isNull()) {
          const n = new e.Object(r.readPointer()).asNullable();
          if (n?.class?.isSubclassOf(t, !1)) return n;
        }
      }
    }
  }
  n([ l ], t.prototype, "internal", null), n([ l ], t.prototype, "isFinalizer", null), 
  n([ l ], t.prototype, "managedId", null), n([ l ], t.prototype, "object", null), 
  n([ l ], t.prototype, "staticData", null), n([ l ], t.prototype, "synchronizationContext", null), 
  e.Thread = t, o(e, "attachedThreads", (() => m(e.api.threadGetAttachedThreads).map((t => new e.Thread(t))))), 
  o(e, "currentThread", (() => new e.Thread(e.api.threadGetCurrent()).asNullable())), 
  o(e, "mainThread", (() => e.attachedThreads[0]));
}(t || (t = {})), function(e) {
  let t = class extends c {
    static get enum() {
      const t = (t, n = (e => e)) => n(e.corlib.class(t)).type.typeEnum;
      return {
        void: t("System.Void"),
        boolean: t("System.Boolean"),
        char: t("System.Char"),
        byte: t("System.SByte"),
        unsignedByte: t("System.Byte"),
        short: t("System.Int16"),
        unsignedShort: t("System.UInt16"),
        int: t("System.Int32"),
        unsignedInt: t("System.UInt32"),
        long: t("System.Int64"),
        unsignedLong: t("System.UInt64"),
        nativePointer: t("System.IntPtr"),
        unsignedNativePointer: t("System.UIntPtr"),
        float: t("System.Single"),
        double: t("System.Double"),
        pointer: t("System.IntPtr", (e => e.field("m_value"))),
        valueType: t("System.Decimal"),
        object: t("System.Object"),
        string: t("System.String"),
        class: t("System.Array"),
        array: t("System.Void", (e => e.arrayClass)),
        multidimensionalArray: t("System.Void", (t => new e.Class(e.api.classGetArrayClass(t, 2)))),
        genericInstance: t("System.Int32", (e => e.interfaces.find((e => e.name.endsWith("`1")))))
      };
    }
    get class() {
      return new e.Class(e.api.typeGetClass(this));
    }
    get fridaAlias() {
      if (this.isByReference) return "pointer";
      switch (this.typeEnum) {
       case e.Type.enum.void:
        return "void";

       case e.Type.enum.boolean:
        return "bool";

       case e.Type.enum.char:
        return "uchar";

       case e.Type.enum.byte:
        return "int8";

       case e.Type.enum.unsignedByte:
        return "uint8";

       case e.Type.enum.short:
        return "int16";

       case e.Type.enum.unsignedShort:
        return "uint16";

       case e.Type.enum.int:
        return "int32";

       case e.Type.enum.unsignedInt:
        return "uint32";

       case e.Type.enum.long:
        return "int64";

       case e.Type.enum.unsignedLong:
        return "uint64";

       case e.Type.enum.float:
        return "float";

       case e.Type.enum.double:
        return "double";

       case e.Type.enum.valueType:
        return r(this);

       case e.Type.enum.nativePointer:
       case e.Type.enum.unsignedNativePointer:
       case e.Type.enum.pointer:
       case e.Type.enum.string:
       case e.Type.enum.array:
       case e.Type.enum.multidimensionalArray:
        return "pointer";

       case e.Type.enum.class:
       case e.Type.enum.object:
       case e.Type.enum.genericInstance:
        return this.class.isValueType ? r(this) : "pointer";

       default:
        return "pointer";
      }
    }
    get isByReference() {
      return this.name.endsWith("&");
    }
    get isPrimitive() {
      return this.typeEnum >= e.Type.enum.boolean && this.typeEnum <= e.Type.enum.double || this.typeEnum == e.Type.enum.nativePointer || this.typeEnum == e.Type.enum.unsignedNativePointer;
    }
    get name() {
      const t = e.api.typeGetName(this);
      try {
        return t.readUtf8String();
      } finally {
        e.free(t);
      }
    }
    get object() {
      return new e.Object(e.api.typeGetObject(this));
    }
    get typeEnum() {
      return e.api.typeGetTypeEnum(this);
    }
    toString() {
      return this.name;
    }
  };
  function r(e) {
    const t = e.class.fields.filter((e => !e.isStatic));
    return 0 == t.length ? [ "char" ] : t.map((e => e.type.fridaAlias));
  }
  n([ l ], t.prototype, "class", null), n([ l ], t.prototype, "fridaAlias", null), 
  n([ l ], t.prototype, "isByReference", null), n([ l ], t.prototype, "isPrimitive", null), 
  n([ l ], t.prototype, "name", null), n([ l ], t.prototype, "object", null), n([ l ], t.prototype, "typeEnum", null), 
  n([ l ], t, "enum", null), t = n([ h ], t), e.Type = t;
}(t || (t = {})), function(e) {
  e.ValueType = class extends c {
    type;
    constructor(e, t) {
      super(e), this.type = t;
    }
    box() {
      return new e.Object(e.api.valueTypeBox(this.type.class, this));
    }
    field(e) {
      return this.type.class.field(e).withHolder(this);
    }
    tryField(e) {
      return this.type.class.tryField(e)?.withHolder(this);
    }
    toString() {
      return this.isNull() ? "null" : this.box().toString();
    }
  };
}(t || (t = {})), globalThis.Il2Cpp = t;

}).call(this)}).call(this,require("timers").setImmediate)

},{"timers":5}],4:[function(require,module,exports){
var t, e, n = module.exports = {};

function r() {
  throw new Error("setTimeout has not been defined");
}

function o() {
  throw new Error("clearTimeout has not been defined");
}

function i(e) {
  if (t === setTimeout) return setTimeout(e, 0);
  if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
  try {
    return t(e, 0);
  } catch (n) {
    try {
      return t.call(null, e, 0);
    } catch (n) {
      return t.call(this, e, 0);
    }
  }
}

function u(t) {
  if (e === clearTimeout) return clearTimeout(t);
  if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
  try {
    return e(t);
  } catch (n) {
    try {
      return e.call(null, t);
    } catch (n) {
      return e.call(this, t);
    }
  }
}

!function() {
  try {
    t = "function" == typeof setTimeout ? setTimeout : r;
  } catch (e) {
    t = r;
  }
  try {
    e = "function" == typeof clearTimeout ? clearTimeout : o;
  } catch (t) {
    e = o;
  }
}();

var c, s = [], l = !1, a = -1;

function f() {
  l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h());
}

function h() {
  if (!l) {
    var t = i(f);
    l = !0;
    for (var e = s.length; e; ) {
      for (c = s, s = []; ++a < e; ) c && c[a].run();
      a = -1, e = s.length;
    }
    c = null, l = !1, u(t);
  }
}

function m(t, e) {
  this.fun = t, this.array = e;
}

function p() {}

n.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  s.push(new m(t, e)), 1 !== s.length || l || i(h);
}, m.prototype.run = function() {
  this.fun.apply(null, this.array);
}, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", 
n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, 
n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, 
n.listeners = function(t) {
  return [];
}, n.binding = function(t) {
  throw new Error("process.binding is not supported");
}, n.cwd = function() {
  return "/";
}, n.chdir = function(t) {
  throw new Error("process.chdir is not supported");
}, n.umask = function() {
  return 0;
};

},{}],5:[function(require,module,exports){
(function (setImmediate,clearImmediate){(function (){
var e = require("process/browser.js").nextTick, t = Function.prototype.apply, o = Array.prototype.slice, i = {}, n = 0;

function r(e, t) {
  this._id = e, this._clearFn = t;
}

exports.setTimeout = function() {
  return new r(t.call(setTimeout, window, arguments), clearTimeout);
}, exports.setInterval = function() {
  return new r(t.call(setInterval, window, arguments), clearInterval);
}, exports.clearTimeout = exports.clearInterval = function(e) {
  e.close();
}, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
  this._clearFn.call(window, this._id);
}, exports.enroll = function(e, t) {
  clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
}, exports.unenroll = function(e) {
  clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
}, exports._unrefActive = exports.active = function(e) {
  clearTimeout(e._idleTimeoutId);
  var t = e._idleTimeout;
  t >= 0 && (e._idleTimeoutId = setTimeout((function() {
    e._onTimeout && e._onTimeout();
  }), t));
}, exports.setImmediate = "function" == typeof setImmediate ? setImmediate : function(t) {
  var r = n++, l = !(arguments.length < 2) && o.call(arguments, 1);
  return i[r] = !0, e((function() {
    i[r] && (l ? t.apply(null, l) : t.call(null), exports.clearImmediate(r));
  })), r;
}, exports.clearImmediate = "function" == typeof clearImmediate ? clearImmediate : function(e) {
  delete i[e];
};

}).call(this)}).call(this,require("timers").setImmediate,require("timers").clearImmediate)

},{"process/browser.js":4,"timers":5}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC50cyIsIm1haW4uanMiLCJub2RlX21vZHVsZXMvZnJpZGEtaWwyY3BwLWJyaWRnZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUNBQSxRQUFBOztBQUNBLE1BQUEsSUFBQSxRQUFBOztBQUNBLGFBQWEsRUFBQTs7Ozs7OztBQ0ZiLFNBQWdCO0VBQ1osT0FBTyxTQUFRO0lBQ1gsUUFBUSxJQUFJLG9CQUFvQixPQUFPLGVBQ3ZDLFFBQVEsSUFBSTtJQUNaLE9BQU8sS0FBSyxXQUFXLGlCQUFpQixRQUFRLGNBQ2hELFFBQVEsSUFBSTtBQUFXO0FBRS9COzs7OzRCQVBBLFFBQUE7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM1akVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiJ9
