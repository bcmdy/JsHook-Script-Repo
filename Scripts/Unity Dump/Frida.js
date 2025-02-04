(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (setImmediate){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("frida-il2cpp-bridge");
setImmediate(() => {
    console.log(`[${Il2Cpp.application.identifier}]-> Unity Version: ${Il2Cpp.unityVersion}`);
    console.log(`[${Il2Cpp.application.identifier}]-> Dump Start`);
    Il2Cpp.dump("Dump.cs", "data/data/" + Il2Cpp.application.identifier);
    console.log(`[${Il2Cpp.application.identifier}]-> Dump End`);
});
}).call(this)}).call(this,require("timers").setImmediate)

},{"frida-il2cpp-bridge":2,"timers":4}],2:[function(require,module,exports){
(function (setImmediate){(function (){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Il2Cpp;
(function (Il2Cpp) {
    /**
     * The **core** object where all the necessary IL2CPP native functions are
     * held. \
     * `frida-il2cpp-bridge` is built around this object by providing an
     * easy-to-use abstraction layer: the user isn't expected to use it directly,
     * but it can in case of advanced use cases.
     *
     * The APIs depends on the Unity version, hence some of them may be
     * unavailable; moreover, they are searched by **name** (e.g.
     * `il2cpp_class_from_name`) hence they might get stripped, hidden or
     * renamed by a nasty obfuscator.
     *
     * However, it is possible to override or set the handle of any of the
     * exports by using a global variable:
     * ```ts
     * declare global {
     *     let IL2CPP_EXPORTS: Record<string, () => NativePointer>;
     * }
     *
     * IL2CPP_EXPORTS = {
     *     il2cpp_image_get_class: () => Il2Cpp.module.base.add(0x1204c),
     *     il2cpp_class_get_parent: () => {
     *         return Memory.scanSync(Il2Cpp.module.base, Il2Cpp.module.size, "2f 10 ee 10 34 a8")[0].address;
     *     },
     * };
     *
     * Il2Cpp.perform(() => {
     *     // ...
     * });
     * ```
     */
    Il2Cpp.api = {
        get alloc() {
            return r("il2cpp_alloc", "pointer", ["size_t"]);
        },
        get arrayGetLength() {
            return r("il2cpp_array_length", "uint32", ["pointer"]);
        },
        get arrayNew() {
            return r("il2cpp_array_new", "pointer", ["pointer", "uint32"]);
        },
        get assemblyGetImage() {
            return r("il2cpp_assembly_get_image", "pointer", ["pointer"]);
        },
        get classForEach() {
            return r("il2cpp_class_for_each", "void", ["pointer", "pointer"]);
        },
        get classFromName() {
            return r("il2cpp_class_from_name", "pointer", ["pointer", "pointer", "pointer"]);
        },
        get classFromObject() {
            return r("il2cpp_class_from_system_type", "pointer", ["pointer"]);
        },
        get classGetArrayClass() {
            return r("il2cpp_array_class_get", "pointer", ["pointer", "uint32"]);
        },
        get classGetArrayElementSize() {
            return r("il2cpp_class_array_element_size", "int", ["pointer"]);
        },
        get classGetAssemblyName() {
            return r("il2cpp_class_get_assemblyname", "pointer", ["pointer"]);
        },
        get classGetBaseType() {
            return r("il2cpp_class_enum_basetype", "pointer", ["pointer"]);
        },
        get classGetDeclaringType() {
            return r("il2cpp_class_get_declaring_type", "pointer", ["pointer"]);
        },
        get classGetElementClass() {
            return r("il2cpp_class_get_element_class", "pointer", ["pointer"]);
        },
        get classGetFieldFromName() {
            return r("il2cpp_class_get_field_from_name", "pointer", ["pointer", "pointer"]);
        },
        get classGetFields() {
            return r("il2cpp_class_get_fields", "pointer", ["pointer", "pointer"]);
        },
        get classGetFlags() {
            return r("il2cpp_class_get_flags", "int", ["pointer"]);
        },
        get classGetImage() {
            return r("il2cpp_class_get_image", "pointer", ["pointer"]);
        },
        get classGetInstanceSize() {
            return r("il2cpp_class_instance_size", "int32", ["pointer"]);
        },
        get classGetInterfaces() {
            return r("il2cpp_class_get_interfaces", "pointer", ["pointer", "pointer"]);
        },
        get classGetMethodFromName() {
            return r("il2cpp_class_get_method_from_name", "pointer", ["pointer", "pointer", "int"]);
        },
        get classGetMethods() {
            return r("il2cpp_class_get_methods", "pointer", ["pointer", "pointer"]);
        },
        get classGetName() {
            return r("il2cpp_class_get_name", "pointer", ["pointer"]);
        },
        get classGetNamespace() {
            return r("il2cpp_class_get_namespace", "pointer", ["pointer"]);
        },
        get classGetNestedClasses() {
            return r("il2cpp_class_get_nested_types", "pointer", ["pointer", "pointer"]);
        },
        get classGetParent() {
            return r("il2cpp_class_get_parent", "pointer", ["pointer"]);
        },
        get classGetStaticFieldData() {
            return r("il2cpp_class_get_static_field_data", "pointer", ["pointer"]);
        },
        get classGetValueTypeSize() {
            return r("il2cpp_class_value_size", "int32", ["pointer", "pointer"]);
        },
        get classGetType() {
            return r("il2cpp_class_get_type", "pointer", ["pointer"]);
        },
        get classHasReferences() {
            return r("il2cpp_class_has_references", "bool", ["pointer"]);
        },
        get classInitialize() {
            return r("il2cpp_runtime_class_init", "void", ["pointer"]);
        },
        get classIsAbstract() {
            return r("il2cpp_class_is_abstract", "bool", ["pointer"]);
        },
        get classIsAssignableFrom() {
            return r("il2cpp_class_is_assignable_from", "bool", ["pointer", "pointer"]);
        },
        get classIsBlittable() {
            return r("il2cpp_class_is_blittable", "bool", ["pointer"]);
        },
        get classIsEnum() {
            return r("il2cpp_class_is_enum", "bool", ["pointer"]);
        },
        get classIsGeneric() {
            return r("il2cpp_class_is_generic", "bool", ["pointer"]);
        },
        get classIsInflated() {
            return r("il2cpp_class_is_inflated", "bool", ["pointer"]);
        },
        get classIsInterface() {
            return r("il2cpp_class_is_interface", "bool", ["pointer"]);
        },
        get classIsSubclassOf() {
            return r("il2cpp_class_is_subclass_of", "bool", ["pointer", "pointer", "bool"]);
        },
        get classIsValueType() {
            return r("il2cpp_class_is_valuetype", "bool", ["pointer"]);
        },
        get domainGetAssemblyFromName() {
            return r("il2cpp_domain_assembly_open", "pointer", ["pointer", "pointer"]);
        },
        get domainGet() {
            return r("il2cpp_domain_get", "pointer", []);
        },
        get domainGetAssemblies() {
            return r("il2cpp_domain_get_assemblies", "pointer", ["pointer", "pointer"]);
        },
        get fieldGetClass() {
            return r("il2cpp_field_get_parent", "pointer", ["pointer"]);
        },
        get fieldGetFlags() {
            return r("il2cpp_field_get_flags", "int", ["pointer"]);
        },
        get fieldGetName() {
            return r("il2cpp_field_get_name", "pointer", ["pointer"]);
        },
        get fieldGetOffset() {
            return r("il2cpp_field_get_offset", "int32", ["pointer"]);
        },
        get fieldGetStaticValue() {
            return r("il2cpp_field_static_get_value", "void", ["pointer", "pointer"]);
        },
        get fieldGetType() {
            return r("il2cpp_field_get_type", "pointer", ["pointer"]);
        },
        get fieldSetStaticValue() {
            return r("il2cpp_field_static_set_value", "void", ["pointer", "pointer"]);
        },
        get free() {
            return r("il2cpp_free", "void", ["pointer"]);
        },
        get gcCollect() {
            return r("il2cpp_gc_collect", "void", ["int"]);
        },
        get gcCollectALittle() {
            return r("il2cpp_gc_collect_a_little", "void", []);
        },
        get gcDisable() {
            return r("il2cpp_gc_disable", "void", []);
        },
        get gcEnable() {
            return r("il2cpp_gc_enable", "void", []);
        },
        get gcGetHeapSize() {
            return r("il2cpp_gc_get_heap_size", "int64", []);
        },
        get gcGetMaxTimeSlice() {
            return r("il2cpp_gc_get_max_time_slice_ns", "int64", []);
        },
        get gcGetUsedSize() {
            return r("il2cpp_gc_get_used_size", "int64", []);
        },
        get gcHandleGetTarget() {
            return r("il2cpp_gchandle_get_target", "pointer", ["uint32"]);
        },
        get gcHandleFree() {
            return r("il2cpp_gchandle_free", "void", ["uint32"]);
        },
        get gcHandleNew() {
            return r("il2cpp_gchandle_new", "uint32", ["pointer", "bool"]);
        },
        get gcHandleNewWeakRef() {
            return r("il2cpp_gchandle_new_weakref", "uint32", ["pointer", "bool"]);
        },
        get gcIsDisabled() {
            return r("il2cpp_gc_is_disabled", "bool", []);
        },
        get gcIsIncremental() {
            return r("il2cpp_gc_is_incremental", "bool", []);
        },
        get gcSetMaxTimeSlice() {
            return r("il2cpp_gc_set_max_time_slice_ns", "void", ["int64"]);
        },
        get gcStartIncrementalCollection() {
            return r("il2cpp_gc_start_incremental_collection", "void", []);
        },
        get gcStartWorld() {
            return r("il2cpp_start_gc_world", "void", []);
        },
        get gcStopWorld() {
            return r("il2cpp_stop_gc_world", "void", []);
        },
        get getCorlib() {
            return r("il2cpp_get_corlib", "pointer", []);
        },
        get imageGetAssembly() {
            return r("il2cpp_image_get_assembly", "pointer", ["pointer"]);
        },
        get imageGetClass() {
            return r("il2cpp_image_get_class", "pointer", ["pointer", "uint"]);
        },
        get imageGetClassCount() {
            return r("il2cpp_image_get_class_count", "uint32", ["pointer"]);
        },
        get imageGetName() {
            return r("il2cpp_image_get_name", "pointer", ["pointer"]);
        },
        get initialize() {
            return r("il2cpp_init", "void", ["pointer"]);
        },
        get livenessAllocateStruct() {
            return r("il2cpp_unity_liveness_allocate_struct", "pointer", ["pointer", "int", "pointer", "pointer", "pointer"]);
        },
        get livenessCalculationBegin() {
            return r("il2cpp_unity_liveness_calculation_begin", "pointer", ["pointer", "int", "pointer", "pointer", "pointer", "pointer"]);
        },
        get livenessCalculationEnd() {
            return r("il2cpp_unity_liveness_calculation_end", "void", ["pointer"]);
        },
        get livenessCalculationFromStatics() {
            return r("il2cpp_unity_liveness_calculation_from_statics", "void", ["pointer"]);
        },
        get livenessFinalize() {
            return r("il2cpp_unity_liveness_finalize", "void", ["pointer"]);
        },
        get livenessFreeStruct() {
            return r("il2cpp_unity_liveness_free_struct", "void", ["pointer"]);
        },
        get memorySnapshotCapture() {
            return r("il2cpp_capture_memory_snapshot", "pointer", []);
        },
        get memorySnapshotFree() {
            return r("il2cpp_free_captured_memory_snapshot", "void", ["pointer"]);
        },
        get memorySnapshotGetClasses() {
            return r("il2cpp_memory_snapshot_get_classes", "pointer", ["pointer", "pointer"]);
        },
        get memorySnapshotGetObjects() {
            return r("il2cpp_memory_snapshot_get_objects", "pointer", ["pointer", "pointer"]);
        },
        get methodGetClass() {
            return r("il2cpp_method_get_class", "pointer", ["pointer"]);
        },
        get methodGetFlags() {
            return r("il2cpp_method_get_flags", "uint32", ["pointer", "pointer"]);
        },
        get methodGetName() {
            return r("il2cpp_method_get_name", "pointer", ["pointer"]);
        },
        get methodGetObject() {
            return r("il2cpp_method_get_object", "pointer", ["pointer", "pointer"]);
        },
        get methodGetParameterCount() {
            return r("il2cpp_method_get_param_count", "uint8", ["pointer"]);
        },
        get methodGetParameterName() {
            return r("il2cpp_method_get_param_name", "pointer", ["pointer", "uint32"]);
        },
        get methodGetParameters() {
            return r("il2cpp_method_get_parameters", "pointer", ["pointer", "pointer"]);
        },
        get methodGetParameterType() {
            return r("il2cpp_method_get_param", "pointer", ["pointer", "uint32"]);
        },
        get methodGetReturnType() {
            return r("il2cpp_method_get_return_type", "pointer", ["pointer"]);
        },
        get methodIsGeneric() {
            return r("il2cpp_method_is_generic", "bool", ["pointer"]);
        },
        get methodIsInflated() {
            return r("il2cpp_method_is_inflated", "bool", ["pointer"]);
        },
        get methodIsInstance() {
            return r("il2cpp_method_is_instance", "bool", ["pointer"]);
        },
        get monitorEnter() {
            return r("il2cpp_monitor_enter", "void", ["pointer"]);
        },
        get monitorExit() {
            return r("il2cpp_monitor_exit", "void", ["pointer"]);
        },
        get monitorPulse() {
            return r("il2cpp_monitor_pulse", "void", ["pointer"]);
        },
        get monitorPulseAll() {
            return r("il2cpp_monitor_pulse_all", "void", ["pointer"]);
        },
        get monitorTryEnter() {
            return r("il2cpp_monitor_try_enter", "bool", ["pointer", "uint32"]);
        },
        get monitorTryWait() {
            return r("il2cpp_monitor_try_wait", "bool", ["pointer", "uint32"]);
        },
        get monitorWait() {
            return r("il2cpp_monitor_wait", "void", ["pointer"]);
        },
        get objectGetClass() {
            return r("il2cpp_object_get_class", "pointer", ["pointer"]);
        },
        get objectGetVirtualMethod() {
            return r("il2cpp_object_get_virtual_method", "pointer", ["pointer", "pointer"]);
        },
        get objectInitialize() {
            return r("il2cpp_runtime_object_init_exception", "void", ["pointer", "pointer"]);
        },
        get objectNew() {
            return r("il2cpp_object_new", "pointer", ["pointer"]);
        },
        get objectGetSize() {
            return r("il2cpp_object_get_size", "uint32", ["pointer"]);
        },
        get objectUnbox() {
            return r("il2cpp_object_unbox", "pointer", ["pointer"]);
        },
        get resolveInternalCall() {
            return r("il2cpp_resolve_icall", "pointer", ["pointer"]);
        },
        get stringGetChars() {
            return r("il2cpp_string_chars", "pointer", ["pointer"]);
        },
        get stringGetLength() {
            return r("il2cpp_string_length", "int32", ["pointer"]);
        },
        get stringNew() {
            return r("il2cpp_string_new", "pointer", ["pointer"]);
        },
        get valueTypeBox() {
            return r("il2cpp_value_box", "pointer", ["pointer", "pointer"]);
        },
        get threadAttach() {
            return r("il2cpp_thread_attach", "pointer", ["pointer"]);
        },
        get threadDetach() {
            return r("il2cpp_thread_detach", "void", ["pointer"]);
        },
        get threadGetAttachedThreads() {
            return r("il2cpp_thread_get_all_attached_threads", "pointer", ["pointer"]);
        },
        get threadGetCurrent() {
            return r("il2cpp_thread_current", "pointer", []);
        },
        get threadIsVm() {
            return r("il2cpp_is_vm_thread", "bool", ["pointer"]);
        },
        get typeGetClass() {
            return r("il2cpp_class_from_type", "pointer", ["pointer"]);
        },
        get typeGetName() {
            return r("il2cpp_type_get_name", "pointer", ["pointer"]);
        },
        get typeGetObject() {
            return r("il2cpp_type_get_object", "pointer", ["pointer"]);
        },
        get typeGetTypeEnum() {
            return r("il2cpp_type_get_type", "int", ["pointer"]);
        }
    };
    decorate(Il2Cpp.api, lazy);
    getter(Il2Cpp, "memorySnapshotApi", () => new CModule("#include <stdint.h>\n#include <string.h>\n\ntypedef struct Il2CppManagedMemorySnapshot Il2CppManagedMemorySnapshot;\ntypedef struct Il2CppMetadataType Il2CppMetadataType;\n\nstruct Il2CppManagedMemorySnapshot\n{\n  struct Il2CppManagedHeap\n  {\n    uint32_t section_count;\n    void * sections;\n  } heap;\n  struct Il2CppStacks\n  {\n    uint32_t stack_count;\n    void * stacks;\n  } stacks;\n  struct Il2CppMetadataSnapshot\n  {\n    uint32_t type_count;\n    Il2CppMetadataType * types;\n  } metadata_snapshot;\n  struct Il2CppGCHandles\n  {\n    uint32_t tracked_object_count;\n    void ** pointers_to_objects;\n  } gc_handles;\n  struct Il2CppRuntimeInformation\n  {\n    uint32_t pointer_size;\n    uint32_t object_header_size;\n    uint32_t array_header_size;\n    uint32_t array_bounds_offset_in_header;\n    uint32_t array_size_offset_in_header;\n    uint32_t allocation_granularity;\n  } runtime_information;\n  void * additional_user_information;\n};\n\nstruct Il2CppMetadataType\n{\n  uint32_t flags;\n  void * fields;\n  uint32_t field_count;\n  uint32_t statics_size;\n  uint8_t * statics;\n  uint32_t base_or_element_type_index;\n  char * name;\n  const char * assembly_name;\n  uint64_t type_info_address;\n  uint32_t size;\n};\n\nuintptr_t\nil2cpp_memory_snapshot_get_classes (\n    const Il2CppManagedMemorySnapshot * snapshot, Il2CppMetadataType ** iter)\n{\n  const int zero = 0;\n  const void * null = 0;\n\n  if (iter != NULL && snapshot->metadata_snapshot.type_count > zero)\n  {\n    if (*iter == null)\n    {\n      *iter = snapshot->metadata_snapshot.types;\n      return (uintptr_t) (*iter)->type_info_address;\n    }\n    else\n    {\n      Il2CppMetadataType * metadata_type = *iter + 1;\n\n      if (metadata_type < snapshot->metadata_snapshot.types +\n                              snapshot->metadata_snapshot.type_count)\n      {\n        *iter = metadata_type;\n        return (uintptr_t) (*iter)->type_info_address;\n      }\n    }\n  }\n  return 0;\n}\n\nvoid **\nil2cpp_memory_snapshot_get_objects (\n    const Il2CppManagedMemorySnapshot * snapshot, uint32_t * size)\n{\n  *size = snapshot->gc_handles.tracked_object_count;\n  return snapshot->gc_handles.pointers_to_objects;\n}\n"), lazy);
    function r(exportName, retType, argTypes) {
        const handle = globalThis.IL2CPP_EXPORTS?.[exportName]?.() ?? Il2Cpp.module.findExportByName(exportName) ?? Il2Cpp.memorySnapshotApi[exportName];
        return new NativeFunction(handle ?? raise(`couldn't resolve export ${exportName}`), retType, argTypes);
    }
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    /** */
    Il2Cpp.application = {
        /**
         * Gets the data path name of the current application, e.g.
         * `/data/emulated/0/Android/data/com.example.application/files`
         * on Android.
         *
         * **This information is not guaranteed to exist.**
         *
         * ```ts
         * Il2Cpp.perform(() => {
         *     // prints /data/emulated/0/Android/data/com.example.application/files
         *     console.log(Il2Cpp.application.dataPath);
         * });
         * ```
         */
        get dataPath() {
            return unityEngineCall("get_persistentDataPath");
        },
        /**
         * Gets the identifier name of the current application, e.g.
         * `com.example.application` on Android.
         *
         * **This information is not guaranteed to exist.**
         *
         * ```ts
         * Il2Cpp.perform(() => {
         *     // prints com.example.application
         *     console.log(Il2Cpp.application.identifier);
         * });
         * ```
         */
        get identifier() {
            return unityEngineCall("get_identifier") ?? unityEngineCall("get_bundleIdentifier");
        },
        /**
         * Gets the version name of the current application, e.g. `4.12.8`.
         *
         * **This information is not guaranteed to exist.**
         *
         * ```ts
         * Il2Cpp.perform(() => {
         *     // prints 4.12.8
         *     console.log(Il2Cpp.application.version);
         * });
         * ```
         */
        get version() {
            return unityEngineCall("get_version");
        }
    };
    // prettier-ignore
    getter(Il2Cpp, "unityVersion", () => {
        try {
            const unityVersion = globalThis.IL2CPP_UNITY_VERSION ?? unityEngineCall("get_unityVersion");
            if (unityVersion != null) {
                return unityVersion;
            }
        }
        catch (_) {
        }
        const searchPattern = "69 6c 32 63 70 70";
        for (const range of Il2Cpp.module.enumerateRanges("r--").concat(Process.getRangeByAddress(Il2Cpp.module.base))) {
            for (let { address } of Memory.scanSync(range.base, range.size, searchPattern)) {
                while (address.readU8() != 0) {
                    address = address.sub(1);
                }
                const match = UnityVersion.find(address.add(1).readCString());
                if (match != undefined) {
                    return match;
                }
            }
        }
        raise("couldn't determine the Unity version, please specify it manually");
    }, lazy);
    // prettier-ignore
    getter(Il2Cpp, "unityVersionIsBelow201830", () => {
        return UnityVersion.lt(Il2Cpp.unityVersion, "2018.3.0");
    }, lazy);
    // prettier-ignore
    getter(Il2Cpp, "unityVersionIsBelow202120", () => {
        return UnityVersion.lt(Il2Cpp.unityVersion, "2021.2.0");
    }, lazy);
    function unityEngineCall(method) {
        const handle = Il2Cpp.api.resolveInternalCall(Memory.allocUtf8String("UnityEngine.Application::" + method));
        const nativeFunction = new NativeFunction(handle, "pointer", []);
        return nativeFunction.isNull() ? null : new Il2Cpp.String(nativeFunction()).asNullable()?.content ?? null;
    }
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    /**
     * Dumps the application, i.e. it creates a dummy `.cs` file that contains
     * all the class, field and method declarations.
     *
     * The dump is very useful when it comes to inspecting the application as
     * you can easily search for succulent members using a simple text search,
     * hence this is typically the very first thing it should be done when
     * working with a new application. \
     * Keep in mind the dump is version, platform and arch dependentend, so
     * it has to be re-genereated if any of these changes.
     *
     * The file is generated in the **target** device, so you might need to
     * pull it to the host device afterwards.
     *
     * Dumping *may* require a file name and a directory path (a place where the
     * application can write to). If not provided, the target path is generated
     * automatically using the information from {@link Il2Cpp.application}.
     *
     * ```ts
     * Il2Cpp.perform(() => {
     *     Il2Cpp.dump();
     * });
     * ```
     *
     * For instance, the dump resembles the following:
     * ```
     * class Mono.DataConverter.PackContext : System.Object
     * {
     *     System.Byte[] buffer; // 0x10
     *     System.Int32 next; // 0x18
     *     System.String description; // 0x20
     *     System.Int32 i; // 0x28
     *     Mono.DataConverter conv; // 0x30
     *     System.Int32 repeat; // 0x38
     *     System.Int32 align; // 0x3c
     *
     *     System.Void Add(System.Byte[] group); // 0x012ef4f0
     *     System.Byte[] Get(); // 0x012ef6ec
     *     System.Void .ctor(); // 0x012ef78c
     *   }
     * ```
     */
    function dump(fileName, path) {
        fileName = fileName ?? `${Il2Cpp.application.identifier ?? "unknown"}_${Il2Cpp.application.version ?? "unknown"}.cs`;
        const destination = `${path ?? Il2Cpp.application.dataPath}/${fileName}`;
        const file = new File(destination, "w");
        for (const assembly of Il2Cpp.domain.assemblies) {
            inform(`dumping ${assembly.name}...`);
            for (const klass of assembly.image.classes) {
                file.write(`${klass}\n\n`);
            }
        }
        file.flush();
        file.close();
        ok(`dump saved to ${destination}`);
    }
    Il2Cpp.dump = dump;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    /**
     * Installs a listener to track any thrown (unrecoverable) C# exception. \
     * This may be useful when incurring in `abort was called` errors.
     *
     * By default, it only tracks exceptions that were thrown by the *caller*
     * thread.
     *
     * **It may not work for every platform.**
     *
     * ```ts
     * Il2Cpp.perform(() => {
     *     Il2Cpp.installExceptionListener("all");
     *
     *     // rest of the code
     * });
     * ```
     *
     * For instance, it may print something along:
     * ```
     * System.NullReferenceException: Object reference not set to an instance of an object.
     *   at AddressableLoadWrapper+<LoadGameObject>d__3[T].MoveNext () [0x00000] in <00000000000000000000000000000000>:0
     *   at UnityEngine.SetupCoroutine.InvokeMoveNext (System.Collections.IEnumerator enumerator, System.IntPtr returnValueAddress) [0x00000] in <00000000000000000000000000000000>:0
     * ```
     */
    function installExceptionListener(targetThread = "current") {
        const currentThread = Il2Cpp.api.threadGetCurrent();
        return Interceptor.attach(Il2Cpp.module.getExportByName("__cxa_throw"), function (args) {
            if (targetThread == "current" && !Il2Cpp.api.threadGetCurrent().equals(currentThread)) {
                return;
            }
            inform(new Il2Cpp.Object(args[0].readPointer()));
        });
    }
    Il2Cpp.installExceptionListener = installExceptionListener;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    /**
     * Creates a filter to include elements whose type can be assigned to a
     * variable of the given class. \
     * It relies on {@link Il2Cpp.Class.isAssignableFrom}.
     *
     * ```ts
     * const IComparable = Il2Cpp.corlib.class("System.IComparable");
     *
     * const objects = [
     *     Il2Cpp.corlib.class("System.Object").new(),
     *     Il2Cpp.corlib.class("System.String").new()
     * ];
     *
     * const comparables = objects.filter(Il2Cpp.is(IComparable));
     * ```
     */
    function is(klass) {
        return (element) => {
            if (element instanceof Il2Cpp.Class) {
                return klass.isAssignableFrom(element);
            }
            else {
                return klass.isAssignableFrom(element.class);
            }
        };
    }
    Il2Cpp.is = is;
    /**
     * Creates a filter to include elements whose type can be corresponds to
     * the given class. \
     * It compares the native handle of the element classes.
     *
     * ```ts
     * const String = Il2Cpp.corlib.class("System.String");
     *
     * const objects = [
     *     Il2Cpp.corlib.class("System.Object").new(),
     *     Il2Cpp.corlib.class("System.String").new()
     * ];
     *
     * const strings = objects.filter(Il2Cpp.isExactly(String));
     * ```
     */
    function isExactly(klass) {
        return (element) => {
            if (element instanceof Il2Cpp.Class) {
                return element.equals(klass);
            }
            else {
                return element.class.equals(klass);
            }
        };
    }
    Il2Cpp.isExactly = isExactly;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    /**
     * The object literal to interacts with the garbage collector.
     */
    Il2Cpp.gc = {
        /**
         * Gets the heap size in bytes.
         */
        get heapSize() {
            return Il2Cpp.api.gcGetHeapSize();
        },
        /**
         * Determines whether the garbage collector is enabled.
         */
        get isEnabled() {
            return !Il2Cpp.api.gcIsDisabled();
        },
        /**
         * Determines whether the garbage collector is incremental
         * ([source](https://docs.unity3d.com/Manual/performance-incremental-garbage-collection.html)).
         */
        get isIncremental() {
            return !!Il2Cpp.api.gcIsIncremental();
        },
        /**
         * Gets the number of nanoseconds the garbage collector can spend in a
         * collection step.
         */
        get maxTimeSlice() {
            return Il2Cpp.api.gcGetMaxTimeSlice();
        },
        /**
         * Gets the used heap size in bytes.
         */
        get usedHeapSize() {
            return Il2Cpp.api.gcGetUsedSize();
        },
        /**
         * Enables or disables the garbage collector.
         */
        set isEnabled(value) {
            value ? Il2Cpp.api.gcEnable() : Il2Cpp.api.gcDisable();
        },
        /**
         *  Sets the number of nanoseconds the garbage collector can spend in
         * a collection step.
         */
        set maxTimeSlice(nanoseconds) {
            Il2Cpp.api.gcSetMaxTimeSlice(nanoseconds);
        },
        /**
         * Returns the heap allocated objects of the specified class. \
         * This variant reads GC descriptors.
         */
        choose(klass) {
            const matches = [];
            const callback = (objects, size) => {
                for (let i = 0; i < size; i++) {
                    matches.push(new Il2Cpp.Object(objects.add(i * Process.pointerSize).readPointer()));
                }
            };
            const chooseCallback = new NativeCallback(callback, "void", ["pointer", "int", "pointer"]);
            if (Il2Cpp.unityVersionIsBelow202120) {
                const onWorld = new NativeCallback(() => { }, "void", []);
                const state = Il2Cpp.api.livenessCalculationBegin(klass, 0, chooseCallback, NULL, onWorld, onWorld);
                Il2Cpp.api.livenessCalculationFromStatics(state);
                Il2Cpp.api.livenessCalculationEnd(state);
            }
            else {
                const realloc = (handle, size) => {
                    if (!handle.isNull() && size.compare(0) == 0) {
                        Il2Cpp.free(handle);
                        return NULL;
                    }
                    else {
                        return Il2Cpp.alloc(size);
                    }
                };
                const reallocCallback = new NativeCallback(realloc, "pointer", ["pointer", "size_t", "pointer"]);
                this.stopWorld();
                const state = Il2Cpp.api.livenessAllocateStruct(klass, 0, chooseCallback, NULL, reallocCallback);
                Il2Cpp.api.livenessCalculationFromStatics(state);
                Il2Cpp.api.livenessFinalize(state);
                this.startWorld();
                Il2Cpp.api.livenessFreeStruct(state);
            }
            return matches;
        },
        /**
         * Forces a garbage collection of the specified generation.
         */
        collect(generation) {
            Il2Cpp.api.gcCollect(generation < 0 ? 0 : generation > 2 ? 2 : generation);
        },
        /**
         * Forces a garbage collection.
         */
        collectALittle() {
            Il2Cpp.api.gcCollectALittle();
        },
        /**
         *  Resumes all the previously stopped threads.
         */
        startWorld() {
            return Il2Cpp.api.gcStartWorld();
        },
        /**
         * Performs an incremental garbage collection.
         */
        startIncrementalCollection() {
            return Il2Cpp.api.gcStartIncrementalCollection();
        },
        /**
         * Stops all threads which may access the garbage collected heap, other
         * than the caller.
         */
        stopWorld() {
            return Il2Cpp.api.gcStopWorld();
        }
    };
})(Il2Cpp || (Il2Cpp = {}));
/** @internal */
var Android;
(function (Android) {
    // prettier-ignore
    getter(Android, "apiLevel", () => {
        const value = getProperty("ro.build.version.sdk");
        return value ? parseInt(value) : null;
    }, lazy);
    function getProperty(name) {
        const handle = Module.findExportByName("libc.so", "__system_property_get");
        if (handle) {
            const __system_property_get = new NativeFunction(handle, "void", ["pointer", "pointer"]);
            const value = Memory.alloc(92).writePointer(NULL);
            __system_property_get(Memory.allocUtf8String(name), value);
            return value.readCString() ?? undefined;
        }
    }
})(Android || (Android = {}));
/** @internal */
function raise(message) {
    const error = new Error(`\x1b[0m${message}`);
    error.name = `\x1b[0m\x1b[38;5;9mil2cpp\x1b[0m`;
    error.stack = error.stack
        ?.replace(/^Error/, error.name)
        ?.replace(/\n    at (.+) \((.+):(.+)\)/, "\x1b[3m\x1b[2m")
        ?.concat("\x1B[0m");
    throw error;
}
/** @internal */
function warn(message) {
    globalThis.console.log(`\x1b[38;5;11mil2cpp\x1b[0m: ${message}`);
}
/** @internal */
function ok(message) {
    globalThis.console.log(`\x1b[38;5;10mil2cpp\x1b[0m: ${message}`);
}
/** @internal */
function inform(message) {
    globalThis.console.log(`\x1b[38;5;12mil2cpp\x1b[0m: ${message}`);
}
/** @internal */
function decorate(target, decorator, descriptors = Object.getOwnPropertyDescriptors(target)) {
    for (const key in descriptors) {
        descriptors[key] = decorator(target, key, descriptors[key]);
    }
    Object.defineProperties(target, descriptors);
    return target;
}
/** @internal */
function getter(target, key, get, decorator) {
    globalThis.Object.defineProperty(target, key, decorator?.(target, key, { get, configurable: true }) ?? { get, configurable: true });
}
/** @internal */
function lazy(_, propertyKey, descriptor) {
    const getter = descriptor.get;
    if (!getter) {
        throw new Error("@lazy can only be applied to getter accessors");
    }
    descriptor.get = function () {
        const value = getter.call(this);
        Object.defineProperty(this, propertyKey, {
            value,
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            writable: false
        });
        return value;
    };
    return descriptor;
}
/** Scaffold class. */
class NativeStruct {
    handle;
    constructor(handleOrWrapper) {
        if (handleOrWrapper instanceof NativePointer) {
            this.handle = handleOrWrapper;
        }
        else {
            this.handle = handleOrWrapper.handle;
        }
    }
    equals(other) {
        return this.handle.equals(other.handle);
    }
    isNull() {
        return this.handle.isNull();
    }
    asNullable() {
        return this.isNull() ? null : this;
    }
}
/** @internal */
function forModule(...moduleNames) {
    function find(moduleName, name, readString = _ => _.readUtf8String()) {
        const handle = Module.findExportByName(moduleName, name) ?? NULL;
        if (!handle.isNull()) {
            return { handle, readString };
        }
    }
    return new Promise(resolve => {
        for (const moduleName of moduleNames) {
            const module = Process.findModuleByName(moduleName);
            if (module != null) {
                resolve(module);
                return;
            }
        }
        let targets = [];
        switch (Process.platform) {
            case "linux":
                if (Android.apiLevel == null) {
                    targets = [find(null, "dlopen")];
                    break;
                }
                // A5: device reboot, can't hook symbols
                // A6, A7: __dl_open
                // A8, A8.1: __dl__Z8__dlopenPKciPKv
                // A9, A10, A12, A13: __dl___loader_dlopen
                targets = (Process.findModuleByName("linker64") ?? Process.getModuleByName("linker"))
                    .enumerateSymbols()
                    .filter(_ => ["__dl___loader_dlopen", "__dl__Z8__dlopenPKciPKv", "__dl_open"].includes(_.name))
                    .map(_ => ({ handle: _.address, readString: _ => _.readCString() }));
                break;
            case "darwin":
                targets = [find("libdyld.dylib", "dlopen")];
                break;
            case "windows":
                targets = [
                    find("kernel32.dll", "LoadLibraryW", _ => _.readUtf16String()),
                    find("kernel32.dll", "LoadLibraryExW", _ => _.readUtf16String()),
                    find("kernel32.dll", "LoadLibraryA", _ => _.readAnsiString()),
                    find("kernel32.dll", "LoadLibraryExA", _ => _.readAnsiString())
                ];
                break;
        }
        targets = targets.filter(_ => _);
        if (targets.length == 0) {
            raise(`there are no targets to hook the loading of \x1b[3m${moduleNames}\x1b[0m, please file a bug`);
        }
        const timeout = setTimeout(() => {
            for (const moduleName of moduleNames) {
                const module = Process.findModuleByName(moduleName);
                if (module != null) {
                    warn(`\x1b[3m${module.name}\x1b[0m has been loaded, but such event hasn't been detected - please file a bug`);
                    clearTimeout(timeout);
                    interceptors.forEach(_ => _.detach());
                    resolve(module);
                    return;
                }
            }
            warn(`10 seconds have passed and \x1b[3m${moduleNames}\x1b[0m has not been loaded yet, is the app running?`);
        }, 10000);
        const interceptors = targets.map(_ => Interceptor.attach(_.handle, {
            onEnter(args) {
                this.modulePath = _.readString(args[0]) ?? "";
            },
            onLeave(_) {
                for (const moduleName of moduleNames) {
                    if (this.modulePath.endsWith(moduleName)) {
                        // Adding a fallback in case Frida cannot find the module by its full path
                        // https://github.com/vfsfitvnm/frida-il2cpp-bridge/issues/547
                        const module = Process.findModuleByName(this.modulePath) ?? Process.findModuleByName(moduleName);
                        if (module != null) {
                            setImmediate(() => {
                                clearTimeout(timeout);
                                interceptors.forEach(_ => _.detach());
                            });
                            resolve(module);
                            break;
                        }
                    }
                }
            }
        }));
    });
}
NativePointer.prototype.offsetOf = function (condition, depth) {
    // depth ??= 512;
    depth = depth || 512;
    for (let i = 0; depth > 0 ? i < depth : i < -depth; i++) {
        if (condition(depth > 0 ? this.add(i) : this.sub(i))) {
            return i;
        }
    }
    return null;
};
/** @internal */
function readNativeIterator(block) {
    const array = [];
    const iterator = Memory.alloc(Process.pointerSize);
    let handle = block(iterator);
    while (!handle.isNull()) {
        array.push(handle);
        handle = block(iterator);
    }
    return array;
}
/** @internal */
function readNativeList(block) {
    const lengthPointer = Memory.alloc(Process.pointerSize);
    const startPointer = block(lengthPointer);
    if (startPointer.isNull()) {
        return [];
    }
    const array = new Array(lengthPointer.readInt());
    for (let i = 0; i < array.length; i++) {
        array[i] = startPointer.add(i * Process.pointerSize).readPointer();
    }
    return array;
}
/** @internal */
function recycle(Class) {
    return new Proxy(Class, {
        cache: new Map(),
        construct(Target, argArray) {
            const handle = argArray[0].toUInt32();
            if (!this.cache.has(handle)) {
                this.cache.set(handle, new Target(argArray[0]));
            }
            return this.cache.get(handle);
        }
    });
}
/** @internal */
var UnityVersion;
(function (UnityVersion) {
    const pattern = /(20\d{2}|\d)\.(\d)\.(\d{1,2})(?:[abcfp]|rc){0,2}\d?/;
    function find(string) {
        return string?.match(pattern)?.[0];
    }
    UnityVersion.find = find;
    function gte(a, b) {
        return compare(a, b) >= 0;
    }
    UnityVersion.gte = gte;
    function lt(a, b) {
        return compare(a, b) < 0;
    }
    UnityVersion.lt = lt;
    function compare(a, b) {
        const aMatches = a.match(pattern);
        const bMatches = b.match(pattern);
        for (let i = 1; i <= 3; i++) {
            const a = Number(aMatches?.[i] ?? -1);
            const b = Number(bMatches?.[i] ?? -1);
            if (a > b)
                return 1;
            else if (a < b)
                return -1;
        }
        return 0;
    }
})(UnityVersion || (UnityVersion = {}));
var Il2Cpp;
(function (Il2Cpp) {
    /**
     * Allocates the given amount of bytes - it's equivalent to C's `malloc`. \
     * The allocated memory should be freed manually.
     */
    function alloc(size = Process.pointerSize) {
        return Il2Cpp.api.alloc(size);
    }
    Il2Cpp.alloc = alloc;
    /**
     * Frees a previously allocated memory using {@link Il2Cpp.alloc} - it's
     *  equivalent to C's `free`..
     *
     * ```ts
     * const handle = Il2Cpp.alloc(64);
     *
     * // ...
     *
     * Il2Cpp.free(handle);
     * ```
     */
    function free(pointer) {
        return Il2Cpp.api.free(pointer);
    }
    Il2Cpp.free = free;
    /** @internal */
    function read(pointer, type) {
        switch (type.typeEnum) {
            case Il2Cpp.Type.enum.boolean:
                return !!pointer.readS8();
            case Il2Cpp.Type.enum.byte:
                return pointer.readS8();
            case Il2Cpp.Type.enum.unsignedByte:
                return pointer.readU8();
            case Il2Cpp.Type.enum.short:
                return pointer.readS16();
            case Il2Cpp.Type.enum.unsignedShort:
                return pointer.readU16();
            case Il2Cpp.Type.enum.int:
                return pointer.readS32();
            case Il2Cpp.Type.enum.unsignedInt:
                return pointer.readU32();
            case Il2Cpp.Type.enum.char:
                return pointer.readU16();
            case Il2Cpp.Type.enum.long:
                return pointer.readS64();
            case Il2Cpp.Type.enum.unsignedLong:
                return pointer.readU64();
            case Il2Cpp.Type.enum.float:
                return pointer.readFloat();
            case Il2Cpp.Type.enum.double:
                return pointer.readDouble();
            case Il2Cpp.Type.enum.nativePointer:
            case Il2Cpp.Type.enum.unsignedNativePointer:
                return pointer.readPointer();
            case Il2Cpp.Type.enum.pointer:
                return new Il2Cpp.Pointer(pointer.readPointer(), type.class.baseType);
            case Il2Cpp.Type.enum.valueType:
                return new Il2Cpp.ValueType(pointer, type);
            case Il2Cpp.Type.enum.object:
            case Il2Cpp.Type.enum.class:
                return new Il2Cpp.Object(pointer.readPointer());
            case Il2Cpp.Type.enum.genericInstance:
                return type.class.isValueType ? new Il2Cpp.ValueType(pointer, type) : new Il2Cpp.Object(pointer.readPointer());
            case Il2Cpp.Type.enum.string:
                return new Il2Cpp.String(pointer.readPointer());
            case Il2Cpp.Type.enum.array:
            case Il2Cpp.Type.enum.multidimensionalArray:
                return new Il2Cpp.Array(pointer.readPointer());
        }
        raise(`couldn't read the value from ${pointer} using an unhandled or unknown type ${type.name} (${type.typeEnum}), please file an issue`);
    }
    Il2Cpp.read = read;
    /** @internal */
    function write(pointer, value, type) {
        switch (type.typeEnum) {
            case Il2Cpp.Type.enum.boolean:
                return pointer.writeS8(+value);
            case Il2Cpp.Type.enum.byte:
                return pointer.writeS8(value);
            case Il2Cpp.Type.enum.unsignedByte:
                return pointer.writeU8(value);
            case Il2Cpp.Type.enum.short:
                return pointer.writeS16(value);
            case Il2Cpp.Type.enum.unsignedShort:
                return pointer.writeU16(value);
            case Il2Cpp.Type.enum.int:
                return pointer.writeS32(value);
            case Il2Cpp.Type.enum.unsignedInt:
                return pointer.writeU32(value);
            case Il2Cpp.Type.enum.char:
                return pointer.writeU16(value);
            case Il2Cpp.Type.enum.long:
                return pointer.writeS64(value);
            case Il2Cpp.Type.enum.unsignedLong:
                return pointer.writeU64(value);
            case Il2Cpp.Type.enum.float:
                return pointer.writeFloat(value);
            case Il2Cpp.Type.enum.double:
                return pointer.writeDouble(value);
            case Il2Cpp.Type.enum.nativePointer:
            case Il2Cpp.Type.enum.unsignedNativePointer:
            case Il2Cpp.Type.enum.pointer:
            case Il2Cpp.Type.enum.string:
            case Il2Cpp.Type.enum.array:
            case Il2Cpp.Type.enum.multidimensionalArray:
                return pointer.writePointer(value);
            case Il2Cpp.Type.enum.valueType:
                return Memory.copy(pointer, value, type.class.valueTypeSize), pointer;
            case Il2Cpp.Type.enum.object:
            case Il2Cpp.Type.enum.class:
            case Il2Cpp.Type.enum.genericInstance:
                return value instanceof Il2Cpp.ValueType ? (Memory.copy(pointer, value, type.class.valueTypeSize), pointer) : pointer.writePointer(value);
        }
        raise(`couldn't write value ${value} to ${pointer} using an unhandled or unknown type ${type.name} (${type.typeEnum}), please file an issue`);
    }
    Il2Cpp.write = write;
    /** @internal */
    function fromFridaValue(value, type) {
        if (globalThis.Array.isArray(value)) {
            const handle = Memory.alloc(type.class.valueTypeSize);
            const fields = type.class.fields.filter(_ => !_.isStatic);
            for (let i = 0; i < fields.length; i++) {
                const convertedValue = fromFridaValue(value[i], fields[i].type);
                write(handle.add(fields[i].offset).sub(Il2Cpp.Object.headerSize), convertedValue, fields[i].type);
            }
            return new Il2Cpp.ValueType(handle, type);
        }
        else if (value instanceof NativePointer) {
            if (type.isByReference) {
                return new Il2Cpp.Reference(value, type);
            }
            switch (type.typeEnum) {
                case Il2Cpp.Type.enum.pointer:
                    return new Il2Cpp.Pointer(value, type.class.baseType);
                case Il2Cpp.Type.enum.string:
                    return new Il2Cpp.String(value);
                case Il2Cpp.Type.enum.class:
                case Il2Cpp.Type.enum.genericInstance:
                case Il2Cpp.Type.enum.object:
                    return new Il2Cpp.Object(value);
                case Il2Cpp.Type.enum.array:
                case Il2Cpp.Type.enum.multidimensionalArray:
                    return new Il2Cpp.Array(value);
                default:
                    return value;
            }
        }
        else if (type.typeEnum == Il2Cpp.Type.enum.boolean) {
            return !!value;
        }
        else if (type.typeEnum == Il2Cpp.Type.enum.valueType && type.class.isEnum) {
            return fromFridaValue([value], type);
        }
        else {
            return value;
        }
    }
    Il2Cpp.fromFridaValue = fromFridaValue;
    /** @internal */
    function toFridaValue(value) {
        if (typeof value == "boolean") {
            return +value;
        }
        else if (value instanceof Il2Cpp.ValueType) {
            if (value.type.class.isEnum) {
                return value.field("value__").value;
            }
            else {
                const _ = value.type.class.fields.filter(_ => !_.isStatic).map(_ => toFridaValue(_.withHolder(value).value));
                return _.length == 0 ? [0] : _;
            }
        }
        else {
            return value;
        }
    }
    Il2Cpp.toFridaValue = toFridaValue;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    getter(Il2Cpp, "module", () => {
        const [moduleName, fallback] = getExpectedModuleNames();
        return Process.findModuleByName(moduleName) ?? Process.getModuleByName(fallback);
    });
    /**
     * @internal
     * Waits for the IL2CPP native library to be loaded and initialized.
     */
    async function initialize(blocking = false) {
        Reflect.defineProperty(Il2Cpp, "module", {
            // prettier-ignore
            value: Process.platform == "darwin"
                ? Process.findModuleByAddress(DebugSymbol.fromName("il2cpp_init").address)
                    ?? await forModule(...getExpectedModuleNames())
                : await forModule(...getExpectedModuleNames())
        });
        // At this point, the IL2CPP native library has been loaded, but we
        // cannot interact with IL2CPP until `il2cpp_init` is done.
        // It looks like `il2cpp_get_corlib` returns NULL only when the
        // initialization is not completed yet.
        if (Il2Cpp.api.getCorlib().isNull()) {
            return await new Promise(resolve => {
                const interceptor = Interceptor.attach(Il2Cpp.api.initialize, {
                    onLeave() {
                        interceptor.detach();
                        blocking ? resolve(true) : setImmediate(() => resolve(false));
                    }
                });
            });
        }
        return false;
    }
    Il2Cpp.initialize = initialize;
    function getExpectedModuleNames() {
        if (globalThis.IL2CPP_MODULE_NAME) {
            return [globalThis.IL2CPP_MODULE_NAME];
        }
        switch (Process.platform) {
            case "linux":
                return [Android.apiLevel ? "libil2cpp.so" : "GameAssembly.so"];
            case "windows":
                return ["GameAssembly.dll"];
            case "darwin":
                return ["UnityFramework", "GameAssembly.dylib"];
        }
        raise(`${Process.platform} is not supported yet`);
    }
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    /** Attaches the caller thread to Il2Cpp domain and executes the given block.  */
    async function perform(block, flag = "bind") {
        try {
            const isInMainThread = await Il2Cpp.initialize(flag == "main");
            if (flag == "main" && !isInMainThread) {
                return perform(() => Il2Cpp.mainThread.schedule(block), "free");
            }
            let thread = Il2Cpp.currentThread;
            const isForeignThread = thread == null;
            // thread ??= Il2Cpp.domain.attach();
            thread = thread || Il2Cpp.domain.attach();
            const result = block();
            if (isForeignThread) {
                if (flag == "free") {
                    thread.detach();
                }
                else if (flag == "bind") {
                    Script.bindWeak(globalThis, () => thread.detach());
                }
            }
            return result instanceof Promise ? await result : result;
        }
        catch (error) {
            Script.nextTick(_ => { throw _; }, error); // prettier-ignore
            return Promise.reject(error);
        }
    }
    Il2Cpp.perform = perform;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class Tracer {
        /** @internal */
        #state = {
            depth: 0,
            buffer: [],
            history: new Set(),
            flush: () => {
                if (this.#state.depth == 0) {
                    const message = `\n${this.#state.buffer.join("\n")}\n`;
                    if (this.#verbose) {
                        inform(message);
                    }
                    else {
                        const hash = cyrb53(message);
                        if (!this.#state.history.has(hash)) {
                            this.#state.history.add(hash);
                            inform(message);
                        }
                    }
                    this.#state.buffer.length = 0;
                }
            }
        };
        /** @internal */
        #threadId = Il2Cpp.mainThread.id;
        /** @internal */
        #verbose = false;
        /** @internal */
        #applier;
        /** @internal */
        #targets = [];
        /** @internal */
        #domain;
        /** @internal */
        #assemblies;
        /** @internal */
        #classes;
        /** @internal */
        #methods;
        /** @internal */
        #assemblyFilter;
        /** @internal */
        #classFilter;
        /** @internal */
        #methodFilter;
        /** @internal */
        #parameterFilter;
        constructor(applier) {
            this.#applier = applier;
        }
        /** */
        thread(thread) {
            this.#threadId = thread.id;
            return this;
        }
        /** Determines whether print duplicate logs. */
        verbose(value) {
            this.#verbose = value;
            return this;
        }
        /** Sets the application domain as the place where to find the target methods. */
        domain() {
            this.#domain = Il2Cpp.domain;
            return this;
        }
        /** Sets the passed `assemblies` as the place where to find the target methods. */
        assemblies(...assemblies) {
            this.#assemblies = assemblies;
            return this;
        }
        /** Sets the passed `classes` as the place where to find the target methods. */
        classes(...classes) {
            this.#classes = classes;
            return this;
        }
        /** Sets the passed `methods` as the target methods. */
        methods(...methods) {
            this.#methods = methods;
            return this;
        }
        /** Filters the assemblies where to find the target methods. */
        filterAssemblies(filter) {
            this.#assemblyFilter = filter;
            return this;
        }
        /** Filters the classes where to find the target methods. */
        filterClasses(filter) {
            this.#classFilter = filter;
            return this;
        }
        /** Filters the target methods. */
        filterMethods(filter) {
            this.#methodFilter = filter;
            return this;
        }
        /** Filters the target methods. */
        filterParameters(filter) {
            this.#parameterFilter = filter;
            return this;
        }
        /** Commits the current changes by finding the target methods. */
        and() {
            const filterMethod = (method) => {
                if (this.#parameterFilter == undefined) {
                    this.#targets.push(method);
                    return;
                }
                for (const parameter of method.parameters) {
                    if (this.#parameterFilter(parameter)) {
                        this.#targets.push(method);
                        break;
                    }
                }
            };
            const filterMethods = (values) => {
                for (const method of values) {
                    filterMethod(method);
                }
            };
            const filterClass = (klass) => {
                if (this.#methodFilter == undefined) {
                    filterMethods(klass.methods);
                    return;
                }
                for (const method of klass.methods) {
                    if (this.#methodFilter(method)) {
                        filterMethod(method);
                    }
                }
            };
            const filterClasses = (values) => {
                for (const klass of values) {
                    filterClass(klass);
                }
            };
            const filterAssembly = (assembly) => {
                if (this.#classFilter == undefined) {
                    filterClasses(assembly.image.classes);
                    return;
                }
                for (const klass of assembly.image.classes) {
                    if (this.#classFilter(klass)) {
                        filterClass(klass);
                    }
                }
            };
            const filterAssemblies = (assemblies) => {
                for (const assembly of assemblies) {
                    filterAssembly(assembly);
                }
            };
            const filterDomain = (domain) => {
                if (this.#assemblyFilter == undefined) {
                    filterAssemblies(domain.assemblies);
                    return;
                }
                for (const assembly of domain.assemblies) {
                    if (this.#assemblyFilter(assembly)) {
                        filterAssembly(assembly);
                    }
                }
            };
            this.#methods
                ? filterMethods(this.#methods)
                : this.#classes
                    ? filterClasses(this.#classes)
                    : this.#assemblies
                        ? filterAssemblies(this.#assemblies)
                        : this.#domain
                            ? filterDomain(this.#domain)
                            : undefined;
            this.#assemblies = undefined;
            this.#classes = undefined;
            this.#methods = undefined;
            this.#assemblyFilter = undefined;
            this.#classFilter = undefined;
            this.#methodFilter = undefined;
            this.#parameterFilter = undefined;
            return this;
        }
        /** Starts tracing. */
        attach() {
            for (const target of this.#targets) {
                if (!target.virtualAddress.isNull()) {
                    try {
                        this.#applier(target, this.#state, this.#threadId);
                    }
                    catch (e) {
                        switch (e.message) {
                            case /unable to intercept function at \w+; please file a bug/.exec(e.message)?.input:
                            case "already replaced this function":
                                break;
                            default:
                                throw e;
                        }
                    }
                }
            }
        }
    }
    Il2Cpp.Tracer = Tracer;
    /** */
    function trace(parameters = false) {
        const applier = () => (method, state, threadId) => {
            const paddedVirtualAddress = method.relativeVirtualAddress.toString(16).padStart(8, "0");
            Interceptor.attach(method.virtualAddress, {
                onEnter() {
                    if (this.threadId == threadId) {
                        // prettier-ignore
                        state.buffer.push(`\x1b[2m0x${paddedVirtualAddress}\x1b[0m ${`│ `.repeat(state.depth++)}┌─\x1b[35m${method.class.type.name}::\x1b[1m${method.name}\x1b[0m\x1b[0m`);
                    }
                },
                onLeave() {
                    if (this.threadId == threadId) {
                        // prettier-ignore
                        state.buffer.push(`\x1b[2m0x${paddedVirtualAddress}\x1b[0m ${`│ `.repeat(--state.depth)}└─\x1b[33m${method.class.type.name}::\x1b[1m${method.name}\x1b[0m\x1b[0m`);
                        state.flush();
                    }
                }
            });
        };
        const applierWithParameters = () => (method, state, threadId) => {
            const paddedVirtualAddress = method.relativeVirtualAddress.toString(16).padStart(8, "0");
            const startIndex = +!method.isStatic | +Il2Cpp.unityVersionIsBelow201830;
            const callback = function (...args) {
                if (this.threadId == threadId) {
                    const thisParameter = method.isStatic ? undefined : new Il2Cpp.Parameter("this", -1, method.class.type);
                    const parameters = thisParameter ? [thisParameter].concat(method.parameters) : method.parameters;
                    // prettier-ignore
                    state.buffer.push(`\x1b[2m0x${paddedVirtualAddress}\x1b[0m ${`│ `.repeat(state.depth++)}┌─\x1b[35m${method.class.type.name}::\x1b[1m${method.name}\x1b[0m\x1b[0m(${parameters.map(e => `\x1b[32m${e.name}\x1b[0m = \x1b[31m${Il2Cpp.fromFridaValue(args[e.position + startIndex], e.type)}\x1b[0m`).join(", ")})`);
                }
                const returnValue = method.nativeFunction(...args);
                if (this.threadId == threadId) {
                    // prettier-ignore
                    state.buffer.push(`\x1b[2m0x${paddedVirtualAddress}\x1b[0m ${`│ `.repeat(--state.depth)}└─\x1b[33m${method.class.type.name}::\x1b[1m${method.name}\x1b[0m\x1b[0m${returnValue == undefined ? "" : ` = \x1b[36m${Il2Cpp.fromFridaValue(returnValue, method.returnType)}`}\x1b[0m`);
                    state.flush();
                }
                return returnValue;
            };
            method.revert();
            const nativeCallback = new NativeCallback(callback, method.returnType.fridaAlias, method.fridaSignature);
            Interceptor.replace(method.virtualAddress, nativeCallback);
        };
        return new Il2Cpp.Tracer(parameters ? applierWithParameters() : applier());
    }
    Il2Cpp.trace = trace;
    /** */
    function backtrace(mode) {
        const methods = Il2Cpp.domain.assemblies
            .flatMap(_ => _.image.classes.flatMap(_ => _.methods.filter(_ => !_.virtualAddress.isNull())))
            .sort((_, __) => _.virtualAddress.compare(__.virtualAddress));
        const searchInsert = (target) => {
            let left = 0;
            let right = methods.length - 1;
            while (left <= right) {
                const pivot = Math.floor((left + right) / 2);
                const comparison = methods[pivot].virtualAddress.compare(target);
                if (comparison == 0) {
                    return methods[pivot];
                }
                else if (comparison > 0) {
                    right = pivot - 1;
                }
                else {
                    left = pivot + 1;
                }
            }
            return methods[right];
        };
        const applier = () => (method, state, threadId) => {
            Interceptor.attach(method.virtualAddress, function () {
                if (this.threadId == threadId) {
                    const handles = globalThis.Thread.backtrace(this.context, mode);
                    handles.unshift(method.virtualAddress);
                    for (const handle of handles) {
                        if (handle.compare(Il2Cpp.module.base) > 0 && handle.compare(Il2Cpp.module.base.add(Il2Cpp.module.size)) < 0) {
                            const method = searchInsert(handle);
                            if (method) {
                                const offset = handle.sub(method.virtualAddress);
                                if (offset.compare(0xfff) < 0) {
                                    // prettier-ignore
                                    state.buffer.push(`\x1b[2m0x${method.relativeVirtualAddress.toString(16).padStart(8, "0")}\x1b[0m\x1b[2m+0x${offset.toString(16).padStart(3, `0`)}\x1b[0m ${method.class.type.name}::\x1b[1m${method.name}\x1b[0m`);
                                }
                            }
                        }
                    }
                    state.flush();
                }
            });
        };
        return new Il2Cpp.Tracer(applier());
    }
    Il2Cpp.backtrace = backtrace;
    /** https://stackoverflow.com/a/52171480/16885569 */
    function cyrb53(str) {
        let h1 = 0xdeadbeef;
        let h2 = 0x41c6ce57;
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
        h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
        h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    }
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class Array extends NativeStruct {
        /** Gets the Il2CppArray struct size, possibly equal to `Process.pointerSize * 4`. */
        static get headerSize() {
            return Il2Cpp.corlib.class("System.Array").instanceSize;
        }
        /** @internal Gets a pointer to the first element of the current array. */
        get elements() {
            // We previosly obtained an array whose content is known by calling
            // 'System.String::Split(NULL)' on a known string. However, that
            // method invocation somehow blows things up in Unity 2018.3.0f1.
            const array = Il2Cpp.string("v").object.method("ToCharArray", 0).invoke();
            // prettier-ignore
            const offset = array.handle.offsetOf(_ => _.readS16() == 118) ??
                raise("couldn't find the elements offset in the native array struct");
            // prettier-ignore
            getter(Il2Cpp.Array.prototype, "elements", function () {
                return new Il2Cpp.Pointer(this.handle.add(offset), this.elementType);
            }, lazy);
            return this.elements;
        }
        /** Gets the size of the object encompassed by the current array. */
        get elementSize() {
            return this.elementType.class.arrayElementSize;
        }
        /** Gets the type of the object encompassed by the current array. */
        get elementType() {
            return this.object.class.type.class.baseType;
        }
        /** Gets the total number of elements in all the dimensions of the current array. */
        get length() {
            return Il2Cpp.api.arrayGetLength(this);
        }
        /** Gets the encompassing object of the current array. */
        get object() {
            return new Il2Cpp.Object(this);
        }
        /** Gets the element at the specified index of the current array. */
        get(index) {
            if (index < 0 || index >= this.length) {
                raise(`cannot get element at index ${index} as the array length is ${this.length}`);
            }
            return this.elements.get(index);
        }
        /** Sets the element at the specified index of the current array. */
        set(index, value) {
            if (index < 0 || index >= this.length) {
                raise(`cannot set element at index ${index} as the array length is ${this.length}`);
            }
            this.elements.set(index, value);
        }
        /** */
        toString() {
            return this.isNull() ? "null" : `[${this.elements.read(this.length, 0)}]`;
        }
        /** Iterable. */
        *[Symbol.iterator]() {
            for (let i = 0; i < this.length; i++) {
                yield this.elements.get(i);
            }
        }
    }
    __decorate([
        lazy
    ], Array.prototype, "elementSize", null);
    __decorate([
        lazy
    ], Array.prototype, "elementType", null);
    __decorate([
        lazy
    ], Array.prototype, "length", null);
    __decorate([
        lazy
    ], Array.prototype, "object", null);
    __decorate([
        lazy
    ], Array, "headerSize", null);
    Il2Cpp.Array = Array;
    /** @internal */
    function array(klass, lengthOrElements) {
        const length = typeof lengthOrElements == "number" ? lengthOrElements : lengthOrElements.length;
        const array = new Il2Cpp.Array(Il2Cpp.api.arrayNew(klass, length));
        if (globalThis.Array.isArray(lengthOrElements)) {
            array.elements.write(lengthOrElements);
        }
        return array;
    }
    Il2Cpp.array = array;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    let Assembly = class Assembly extends NativeStruct {
        /** Gets the image of this assembly. */
        get image() {
            let get = function () {
                return new Il2Cpp.Image(Il2Cpp.api.assemblyGetImage(this));
            };
            try {
                Il2Cpp.api.assemblyGetImage;
            }
            catch (_) {
                get = function () {
                    // We need to get the System.Reflection.Module of the current assembly;
                    // System.Reflection.Assembly::GetModulesInternal, for some reason,
                    // throws a NullReferenceExceptionin Unity 5.3.8f1, so we must rely on
                    // System.Type::get_Module instead.
                    // Now we need to get any System.Type of this assembly.
                    // We cannot use System.Reflection.Assembly::GetTypes because it may
                    // return an empty array; hence we use System.Reflection.Assembly::GetType
                    // to retrieve <Module>, a class/type that seems to be always present
                    // (despite being excluded from System.Reflection.Assembly::GetTypes).
                    return new Il2Cpp.Image(this.object
                        .method("GetType", 1)
                        .invoke(Il2Cpp.string("<Module>"))
                        .method("get_Module")
                        .invoke()
                        .field("_impl").value);
                };
            }
            getter(Il2Cpp.Assembly.prototype, "image", get, lazy);
            return this.image;
        }
        /** Gets the name of this assembly. */
        get name() {
            return this.image.name.replace(".dll", "");
        }
        /** Gets the encompassing object of the current assembly. */
        get object() {
            for (const _ of Il2Cpp.domain.object.method("GetAssemblies", 1).invoke(false)) {
                if (_.field("_mono_assembly").value.equals(this)) {
                    return _;
                }
            }
            raise("couldn't find the object of the native assembly struct");
        }
    };
    __decorate([
        lazy
    ], Assembly.prototype, "name", null);
    __decorate([
        lazy
    ], Assembly.prototype, "object", null);
    Assembly = __decorate([
        recycle
    ], Assembly);
    Il2Cpp.Assembly = Assembly;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    let Class = class Class extends NativeStruct {
        /** Gets the actual size of the instance of the current class. */
        get actualInstanceSize() {
            const SystemString = Il2Cpp.corlib.class("System.String");
            // prettier-ignore
            const offset = SystemString.handle.offsetOf(_ => _.readInt() == SystemString.instanceSize - 2)
                ?? raise("couldn't find the actual instance size offset in the native class struct");
            // prettier-ignore
            getter(Il2Cpp.Class.prototype, "actualInstanceSize", function () {
                return this.handle.add(offset).readS32();
            }, lazy);
            return this.actualInstanceSize;
        }
        /** Gets the array class which encompass the current class. */
        get arrayClass() {
            return new Il2Cpp.Class(Il2Cpp.api.classGetArrayClass(this, 1));
        }
        /** Gets the size of the object encompassed by the current array class. */
        get arrayElementSize() {
            return Il2Cpp.api.classGetArrayElementSize(this);
        }
        /** Gets the name of the assembly in which the current class is defined. */
        get assemblyName() {
            return Il2Cpp.api.classGetAssemblyName(this).readUtf8String().replace(".dll", "");
        }
        /** Gets the class that declares the current nested class. */
        get declaringClass() {
            return new Il2Cpp.Class(Il2Cpp.api.classGetDeclaringType(this)).asNullable();
        }
        /** Gets the encompassed type of this array, reference, pointer or enum type. */
        get baseType() {
            return new Il2Cpp.Type(Il2Cpp.api.classGetBaseType(this)).asNullable();
        }
        /** Gets the class of the object encompassed or referred to by the current array, pointer or reference class. */
        get elementClass() {
            return new Il2Cpp.Class(Il2Cpp.api.classGetElementClass(this)).asNullable();
        }
        /** Gets the fields of the current class. */
        get fields() {
            return readNativeIterator(_ => Il2Cpp.api.classGetFields(this, _)).map(_ => new Il2Cpp.Field(_));
        }
        /** Gets the flags of the current class. */
        get flags() {
            return Il2Cpp.api.classGetFlags(this);
        }
        /** Gets the full name (namespace + name) of the current class. */
        get fullName() {
            return this.namespace ? `${this.namespace}.${this.name}` : this.name;
        }
        /** Gets the generics parameters of this generic class. */
        get generics() {
            if (!this.isGeneric && !this.isInflated) {
                return [];
            }
            const types = this.type.object.method("GetGenericArguments").invoke();
            return globalThis.Array.from(types).map(_ => new Il2Cpp.Class(Il2Cpp.api.classFromObject(_)));
        }
        /** Determines whether the GC has tracking references to the current class instances. */
        get hasReferences() {
            return !!Il2Cpp.api.classHasReferences(this);
        }
        /** Determines whether ther current class has a valid static constructor. */
        get hasStaticConstructor() {
            const staticConstructor = this.tryMethod(".cctor");
            return staticConstructor != null && !staticConstructor.virtualAddress.isNull();
        }
        /** Gets the image in which the current class is defined. */
        get image() {
            return new Il2Cpp.Image(Il2Cpp.api.classGetImage(this));
        }
        /** Gets the size of the instance of the current class. */
        get instanceSize() {
            return Il2Cpp.api.classGetInstanceSize(this);
        }
        /** Determines whether the current class is abstract. */
        get isAbstract() {
            return !!Il2Cpp.api.classIsAbstract(this);
        }
        /** Determines whether the current class is blittable. */
        get isBlittable() {
            return !!Il2Cpp.api.classIsBlittable(this);
        }
        /** Determines whether the current class is an enumeration. */
        get isEnum() {
            return !!Il2Cpp.api.classIsEnum(this);
        }
        /** Determines whether the current class is a generic one. */
        get isGeneric() {
            return !!Il2Cpp.api.classIsGeneric(this);
        }
        /** Determines whether the current class is inflated. */
        get isInflated() {
            return !!Il2Cpp.api.classIsInflated(this);
        }
        /** Determines whether the current class is an interface. */
        get isInterface() {
            return !!Il2Cpp.api.classIsInterface(this);
        }
        /** Determines whether the current class is a struct. */
        get isStruct() {
            return this.isValueType && !this.isEnum;
        }
        /** Determines whether the current class is a value type. */
        get isValueType() {
            return !!Il2Cpp.api.classIsValueType(this);
        }
        /** Gets the interfaces implemented or inherited by the current class. */
        get interfaces() {
            return readNativeIterator(_ => Il2Cpp.api.classGetInterfaces(this, _)).map(_ => new Il2Cpp.Class(_));
        }
        /** Gets the methods implemented by the current class. */
        get methods() {
            return readNativeIterator(_ => Il2Cpp.api.classGetMethods(this, _)).map(_ => new Il2Cpp.Method(_));
        }
        /** Gets the name of the current class. */
        get name() {
            return Il2Cpp.api.classGetName(this).readUtf8String();
        }
        /** Gets the namespace of the current class. */
        get namespace() {
            return Il2Cpp.api.classGetNamespace(this).readUtf8String();
        }
        /** Gets the classes nested inside the current class. */
        get nestedClasses() {
            return readNativeIterator(_ => Il2Cpp.api.classGetNestedClasses(this, _)).map(_ => new Il2Cpp.Class(_));
        }
        /** Gets the class from which the current class directly inherits. */
        get parent() {
            return new Il2Cpp.Class(Il2Cpp.api.classGetParent(this)).asNullable();
        }
        /** Gets the rank (number of dimensions) of the current array class. */
        get rank() {
            let rank = 0;
            const name = this.name;
            for (let i = this.name.length - 1; i > 0; i--) {
                const c = name[i];
                if (c == "]")
                    rank++;
                else if (c == "[" || rank == 0)
                    break;
                else if (c == ",")
                    rank++;
                else
                    break;
            }
            return rank;
        }
        /** Gets a pointer to the static fields of the current class. */
        get staticFieldsData() {
            return Il2Cpp.api.classGetStaticFieldData(this);
        }
        /** Gets the size of the instance - as a value type - of the current class. */
        get valueTypeSize() {
            return Il2Cpp.api.classGetValueTypeSize(this, NULL);
        }
        /** Gets the type of the current class. */
        get type() {
            return new Il2Cpp.Type(Il2Cpp.api.classGetType(this));
        }
        /** Allocates a new object of the current class. */
        alloc() {
            return new Il2Cpp.Object(Il2Cpp.api.objectNew(this));
        }
        /** Gets the field identified by the given name. */
        field(name) {
            return this.tryField(name) ?? raise(`couldn't find field ${name} in class ${this.type.name}`);
        }
        /** Builds a generic instance of the current generic class. */
        inflate(...classes) {
            if (!this.isGeneric) {
                raise(`cannot inflate class ${this.type.name} as it has no generic parameters`);
            }
            if (this.generics.length != classes.length) {
                raise(`cannot inflate class ${this.type.name} as it needs ${this.generics.length} generic parameter(s), not ${classes.length}`);
            }
            const types = classes.map(_ => _.type.object);
            const typeArray = Il2Cpp.array(Il2Cpp.corlib.class("System.Type"), types);
            const inflatedType = this.type.object.method("MakeGenericType", 1).invoke(typeArray);
            return new Il2Cpp.Class(Il2Cpp.api.classFromObject(inflatedType));
        }
        /** Calls the static constructor of the current class. */
        initialize() {
            Il2Cpp.api.classInitialize(this);
            return this;
        }
        /** Determines whether an instance of `other` class can be assigned to a variable of the current type. */
        isAssignableFrom(other) {
            return !!Il2Cpp.api.classIsAssignableFrom(this, other);
        }
        /** Determines whether the current class derives from `other` class. */
        isSubclassOf(other, checkInterfaces) {
            return !!Il2Cpp.api.classIsSubclassOf(this, other, +checkInterfaces);
        }
        /** Gets the method identified by the given name and parameter count. */
        method(name, parameterCount = -1) {
            return this.tryMethod(name, parameterCount) ?? raise(`couldn't find method ${name} in class ${this.type.name}`);
        }
        /** Gets the nested class with the given name. */
        nested(name) {
            return this.tryNested(name) ?? raise(`couldn't find nested class ${name} in class ${this.type.name}`);
        }
        /** Allocates a new object of the current class and calls its default constructor. */
        new() {
            const object = this.alloc();
            const exceptionArray = Memory.alloc(Process.pointerSize);
            Il2Cpp.api.objectInitialize(object, exceptionArray);
            const exception = exceptionArray.readPointer();
            if (!exception.isNull()) {
                raise(new Il2Cpp.Object(exception).toString());
            }
            return object;
        }
        /** Gets the field with the given name. */
        tryField(name) {
            return new Il2Cpp.Field(Il2Cpp.api.classGetFieldFromName(this, Memory.allocUtf8String(name))).asNullable();
        }
        /** Gets the method with the given name and parameter count. */
        tryMethod(name, parameterCount = -1) {
            return new Il2Cpp.Method(Il2Cpp.api.classGetMethodFromName(this, Memory.allocUtf8String(name), parameterCount)).asNullable();
        }
        /** Gets the nested class with the given name. */
        tryNested(name) {
            return this.nestedClasses.find(_ => _.name == name);
        }
        /** */
        toString() {
            const inherited = [this.parent].concat(this.interfaces);
            return `\
// ${this.assemblyName}
${this.isEnum ? `enum` : this.isStruct ? `struct` : this.isInterface ? `interface` : `class`} \
${this.type.name}\
${inherited ? ` : ${inherited.map(_ => _?.type.name).join(`, `)}` : ``}
{
    ${this.fields.join(`\n    `)}
    ${this.methods.join(`\n    `)}
}`;
        }
        /** Executes a callback for every defined class. */
        static enumerate(block) {
            const callback = new NativeCallback(_ => block(new Il2Cpp.Class(_)), "void", ["pointer", "pointer"]);
            return Il2Cpp.api.classForEach(callback, NULL);
        }
    };
    __decorate([
        lazy
    ], Class.prototype, "arrayClass", null);
    __decorate([
        lazy
    ], Class.prototype, "arrayElementSize", null);
    __decorate([
        lazy
    ], Class.prototype, "assemblyName", null);
    __decorate([
        lazy
    ], Class.prototype, "declaringClass", null);
    __decorate([
        lazy
    ], Class.prototype, "baseType", null);
    __decorate([
        lazy
    ], Class.prototype, "elementClass", null);
    __decorate([
        lazy
    ], Class.prototype, "fields", null);
    __decorate([
        lazy
    ], Class.prototype, "flags", null);
    __decorate([
        lazy
    ], Class.prototype, "fullName", null);
    __decorate([
        lazy
    ], Class.prototype, "generics", null);
    __decorate([
        lazy
    ], Class.prototype, "hasReferences", null);
    __decorate([
        lazy
    ], Class.prototype, "hasStaticConstructor", null);
    __decorate([
        lazy
    ], Class.prototype, "image", null);
    __decorate([
        lazy
    ], Class.prototype, "instanceSize", null);
    __decorate([
        lazy
    ], Class.prototype, "isAbstract", null);
    __decorate([
        lazy
    ], Class.prototype, "isBlittable", null);
    __decorate([
        lazy
    ], Class.prototype, "isEnum", null);
    __decorate([
        lazy
    ], Class.prototype, "isGeneric", null);
    __decorate([
        lazy
    ], Class.prototype, "isInflated", null);
    __decorate([
        lazy
    ], Class.prototype, "isInterface", null);
    __decorate([
        lazy
    ], Class.prototype, "isValueType", null);
    __decorate([
        lazy
    ], Class.prototype, "interfaces", null);
    __decorate([
        lazy
    ], Class.prototype, "methods", null);
    __decorate([
        lazy
    ], Class.prototype, "name", null);
    __decorate([
        lazy
    ], Class.prototype, "namespace", null);
    __decorate([
        lazy
    ], Class.prototype, "nestedClasses", null);
    __decorate([
        lazy
    ], Class.prototype, "parent", null);
    __decorate([
        lazy
    ], Class.prototype, "rank", null);
    __decorate([
        lazy
    ], Class.prototype, "staticFieldsData", null);
    __decorate([
        lazy
    ], Class.prototype, "valueTypeSize", null);
    __decorate([
        lazy
    ], Class.prototype, "type", null);
    Class = __decorate([
        recycle
    ], Class);
    Il2Cpp.Class = Class;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    /** Creates a delegate object of the given delegate class. */
    function delegate(klass, block) {
        const SystemDelegate = Il2Cpp.corlib.class("System.Delegate");
        const SystemMulticastDelegate = Il2Cpp.corlib.class("System.MulticastDelegate");
        if (!SystemDelegate.isAssignableFrom(klass)) {
            raise(`cannot create a delegate for ${klass.type.name} as it's a non-delegate class`);
        }
        if (klass.equals(SystemDelegate) || klass.equals(SystemMulticastDelegate)) {
            raise(`cannot create a delegate for neither ${SystemDelegate.type.name} nor ${SystemMulticastDelegate.type.name}, use a subclass instead`);
        }
        const delegate = klass.alloc();
        const key = delegate.handle.toString();
        const Invoke = delegate.tryMethod("Invoke") ?? raise(`cannot create a delegate for ${klass.type.name}, there is no Invoke method`);
        delegate.method(".ctor").invoke(delegate, Invoke.handle);
        const callback = Invoke.wrap(block);
        delegate.field("method_ptr").value = callback;
        delegate.field("invoke_impl").value = callback;
        Il2Cpp._callbacksToKeepAlive[key] = callback;
        return delegate;
    }
    Il2Cpp.delegate = delegate;
    /** @internal Used to prevent eager garbage collection against NativeCallbacks. */
    Il2Cpp._callbacksToKeepAlive = {};
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    let Domain = class Domain extends NativeStruct {
        /** Gets the assemblies that have been loaded into the execution context of the application domain. */
        get assemblies() {
            let handles = readNativeList(_ => Il2Cpp.api.domainGetAssemblies(this, _));
            if (handles.length == 0) {
                const assemblyObjects = this.object.method("GetAssemblies").overload().invoke();
                handles = globalThis.Array.from(assemblyObjects).map(_ => _.field("_mono_assembly").value);
            }
            return handles.map(_ => new Il2Cpp.Assembly(_));
        }
        /** Gets the encompassing object of the application domain. */
        get object() {
            return Il2Cpp.corlib.class("System.AppDomain").method("get_CurrentDomain").invoke();
        }
        /** Opens and loads the assembly with the given name. */
        assembly(name) {
            return this.tryAssembly(name) ?? raise(`couldn't find assembly ${name}`);
        }
        /** Attached a new thread to the application domain. */
        attach() {
            return new Il2Cpp.Thread(Il2Cpp.api.threadAttach(this));
        }
        /** Opens and loads the assembly with the given name. */
        tryAssembly(name) {
            return new Il2Cpp.Assembly(Il2Cpp.api.domainGetAssemblyFromName(this, Memory.allocUtf8String(name))).asNullable();
        }
    };
    __decorate([
        lazy
    ], Domain.prototype, "assemblies", null);
    __decorate([
        lazy
    ], Domain.prototype, "object", null);
    Domain = __decorate([
        recycle
    ], Domain);
    Il2Cpp.Domain = Domain;
    // prettier-ignore
    getter(Il2Cpp, "domain", () => {
        return new Il2Cpp.Domain(Il2Cpp.api.domainGet());
    }, lazy);
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class Field extends NativeStruct {
        /** Gets the class in which this field is defined. */
        get class() {
            return new Il2Cpp.Class(Il2Cpp.api.fieldGetClass(this));
        }
        /** Gets the flags of the current field. */
        get flags() {
            return Il2Cpp.api.fieldGetFlags(this);
        }
        /** Determines whether this field value is known at compile time. */
        get isLiteral() {
            return (this.flags & 64 /* Il2Cpp.Field.Attributes.Literal */) != 0;
        }
        /** Determines whether this field is static. */
        get isStatic() {
            return (this.flags & 16 /* Il2Cpp.Field.Attributes.Static */) != 0;
        }
        /** Determines whether this field is thread static. */
        get isThreadStatic() {
            const offset = Il2Cpp.corlib.class("System.AppDomain").field("type_resolve_in_progress").offset;
            // prettier-ignore
            getter(Il2Cpp.Field.prototype, "isThreadStatic", function () {
                return this.offset == offset;
            }, lazy);
            return this.isThreadStatic;
        }
        /** Gets the access modifier of this field. */
        get modifier() {
            switch (this.flags & 7 /* Il2Cpp.Field.Attributes.FieldAccessMask */) {
                case 1 /* Il2Cpp.Field.Attributes.Private */:
                    return "private";
                case 2 /* Il2Cpp.Field.Attributes.FamilyAndAssembly */:
                    return "private protected";
                case 3 /* Il2Cpp.Field.Attributes.Assembly */:
                    return "internal";
                case 4 /* Il2Cpp.Field.Attributes.Family */:
                    return "protected";
                case 5 /* Il2Cpp.Field.Attributes.FamilyOrAssembly */:
                    return "protected internal";
                case 6 /* Il2Cpp.Field.Attributes.Public */:
                    return "public";
            }
        }
        /** Gets the name of this field. */
        get name() {
            return Il2Cpp.api.fieldGetName(this).readUtf8String();
        }
        /** Gets the offset of this field, calculated as the difference with its owner virtual address. */
        get offset() {
            return Il2Cpp.api.fieldGetOffset(this);
        }
        /** Gets the type of this field. */
        get type() {
            return new Il2Cpp.Type(Il2Cpp.api.fieldGetType(this));
        }
        /** Gets the value of this field. */
        get value() {
            if (!this.isStatic) {
                raise(`cannot access instance field ${this.class.type.name}::${this.name} from a class, use an object instead`);
            }
            const handle = Memory.alloc(Process.pointerSize);
            Il2Cpp.api.fieldGetStaticValue(this.handle, handle);
            return Il2Cpp.read(handle, this.type);
        }
        /** Sets the value of this field. Thread static or literal values cannot be altered yet. */
        set value(value) {
            if (!this.isStatic) {
                raise(`cannot access instance field ${this.class.type.name}::${this.name} from a class, use an object instead`);
            }
            if (this.isThreadStatic || this.isLiteral) {
                raise(`cannot write the value of field ${this.name} as it's thread static or literal`);
            }
            const handle = 
            // pointer-like values should be passed as-is, but boxed
            // value types (primitives included) must be unboxed first
            value instanceof Il2Cpp.Object && this.type.class.isValueType
                ? value.unbox()
                : value instanceof NativeStruct
                    ? value.handle
                    : value instanceof NativePointer
                        ? value
                        : Il2Cpp.write(Memory.alloc(this.type.class.valueTypeSize), value, this.type);
            Il2Cpp.api.fieldSetStaticValue(this.handle, handle);
        }
        /** */
        toString() {
            return `\
${this.isThreadStatic ? `[ThreadStatic] ` : ``}\
${this.isStatic ? `static ` : ``}\
${this.type.name} \
${this.name}\
${this.isLiteral ? ` = ${this.type.class.isEnum ? Il2Cpp.read(this.value.handle, this.type.class.baseType) : this.value}` : ``};\
${this.isThreadStatic || this.isLiteral ? `` : ` // 0x${this.offset.toString(16)}`}`;
        }
        /** @internal */
        withHolder(instance) {
            if (this.isStatic) {
                raise(`cannot access static field ${this.class.type.name}::${this.name} from an object, use a class instead`);
            }
            const valueHandle = instance.handle.add(this.offset - (instance instanceof Il2Cpp.ValueType ? Il2Cpp.Object.headerSize : 0));
            return new Proxy(this, {
                get(target, property) {
                    if (property == "value") {
                        return Il2Cpp.read(valueHandle, target.type);
                    }
                    return Reflect.get(target, property);
                },
                set(target, property, value) {
                    if (property == "value") {
                        Il2Cpp.write(valueHandle, value, target.type);
                        return true;
                    }
                    return Reflect.set(target, property, value);
                }
            });
        }
    }
    __decorate([
        lazy
    ], Field.prototype, "class", null);
    __decorate([
        lazy
    ], Field.prototype, "flags", null);
    __decorate([
        lazy
    ], Field.prototype, "isLiteral", null);
    __decorate([
        lazy
    ], Field.prototype, "isStatic", null);
    __decorate([
        lazy
    ], Field.prototype, "isThreadStatic", null);
    __decorate([
        lazy
    ], Field.prototype, "modifier", null);
    __decorate([
        lazy
    ], Field.prototype, "name", null);
    __decorate([
        lazy
    ], Field.prototype, "offset", null);
    __decorate([
        lazy
    ], Field.prototype, "type", null);
    Il2Cpp.Field = Field;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class GCHandle {
        handle;
        /** @internal */
        constructor(handle) {
            this.handle = handle;
        }
        /** Gets the object associated to this handle. */
        get target() {
            return new Il2Cpp.Object(Il2Cpp.api.gcHandleGetTarget(this.handle)).asNullable();
        }
        /** Frees this handle. */
        free() {
            return Il2Cpp.api.gcHandleFree(this.handle);
        }
    }
    Il2Cpp.GCHandle = GCHandle;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    let Image = class Image extends NativeStruct {
        /** Gets the assembly in which the current image is defined. */
        get assembly() {
            return new Il2Cpp.Assembly(Il2Cpp.api.imageGetAssembly(this));
        }
        /** Gets the amount of classes defined in this image. */
        get classCount() {
            if (Il2Cpp.unityVersionIsBelow201830) {
                return this.classes.length;
            }
            else {
                return Il2Cpp.api.imageGetClassCount(this);
            }
        }
        /** Gets the classes defined in this image. */
        get classes() {
            if (Il2Cpp.unityVersionIsBelow201830) {
                const types = this.assembly.object.method("GetTypes").invoke(false);
                // In Unity 5.3.8f1, getting System.Reflection.Emit.OpCodes type name
                // without iterating all the classes first somehow blows things up at
                // app startup, hence the `Array.from`.
                const classes = globalThis.Array.from(types, _ => new Il2Cpp.Class(Il2Cpp.api.classFromObject(_)));
                classes.unshift(this.class("<Module>"));
                return classes;
            }
            else {
                return globalThis.Array.from(globalThis.Array(this.classCount), (_, i) => new Il2Cpp.Class(Il2Cpp.api.imageGetClass(this, i)));
            }
        }
        /** Gets the name of this image. */
        get name() {
            return Il2Cpp.api.imageGetName(this).readUtf8String();
        }
        /** Gets the class with the specified name defined in this image. */
        class(name) {
            return this.tryClass(name) ?? raise(`couldn't find class ${name} in assembly ${this.name}`);
        }
        /** Gets the class with the specified name defined in this image. */
        tryClass(name) {
            const dotIndex = name.lastIndexOf(".");
            const classNamespace = Memory.allocUtf8String(dotIndex == -1 ? "" : name.slice(0, dotIndex));
            const className = Memory.allocUtf8String(name.slice(dotIndex + 1));
            return new Il2Cpp.Class(Il2Cpp.api.classFromName(this, classNamespace, className)).asNullable();
        }
    };
    __decorate([
        lazy
    ], Image.prototype, "assembly", null);
    __decorate([
        lazy
    ], Image.prototype, "classCount", null);
    __decorate([
        lazy
    ], Image.prototype, "classes", null);
    __decorate([
        lazy
    ], Image.prototype, "name", null);
    Image = __decorate([
        recycle
    ], Image);
    Il2Cpp.Image = Image;
    // prettier-ignore
    getter(Il2Cpp, "corlib", () => {
        return new Il2Cpp.Image(Il2Cpp.api.getCorlib());
    }, lazy);
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class MemorySnapshot extends NativeStruct {
        /** Captures a memory snapshot. */
        static capture() {
            return new Il2Cpp.MemorySnapshot();
        }
        /** Creates a memory snapshot with the given handle. */
        constructor(handle = Il2Cpp.api.memorySnapshotCapture()) {
            super(handle);
        }
        /** Gets any initialized class. */
        get classes() {
            return readNativeIterator(_ => Il2Cpp.api.memorySnapshotGetClasses(this, _)).map(_ => new Il2Cpp.Class(_));
        }
        /** Gets the objects tracked by this memory snapshot. */
        get objects() {
            // prettier-ignore
            return readNativeList(_ => Il2Cpp.api.memorySnapshotGetObjects(this, _)).filter(_ => !_.isNull()).map(_ => new Il2Cpp.Object(_));
        }
        /** Frees this memory snapshot. */
        free() {
            Il2Cpp.api.memorySnapshotFree(this);
        }
    }
    __decorate([
        lazy
    ], MemorySnapshot.prototype, "classes", null);
    __decorate([
        lazy
    ], MemorySnapshot.prototype, "objects", null);
    Il2Cpp.MemorySnapshot = MemorySnapshot;
    /** */
    function memorySnapshot(block) {
        const memorySnapshot = Il2Cpp.MemorySnapshot.capture();
        const result = block(memorySnapshot);
        memorySnapshot.free();
        return result;
    }
    Il2Cpp.memorySnapshot = memorySnapshot;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class Method extends NativeStruct {
        /** Gets the class in which this method is defined. */
        get class() {
            return new Il2Cpp.Class(Il2Cpp.api.methodGetClass(this));
        }
        /** Gets the flags of the current method. */
        get flags() {
            return Il2Cpp.api.methodGetFlags(this, NULL);
        }
        /** Gets the implementation flags of the current method. */
        get implementationFlags() {
            const implementationFlagsPointer = Memory.alloc(Process.pointerSize);
            Il2Cpp.api.methodGetFlags(this, implementationFlagsPointer);
            return implementationFlagsPointer.readU32();
        }
        /** */
        get fridaSignature() {
            const types = [];
            for (const parameter of this.parameters) {
                types.push(parameter.type.fridaAlias);
            }
            if (!this.isStatic || Il2Cpp.unityVersionIsBelow201830) {
                types.unshift("pointer");
            }
            if (this.isInflated) {
                types.push("pointer");
            }
            return types;
        }
        /** Gets the generic parameters of this generic method. */
        get generics() {
            if (!this.isGeneric && !this.isInflated) {
                return [];
            }
            const types = this.object.method("GetGenericArguments").invoke();
            return globalThis.Array.from(types).map(_ => new Il2Cpp.Class(Il2Cpp.api.classFromObject(_)));
        }
        /** Determines whether this method is external. */
        get isExternal() {
            return (this.implementationFlags & 4096 /* Il2Cpp.Method.ImplementationAttribute.InternalCall */) != 0;
        }
        /** Determines whether this method is generic. */
        get isGeneric() {
            return !!Il2Cpp.api.methodIsGeneric(this);
        }
        /** Determines whether this method is inflated (generic with a concrete type parameter). */
        get isInflated() {
            return !!Il2Cpp.api.methodIsInflated(this);
        }
        /** Determines whether this method is static. */
        get isStatic() {
            return !Il2Cpp.api.methodIsInstance(this);
        }
        /** Determines whether this method is synchronized. */
        get isSynchronized() {
            return (this.implementationFlags & 32 /* Il2Cpp.Method.ImplementationAttribute.Synchronized */) != 0;
        }
        /** Gets the access modifier of this method. */
        get modifier() {
            switch (this.flags & 7 /* Il2Cpp.Method.Attributes.MemberAccessMask */) {
                case 1 /* Il2Cpp.Method.Attributes.Private */:
                    return "private";
                case 2 /* Il2Cpp.Method.Attributes.FamilyAndAssembly */:
                    return "private protected";
                case 3 /* Il2Cpp.Method.Attributes.Assembly */:
                    return "internal";
                case 4 /* Il2Cpp.Method.Attributes.Family */:
                    return "protected";
                case 5 /* Il2Cpp.Method.Attributes.FamilyOrAssembly */:
                    return "protected internal";
                case 6 /* Il2Cpp.Method.Attributes.Public */:
                    return "public";
            }
        }
        /** Gets the name of this method. */
        get name() {
            return Il2Cpp.api.methodGetName(this).readUtf8String();
        }
        /** @internal */
        get nativeFunction() {
            return new NativeFunction(this.virtualAddress, this.returnType.fridaAlias, this.fridaSignature);
        }
        /** Gets the encompassing object of the current method. */
        get object() {
            return new Il2Cpp.Object(Il2Cpp.api.methodGetObject(this, NULL));
        }
        /** Gets the amount of parameters of this method. */
        get parameterCount() {
            return Il2Cpp.api.methodGetParameterCount(this);
        }
        /** Gets the parameters of this method. */
        get parameters() {
            return globalThis.Array.from(globalThis.Array(this.parameterCount), (_, i) => {
                const parameterName = Il2Cpp.api.methodGetParameterName(this, i).readUtf8String();
                const parameterType = Il2Cpp.api.methodGetParameterType(this, i);
                return new Il2Cpp.Parameter(parameterName, i, new Il2Cpp.Type(parameterType));
            });
        }
        /** Gets the relative virtual address (RVA) of this method. */
        get relativeVirtualAddress() {
            return this.virtualAddress.sub(Il2Cpp.module.base);
        }
        /** Gets the return type of this method. */
        get returnType() {
            return new Il2Cpp.Type(Il2Cpp.api.methodGetReturnType(this));
        }
        /** Gets the virtual address (VA) of this method. */
        get virtualAddress() {
            const FilterTypeName = Il2Cpp.corlib.class("System.Reflection.Module").initialize().field("FilterTypeName").value;
            const FilterTypeNameMethodPointer = FilterTypeName.field("method_ptr").value;
            const FilterTypeNameMethod = FilterTypeName.field("method").value;
            // prettier-ignore
            const offset = FilterTypeNameMethod.offsetOf(_ => _.readPointer().equals(FilterTypeNameMethodPointer))
                ?? raise("couldn't find the virtual address offset in the native method struct");
            // prettier-ignore
            getter(Il2Cpp.Method.prototype, "virtualAddress", function () {
                return this.handle.add(offset).readPointer();
            }, lazy);
            // In Unity 2017.4.40f1 (don't know about others),
            // `Il2Cpp.Class::initialize` somehow triggers a nasty bug during
            // early instrumentation, so that we aren't able to obtain the
            // offset to get the virtual address of a method when the script
            // is reloaded. A workaround consists in manually re-invoking the
            // static constructor.
            Il2Cpp.corlib.class("System.Reflection.Module").method(".cctor").invoke();
            return this.virtualAddress;
        }
        /** Replaces the body of this method. */
        set implementation(block) {
            try {
                Interceptor.replace(this.virtualAddress, this.wrap(block));
            }
            catch (e) {
                switch (e.message) {
                    case "access violation accessing 0x0":
                        raise(`couldn't set implementation for method ${this.name} as it has a NULL virtual address`);
                    case /unable to intercept function at \w+; please file a bug/.exec(e.message)?.input:
                        warn(`couldn't set implementation for method ${this.name} as it may be a thunk`);
                        break;
                    case "already replaced this function":
                        warn(`couldn't set implementation for method ${this.name} as it has already been replaced by a thunk`);
                        break;
                    default:
                        throw e;
                }
            }
        }
        /** Creates a generic instance of the current generic method. */
        inflate(...classes) {
            if (!this.isGeneric) {
                raise(`cannot inflate method ${this.name} as it has no generic parameters`);
            }
            if (this.generics.length != classes.length) {
                raise(`cannot inflate method ${this.name} as it needs ${this.generics.length} generic parameter(s), not ${classes.length}`);
            }
            const types = classes.map(_ => _.type.object);
            const typeArray = Il2Cpp.array(Il2Cpp.corlib.class("System.Type"), types);
            const inflatedMethodObject = this.object.method("MakeGenericMethod", 1).invoke(typeArray);
            return new Il2Cpp.Method(inflatedMethodObject.field("mhandle").value);
        }
        /** Invokes this method. */
        invoke(...parameters) {
            if (!this.isStatic) {
                raise(`cannot invoke non-static method ${this.name} as it must be invoked throught a Il2Cpp.Object, not a Il2Cpp.Class`);
            }
            return this.invokeRaw(NULL, ...parameters);
        }
        /** @internal */
        invokeRaw(instance, ...parameters) {
            const allocatedParameters = parameters.map(Il2Cpp.toFridaValue);
            if (!this.isStatic || Il2Cpp.unityVersionIsBelow201830) {
                allocatedParameters.unshift(instance);
            }
            if (this.isInflated) {
                allocatedParameters.push(this.handle);
            }
            try {
                const returnValue = this.nativeFunction(...allocatedParameters);
                return Il2Cpp.fromFridaValue(returnValue, this.returnType);
            }
            catch (e) {
                if (e == null) {
                    raise("an unexpected native invocation exception occurred, this is due to parameter types mismatch");
                }
                switch (e.message) {
                    case "bad argument count":
                        raise(`couldn't invoke method ${this.name} as it needs ${this.parameterCount} parameter(s), not ${parameters.length}`);
                    case "expected a pointer":
                    case "expected number":
                    case "expected array with fields":
                        raise(`couldn't invoke method ${this.name} using incorrect parameter types`);
                }
                throw e;
            }
        }
        /** Gets the overloaded method with the given parameter types. */
        overload(...parameterTypes) {
            const result = this.tryOverload(...parameterTypes);
            if (result != undefined)
                return result;
            raise(`couldn't find overloaded method ${this.name}(${parameterTypes})`);
        }
        /** Gets the parameter with the given name. */
        parameter(name) {
            return this.tryParameter(name) ?? raise(`couldn't find parameter ${name} in method ${this.name}`);
        }
        /** Restore the original method implementation. */
        revert() {
            Interceptor.revert(this.virtualAddress);
            Interceptor.flush();
        }
        /** Gets the overloaded method with the given parameter types. */
        tryOverload(...parameterTypes) {
            let klass = this.class;
            while (klass) {
                const method = klass.methods.find(method => {
                    return (method.name == this.name &&
                        method.parameterCount == parameterTypes.length &&
                        method.parameters.every((e, i) => e.type.name == parameterTypes[i]));
                });
                if (method) {
                    return method;
                }
                klass = klass.parent;
            }
            return undefined;
        }
        /** Gets the parameter with the given name. */
        tryParameter(name) {
            return this.parameters.find(_ => _.name == name);
        }
        /** */
        toString() {
            return `\
${this.isStatic ? `static ` : ``}\
${this.returnType.name} \
${this.name}\
(${this.parameters.join(`, `)});\
${this.virtualAddress.isNull() ? `` : ` // 0x${this.relativeVirtualAddress.toString(16).padStart(8, `0`)}`}`;
        }
        /** @internal */
        withHolder(instance) {
            if (this.isStatic) {
                raise(`cannot access static method ${this.class.type.name}::${this.name} from an object, use a class instead`);
            }
            return new Proxy(this, {
                get(target, property) {
                    switch (property) {
                        case "invoke":
                            // In Unity 5.3.5f1 and >= 2021.2.0f1, value types
                            // methods may assume their `this` parameter is a
                            // pointer to raw data (that is how value types are
                            // layed out in memory) instead of a pointer to an
                            // object (that is object header + raw data).
                            // In any case, they also don't use whatever there
                            // is in the object header, so we can safely "skip"
                            // the object header by adding the object header
                            // size to the object (a boxed value type) handle.
                            const handle = instance instanceof Il2Cpp.ValueType
                                ? target.class.isValueType
                                    ? instance.handle.add(maybeObjectHeaderSize() - Il2Cpp.Object.headerSize)
                                    : raise(`cannot invoke method ${target.class.type.name}::${target.name} against a value type, you must box it first`)
                                : target.class.isValueType
                                    ? instance.handle.add(maybeObjectHeaderSize())
                                    : instance.handle;
                            return target.invokeRaw.bind(target, handle);
                        case "inflate":
                        case "overload":
                        case "tryOverload":
                            return function (...args) {
                                return target[property](...args)?.withHolder(instance);
                            };
                    }
                    return Reflect.get(target, property);
                }
            });
        }
        /** @internal */
        wrap(block) {
            const startIndex = +!this.isStatic | +Il2Cpp.unityVersionIsBelow201830;
            return new NativeCallback((...args) => {
                const thisObject = this.isStatic
                    ? this.class
                    : this.class.isValueType
                        ? new Il2Cpp.ValueType(args[0].add(Il2Cpp.Object.headerSize - maybeObjectHeaderSize()), this.class.type)
                        : new Il2Cpp.Object(args[0]);
                const parameters = this.parameters.map((_, i) => Il2Cpp.fromFridaValue(args[i + startIndex], _.type));
                const result = block.call(thisObject, ...parameters);
                return Il2Cpp.toFridaValue(result);
            }, this.returnType.fridaAlias, this.fridaSignature);
        }
    }
    __decorate([
        lazy
    ], Method.prototype, "class", null);
    __decorate([
        lazy
    ], Method.prototype, "flags", null);
    __decorate([
        lazy
    ], Method.prototype, "implementationFlags", null);
    __decorate([
        lazy
    ], Method.prototype, "fridaSignature", null);
    __decorate([
        lazy
    ], Method.prototype, "generics", null);
    __decorate([
        lazy
    ], Method.prototype, "isExternal", null);
    __decorate([
        lazy
    ], Method.prototype, "isGeneric", null);
    __decorate([
        lazy
    ], Method.prototype, "isInflated", null);
    __decorate([
        lazy
    ], Method.prototype, "isStatic", null);
    __decorate([
        lazy
    ], Method.prototype, "isSynchronized", null);
    __decorate([
        lazy
    ], Method.prototype, "modifier", null);
    __decorate([
        lazy
    ], Method.prototype, "name", null);
    __decorate([
        lazy
    ], Method.prototype, "nativeFunction", null);
    __decorate([
        lazy
    ], Method.prototype, "object", null);
    __decorate([
        lazy
    ], Method.prototype, "parameterCount", null);
    __decorate([
        lazy
    ], Method.prototype, "parameters", null);
    __decorate([
        lazy
    ], Method.prototype, "relativeVirtualAddress", null);
    __decorate([
        lazy
    ], Method.prototype, "returnType", null);
    Il2Cpp.Method = Method;
    let maybeObjectHeaderSize = () => {
        const struct = Il2Cpp.corlib.class("System.RuntimeTypeHandle").initialize().alloc();
        struct.method(".ctor").invokeRaw(struct, ptr(0xdeadbeef));
        // Here we check where the sentinel value is
        // if it's not where it is supposed to be, it means struct methods
        // assume they are receiving value types (that is a pointer to raw data)
        // hence, we must "skip" the object header when invoking such methods.
        const offset = struct.field("value").value.equals(ptr(0xdeadbeef)) ? 0 : Il2Cpp.Object.headerSize;
        return (maybeObjectHeaderSize = () => offset)();
    };
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class Object extends NativeStruct {
        /** Gets the Il2CppObject struct size, possibly equal to `Process.pointerSize * 2`. */
        static get headerSize() {
            return Il2Cpp.corlib.class("System.Object").instanceSize;
        }
        /** Gets the class of this object. */
        get class() {
            return new Il2Cpp.Class(Il2Cpp.api.objectGetClass(this));
        }
        /** Returns a monitor for this object. */
        get monitor() {
            return new Il2Cpp.Object.Monitor(this);
        }
        /** Gets the size of the current object. */
        get size() {
            return Il2Cpp.api.objectGetSize(this);
        }
        /** Gets the field with the given name. */
        field(name) {
            return this.class.field(name).withHolder(this);
        }
        /** Gets the method with the given name. */
        method(name, parameterCount = -1) {
            return this.class.method(name, parameterCount).withHolder(this);
        }
        /** Creates a reference to this object. */
        ref(pin) {
            return new Il2Cpp.GCHandle(Il2Cpp.api.gcHandleNew(this, +pin));
        }
        /** Gets the correct virtual method from the given virtual method. */
        virtualMethod(method) {
            return new Il2Cpp.Method(Il2Cpp.api.objectGetVirtualMethod(this, method)).withHolder(this);
        }
        /** Gets the field with the given name. */
        tryField(name) {
            return this.class.tryField(name)?.withHolder(this);
        }
        /** Gets the field with the given name. */
        tryMethod(name, parameterCount = -1) {
            return this.class.tryMethod(name, parameterCount)?.withHolder(this);
        }
        /** */
        toString() {
            return this.isNull() ? "null" : this.method("ToString", 0).invoke().content ?? "null";
        }
        /** Unboxes the value type (either a primitive, a struct or an enum) out of this object. */
        unbox() {
            return this.class.isValueType
                ? new Il2Cpp.ValueType(Il2Cpp.api.objectUnbox(this), this.class.type)
                : raise(`couldn't unbox instances of ${this.class.type.name} as they are not value types`);
        }
        /** Creates a weak reference to this object. */
        weakRef(trackResurrection) {
            return new Il2Cpp.GCHandle(Il2Cpp.api.gcHandleNewWeakRef(this, +trackResurrection));
        }
    }
    __decorate([
        lazy
    ], Object.prototype, "class", null);
    __decorate([
        lazy
    ], Object.prototype, "size", null);
    __decorate([
        lazy
    ], Object, "headerSize", null);
    Il2Cpp.Object = Object;
    (function (Object) {
        class Monitor {
            handle;
            /** @internal */
            constructor(/** @internal */ handle) {
                this.handle = handle;
            }
            /** Acquires an exclusive lock on the current object. */
            enter() {
                return Il2Cpp.api.monitorEnter(this.handle);
            }
            /** Release an exclusive lock on the current object. */
            exit() {
                return Il2Cpp.api.monitorExit(this.handle);
            }
            /** Notifies a thread in the waiting queue of a change in the locked object's state. */
            pulse() {
                return Il2Cpp.api.monitorPulse(this.handle);
            }
            /** Notifies all waiting threads of a change in the object's state. */
            pulseAll() {
                return Il2Cpp.api.monitorPulseAll(this.handle);
            }
            /** Attempts to acquire an exclusive lock on the current object. */
            tryEnter(timeout) {
                return !!Il2Cpp.api.monitorTryEnter(this.handle, timeout);
            }
            /** Releases the lock on an object and attempts to block the current thread until it reacquires the lock. */
            tryWait(timeout) {
                return !!Il2Cpp.api.monitorTryWait(this.handle, timeout);
            }
            /** Releases the lock on an object and blocks the current thread until it reacquires the lock. */
            wait() {
                return Il2Cpp.api.monitorWait(this.handle);
            }
        }
        Object.Monitor = Monitor;
    })(Object = Il2Cpp.Object || (Il2Cpp.Object = {}));
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class Parameter {
        /** Name of this parameter. */
        name;
        /** Position of this parameter. */
        position;
        /** Type of this parameter. */
        type;
        constructor(name, position, type) {
            this.name = name;
            this.position = position;
            this.type = type;
        }
        /** */
        toString() {
            return `${this.type.name} ${this.name}`;
        }
    }
    Il2Cpp.Parameter = Parameter;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class Pointer extends NativeStruct {
        type;
        constructor(handle, type) {
            super(handle);
            this.type = type;
        }
        /** Gets the element at the given index. */
        get(index) {
            return Il2Cpp.read(this.handle.add(index * this.type.class.arrayElementSize), this.type);
        }
        /** Reads the given amount of elements starting at the given offset. */
        read(length, offset = 0) {
            const values = new globalThis.Array(length);
            for (let i = 0; i < length; i++) {
                values[i] = this.get(i + offset);
            }
            return values;
        }
        /** Sets the given element at the given index */
        set(index, value) {
            Il2Cpp.write(this.handle.add(index * this.type.class.arrayElementSize), value, this.type);
        }
        /** */
        toString() {
            return this.handle.toString();
        }
        /** Writes the given elements starting at the given index. */
        write(values, offset = 0) {
            for (let i = 0; i < values.length; i++) {
                this.set(i + offset, values[i]);
            }
        }
    }
    Il2Cpp.Pointer = Pointer;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class Reference extends NativeStruct {
        type;
        constructor(handle, type) {
            super(handle);
            this.type = type;
        }
        /** Gets the element referenced by the current reference. */
        get value() {
            return Il2Cpp.read(this.handle, this.type);
        }
        /** Sets the element referenced by the current reference. */
        set value(value) {
            Il2Cpp.write(this.handle, value, this.type);
        }
        /** */
        toString() {
            return this.isNull() ? "null" : `->${this.value}`;
        }
    }
    Il2Cpp.Reference = Reference;
    /** Creates a reference to the specified value. */
    function reference(value, type) {
        const handle = Memory.alloc(Process.pointerSize);
        switch (typeof value) {
            case "boolean":
                return new Il2Cpp.Reference(handle.writeS8(+value), Il2Cpp.corlib.class("System.Boolean").type);
            case "number":
                switch (type?.typeEnum) {
                    case Il2Cpp.Type.enum.unsignedByte:
                        return new Il2Cpp.Reference(handle.writeU8(value), type);
                    case Il2Cpp.Type.enum.byte:
                        return new Il2Cpp.Reference(handle.writeS8(value), type);
                    case Il2Cpp.Type.enum.char:
                    case Il2Cpp.Type.enum.unsignedShort:
                        return new Il2Cpp.Reference(handle.writeU16(value), type);
                    case Il2Cpp.Type.enum.short:
                        return new Il2Cpp.Reference(handle.writeS16(value), type);
                    case Il2Cpp.Type.enum.unsignedInt:
                        return new Il2Cpp.Reference(handle.writeU32(value), type);
                    case Il2Cpp.Type.enum.int:
                        return new Il2Cpp.Reference(handle.writeS32(value), type);
                    case Il2Cpp.Type.enum.unsignedLong:
                        return new Il2Cpp.Reference(handle.writeU64(value), type);
                    case Il2Cpp.Type.enum.long:
                        return new Il2Cpp.Reference(handle.writeS64(value), type);
                    case Il2Cpp.Type.enum.float:
                        return new Il2Cpp.Reference(handle.writeFloat(value), type);
                    case Il2Cpp.Type.enum.double:
                        return new Il2Cpp.Reference(handle.writeDouble(value), type);
                }
            case "object":
                if (value instanceof Il2Cpp.ValueType || value instanceof Il2Cpp.Pointer) {
                    return new Il2Cpp.Reference(value.handle, value.type);
                }
                else if (value instanceof Il2Cpp.Object) {
                    return new Il2Cpp.Reference(handle.writePointer(value), value.class.type);
                }
                else if (value instanceof Il2Cpp.String || value instanceof Il2Cpp.Array) {
                    return new Il2Cpp.Reference(handle.writePointer(value), value.object.class.type);
                }
                else if (value instanceof NativePointer) {
                    switch (type?.typeEnum) {
                        case Il2Cpp.Type.enum.unsignedNativePointer:
                        case Il2Cpp.Type.enum.nativePointer:
                            return new Il2Cpp.Reference(handle.writePointer(value), type);
                    }
                }
                else if (value instanceof Int64) {
                    return new Il2Cpp.Reference(handle.writeS64(value), Il2Cpp.corlib.class("System.Int64").type);
                }
                else if (value instanceof UInt64) {
                    return new Il2Cpp.Reference(handle.writeU64(value), Il2Cpp.corlib.class("System.UInt64").type);
                }
            default:
                raise(`couldn't create a reference to ${value} using an unhandled type ${type?.name}`);
        }
    }
    Il2Cpp.reference = reference;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class String extends NativeStruct {
        /** Gets the content of this string. */
        get content() {
            return Il2Cpp.api.stringGetChars(this).readUtf16String(this.length);
        }
        /** @unsafe Sets the content of this string - it may write out of bounds! */
        set content(value) {
            // prettier-ignore
            const offset = Il2Cpp.string("vfsfitvnm").handle.offsetOf(_ => _.readInt() == 9)
                ?? raise("couldn't find the length offset in the native string struct");
            globalThis.Object.defineProperty(Il2Cpp.String.prototype, "content", {
                set(value) {
                    Il2Cpp.api.stringGetChars(this).writeUtf16String(value ?? "");
                    this.handle.add(offset).writeS32(value?.length ?? 0);
                }
            });
            this.content = value;
        }
        /** Gets the length of this string. */
        get length() {
            return Il2Cpp.api.stringGetLength(this);
        }
        /** Gets the encompassing object of the current string. */
        get object() {
            return new Il2Cpp.Object(this);
        }
        /** */
        toString() {
            return this.isNull() ? "null" : `"${this.content}"`;
        }
    }
    Il2Cpp.String = String;
    /** Creates a new string with the specified content. */
    function string(content) {
        return new Il2Cpp.String(Il2Cpp.api.stringNew(Memory.allocUtf8String(content ?? "")));
    }
    Il2Cpp.string = string;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class Thread extends NativeStruct {
        /** Gets the native id of the current thread. */
        get id() {
            let get = function () {
                return this.internal.field("thread_id").value.toNumber();
            };
            // https://github.com/mono/linux-packaging-mono/blob/d586f84dfea30217f34b076a616a098518aa72cd/mono/utils/mono-threads.h#L642
            if (Process.platform != "windows") {
                const currentThreadId = Process.getCurrentThreadId();
                const currentPosixThread = ptr(get.apply(Il2Cpp.currentThread));
                // prettier-ignore
                const offset = currentPosixThread.offsetOf(_ => _.readS32() == currentThreadId, 1024) ??
                    raise(`couldn't find the offset for determining the kernel id of a posix thread`);
                const _get = get;
                get = function () {
                    return ptr(_get.apply(this)).add(offset).readS32();
                };
            }
            getter(Il2Cpp.Thread.prototype, "id", get, lazy);
            return this.id;
        }
        /** Gets the encompassing internal object (System.Threding.InternalThreead) of the current thread. */
        get internal() {
            return this.object.tryField("internal_thread")?.value ?? this.object;
        }
        /** Determines whether the current thread is the garbage collector finalizer one. */
        get isFinalizer() {
            return !Il2Cpp.api.threadIsVm(this);
        }
        /** Gets the managed id of the current thread. */
        get managedId() {
            return this.object.method("get_ManagedThreadId").invoke();
        }
        /** Gets the encompassing object of the current thread. */
        get object() {
            return new Il2Cpp.Object(this);
        }
        /** @internal */
        get staticData() {
            return this.internal.field("static_data").value;
        }
        /** @internal */
        get synchronizationContext() {
            const get_ExecutionContext = this.object.tryMethod("GetMutableExecutionContext") ?? this.object.method("get_ExecutionContext");
            const executionContext = get_ExecutionContext.invoke();
            let synchronizationContext = executionContext.tryField("_syncContext")?.value ??
                executionContext.tryMethod("get_SynchronizationContext")?.invoke() ??
                this.tryLocalValue(Il2Cpp.corlib.class("System.Threading.SynchronizationContext"));
            if (synchronizationContext == null || synchronizationContext.isNull()) {
                if (this.handle.equals(Il2Cpp.mainThread.handle)) {
                    raise(`couldn't find the synchronization context of the main thread, perhaps this is early instrumentation?`);
                }
                else {
                    raise(`couldn't find the synchronization context of thread #${this.managedId}, only the main thread is expected to have one`);
                }
            }
            return synchronizationContext;
        }
        /** Detaches the thread from the application domain. */
        detach() {
            return Il2Cpp.api.threadDetach(this);
        }
        /** Schedules a callback on the current thread. */
        schedule(block) {
            const Post = this.synchronizationContext.method("Post");
            return new Promise(resolve => {
                const delegate = Il2Cpp.delegate(Il2Cpp.corlib.class("System.Threading.SendOrPostCallback"), () => {
                    const result = block();
                    setImmediate(() => resolve(result));
                });
                // This is to replace pending scheduled callbacks when the script is about to get unlaoded.
                // If we skip this cleanup, Frida's native callbacks will point to invalid memory, making
                // the application crash as soon as the IL2CPP runtime tries to execute such callbacks.
                // For instance, without the following code, this is how you can trigger a crash:
                // 1) unfocus the application;
                // 2) schedule a callback;
                // 3) reload the script;
                // 4) focus application.
                //
                // The "proper" solution consists in removing our delegates from the Unity synchroniztion
                // context, but the interface is not consisent across Unity versions - e.g. 2017.4.40f1 uses
                // a queue instead of a list, whereas newer versions do not allow null work requests.
                // The following solution, which basically redirects the invocation to a native function that
                // survives the script reloading, is much simpler, honestly.
                Script.bindWeak(globalThis, () => {
                    delegate.field("method_ptr").value = delegate.field("invoke_impl").value = Il2Cpp.api.domainGet;
                });
                Post.invoke(delegate, NULL);
            });
        }
        /** @internal */
        tryLocalValue(klass) {
            for (let i = 0; i < 16; i++) {
                const base = this.staticData.add(i * Process.pointerSize).readPointer();
                if (!base.isNull()) {
                    const object = new Il2Cpp.Object(base.readPointer()).asNullable();
                    if (object?.class?.isSubclassOf(klass, false)) {
                        return object;
                    }
                }
            }
        }
    }
    __decorate([
        lazy
    ], Thread.prototype, "internal", null);
    __decorate([
        lazy
    ], Thread.prototype, "isFinalizer", null);
    __decorate([
        lazy
    ], Thread.prototype, "managedId", null);
    __decorate([
        lazy
    ], Thread.prototype, "object", null);
    __decorate([
        lazy
    ], Thread.prototype, "staticData", null);
    __decorate([
        lazy
    ], Thread.prototype, "synchronizationContext", null);
    Il2Cpp.Thread = Thread;
    getter(Il2Cpp, "attachedThreads", () => {
        return readNativeList(Il2Cpp.api.threadGetAttachedThreads).map(_ => new Il2Cpp.Thread(_));
    });
    getter(Il2Cpp, "currentThread", () => {
        return new Il2Cpp.Thread(Il2Cpp.api.threadGetCurrent()).asNullable();
    });
    getter(Il2Cpp, "mainThread", () => {
        // I'm not sure if this is always the case. Typically, the main
        // thread managed id is 1, but this isn't always true: spawning
        // an Android application with Unity 5.3.8f1 will cause the Frida
        // thread to have the managed id equal to 1, whereas the main thread
        // managed id is 2.
        return Il2Cpp.attachedThreads[0];
    });
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    let Type = class Type extends NativeStruct {
        /** */
        static get enum() {
            const _ = (_, block = (_) => _) => block(Il2Cpp.corlib.class(_)).type.typeEnum;
            return {
                void: _("System.Void"),
                boolean: _("System.Boolean"),
                char: _("System.Char"),
                byte: _("System.SByte"),
                unsignedByte: _("System.Byte"),
                short: _("System.Int16"),
                unsignedShort: _("System.UInt16"),
                int: _("System.Int32"),
                unsignedInt: _("System.UInt32"),
                long: _("System.Int64"),
                unsignedLong: _("System.UInt64"),
                nativePointer: _("System.IntPtr"),
                unsignedNativePointer: _("System.UIntPtr"),
                float: _("System.Single"),
                double: _("System.Double"),
                pointer: _("System.IntPtr", _ => _.field("m_value")),
                valueType: _("System.Decimal"),
                object: _("System.Object"),
                string: _("System.String"),
                class: _("System.Array"),
                array: _("System.Void", _ => _.arrayClass),
                multidimensionalArray: _("System.Void", _ => new Il2Cpp.Class(Il2Cpp.api.classGetArrayClass(_, 2))),
                genericInstance: _("System.Int32", _ => _.interfaces.find(_ => _.name.endsWith("`1")))
            };
        }
        /** Gets the class of this type. */
        get class() {
            return new Il2Cpp.Class(Il2Cpp.api.typeGetClass(this));
        }
        /** */
        get fridaAlias() {
            function getValueTypeFields(type) {
                const instanceFields = type.class.fields.filter(_ => !_.isStatic);
                return instanceFields.length == 0 ? ["char"] : instanceFields.map(_ => _.type.fridaAlias);
            }
            if (this.isByReference) {
                return "pointer";
            }
            switch (this.typeEnum) {
                case Il2Cpp.Type.enum.void:
                    return "void";
                case Il2Cpp.Type.enum.boolean:
                    return "bool";
                case Il2Cpp.Type.enum.char:
                    return "uchar";
                case Il2Cpp.Type.enum.byte:
                    return "int8";
                case Il2Cpp.Type.enum.unsignedByte:
                    return "uint8";
                case Il2Cpp.Type.enum.short:
                    return "int16";
                case Il2Cpp.Type.enum.unsignedShort:
                    return "uint16";
                case Il2Cpp.Type.enum.int:
                    return "int32";
                case Il2Cpp.Type.enum.unsignedInt:
                    return "uint32";
                case Il2Cpp.Type.enum.long:
                    return "int64";
                case Il2Cpp.Type.enum.unsignedLong:
                    return "uint64";
                case Il2Cpp.Type.enum.float:
                    return "float";
                case Il2Cpp.Type.enum.double:
                    return "double";
                case Il2Cpp.Type.enum.nativePointer:
                case Il2Cpp.Type.enum.unsignedNativePointer:
                case Il2Cpp.Type.enum.pointer:
                case Il2Cpp.Type.enum.string:
                case Il2Cpp.Type.enum.array:
                case Il2Cpp.Type.enum.multidimensionalArray:
                    return "pointer";
                case Il2Cpp.Type.enum.valueType:
                    return this.class.isEnum ? this.class.baseType.fridaAlias : getValueTypeFields(this);
                case Il2Cpp.Type.enum.class:
                case Il2Cpp.Type.enum.object:
                case Il2Cpp.Type.enum.genericInstance:
                    return this.class.isStruct ? getValueTypeFields(this) : this.class.isEnum ? this.class.baseType.fridaAlias : "pointer";
                default:
                    return "pointer";
            }
        }
        /** Determines whether this type is passed by reference. */
        get isByReference() {
            return this.name.endsWith("&");
        }
        /** Determines whether this type is primitive. */
        get isPrimitive() {
            switch (this.typeEnum) {
                case Il2Cpp.Type.enum.boolean:
                case Il2Cpp.Type.enum.char:
                case Il2Cpp.Type.enum.byte:
                case Il2Cpp.Type.enum.unsignedByte:
                case Il2Cpp.Type.enum.short:
                case Il2Cpp.Type.enum.unsignedShort:
                case Il2Cpp.Type.enum.int:
                case Il2Cpp.Type.enum.unsignedInt:
                case Il2Cpp.Type.enum.long:
                case Il2Cpp.Type.enum.unsignedLong:
                case Il2Cpp.Type.enum.float:
                case Il2Cpp.Type.enum.double:
                case Il2Cpp.Type.enum.nativePointer:
                case Il2Cpp.Type.enum.unsignedNativePointer:
                    return true;
                default:
                    return false;
            }
        }
        /** Gets the name of this type. */
        get name() {
            const handle = Il2Cpp.api.typeGetName(this);
            try {
                return handle.readUtf8String();
            }
            finally {
                Il2Cpp.free(handle);
            }
        }
        /** Gets the encompassing object of the current type. */
        get object() {
            return new Il2Cpp.Object(Il2Cpp.api.typeGetObject(this));
        }
        /** Gets the type enum of the current type. */
        get typeEnum() {
            return Il2Cpp.api.typeGetTypeEnum(this);
        }
        /** */
        toString() {
            return this.name;
        }
    };
    __decorate([
        lazy
    ], Type.prototype, "class", null);
    __decorate([
        lazy
    ], Type.prototype, "fridaAlias", null);
    __decorate([
        lazy
    ], Type.prototype, "isByReference", null);
    __decorate([
        lazy
    ], Type.prototype, "isPrimitive", null);
    __decorate([
        lazy
    ], Type.prototype, "name", null);
    __decorate([
        lazy
    ], Type.prototype, "object", null);
    __decorate([
        lazy
    ], Type.prototype, "typeEnum", null);
    __decorate([
        lazy
    ], Type, "enum", null);
    Type = __decorate([
        recycle
    ], Type);
    Il2Cpp.Type = Type;
})(Il2Cpp || (Il2Cpp = {}));
var Il2Cpp;
(function (Il2Cpp) {
    class ValueType extends NativeStruct {
        type;
        constructor(handle, type) {
            super(handle);
            this.type = type;
        }
        /** Boxes the current value type in a object. */
        box() {
            return new Il2Cpp.Object(Il2Cpp.api.valueTypeBox(this.type.class, this));
        }
        /** Gets the field with the given name. */
        field(name) {
            return this.type.class.field(name).withHolder(this);
        }
        /** Gets the method with the given name. */
        method(name, parameterCount = -1) {
            return this.type.class.method(name, parameterCount).withHolder(this);
        }
        /** Gets the field with the given name. */
        tryField(name) {
            return this.type.class.tryField(name)?.withHolder(this);
        }
        /** Gets the field with the given name. */
        tryMethod(name, parameterCount = -1) {
            return this.type.class.tryMethod(name, parameterCount)?.withHolder(this);
        }
        /** */
        toString() {
            const ToString = this.method("ToString", 0);
            return this.isNull()
                ? "null"
                : // If ToString is defined within a value type class, we can
                    // avoid a boxing operation.
                    ToString.class.isValueType
                        ? ToString.invoke().content ?? "null"
                        : this.box().toString() ?? "null";
        }
    }
    Il2Cpp.ValueType = ValueType;
})(Il2Cpp || (Il2Cpp = {}));
/// <reference path="./utils/android.ts">/>
/// <reference path="./utils/console.ts">/>
/// <reference path="./utils/decorate.ts">/>
/// <reference path="./utils/getter.ts">/>
/// <reference path="./utils/lazy.ts">/>
/// <reference path="./utils/native-struct.ts">/>
/// <reference path="./utils/native-wait.ts">/>
/// <reference path="./utils/offset-of.ts">/>
/// <reference path="./utils/read-native-iterator.ts">/>
/// <reference path="./utils/read-native-list.ts">/>
/// <reference path="./utils/recycle.ts">/>
/// <reference path="./utils/unity-version.ts">/>
/// <reference path="./api.ts">/>
/// <reference path="./application.ts">/>
/// <reference path="./dump.ts">/>
/// <reference path="./exception-listener.ts">/>
/// <reference path="./filters.ts">/>
/// <reference path="./gc.ts">/>
/// <reference path="./memory.ts">/>
/// <reference path="./module.ts">/>
/// <reference path="./perform.ts">/>
/// <reference path="./tracer.ts">/>
/// <reference path="./structs/array.ts">/>
/// <reference path="./structs/assembly.ts">/>
/// <reference path="./structs/class.ts">/>
/// <reference path="./structs/delegate.ts">/>
/// <reference path="./structs/domain.ts">/>
/// <reference path="./structs/field.ts">/>
/// <reference path="./structs/gc-handle.ts">/>
/// <reference path="./structs/image.ts">/>
/// <reference path="./structs/memory-snapshot.ts">/>
/// <reference path="./structs/method.ts">/>
/// <reference path="./structs/object.ts">/>
/// <reference path="./structs/parameter.ts">/>
/// <reference path="./structs/pointer.ts">/>
/// <reference path="./structs/reference.ts">/>
/// <reference path="./structs/string.ts">/>
/// <reference path="./structs/thread.ts">/>
/// <reference path="./structs/type.ts">/>
/// <reference path="./structs/value-type.ts">/>
globalThis.Il2Cpp = Il2Cpp;

}).call(this)}).call(this,require("timers").setImmediate)

},{"timers":4}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
(function (setImmediate,clearImmediate){(function (){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this)}).call(this,require("timers").setImmediate,require("timers").clearImmediate)

},{"process/browser.js":3,"timers":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC50cyIsIm5vZGVfbW9kdWxlcy9mcmlkYS1pbDJjcHAtYnJpZGdlL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSwrQkFBNkI7QUFDN0IsWUFBWSxDQUFDLEdBQUcsRUFBRTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsc0JBQXNCLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsZ0JBQWdCLENBQUMsQ0FBQztJQUMvRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLGNBQWMsQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQyxDQUFBOzs7OztBQ05GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3Y1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIifQ==
