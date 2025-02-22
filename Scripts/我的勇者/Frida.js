(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
        depth = depth ?? 512;
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
                thread = thread ?? Il2Cpp.domain.attach();
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
    
    },{"timers":3}],2:[function(require,module,exports){
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
    
    },{}],3:[function(require,module,exports){
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
    
    },{"process/browser.js":2,"timers":3}],4:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const utils_1 = require("../utils");
    /** 随机设备id*/
    Java.use("android.provider.Settings$Secure").getString.implementation = function (arg1, arg2) {
        return /android_id/.test(arg2) ? (0, utils_1.generateRandomString)() : this.getString(arg1, arg2);
    };
    /** 给日期对象添加格式化*/
    Date.prototype.format = function (formatStr = 'yyyy-MM-dd HH:mm:ss') {
        let date = {
            "y+": this.getFullYear(),
            "M+": (this.getMonth() + 1).toString().padStart(2, '0'),
            "d+": this.getDate().toString().padStart(2, '0'),
            "H+": this.getHours().toString().padStart(2, '0'),
            "m+": this.getMinutes().toString().padStart(2, '0'),
            "s+": this.getSeconds().toString().padStart(2, '0'),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds() //毫秒 
        };
        Object.keys(date).forEach((key) => {
            formatStr = formatStr.replace(new RegExp(key), date[key]);
        });
        return formatStr;
    };
    },{"../utils":7}],5:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    },{}],6:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeOut = exports.timedTask = exports.isNull = exports.dicForEach = exports.setForEach = exports.listNotExistArr = exports.listExists = exports.listFindIndex = exports.listFind = exports.listFindIndexAndEne = exports.listForEach = exports.convertClass = exports.convertObject = exports.getListByClazz = exports.sysString = exports.sysByte = exports.sysUInt64 = exports.sysUInt32 = exports.assembly = void 0;
    const logger_1 = require("./logger");
    /**
     * @param {string} [assemblyName="Assembly-CSharp"]
     * @returns {Il2Cpp.Image}
     */
    function assembly(assemblyName = "Assembly-CSharp") { return Il2Cpp.domain.assembly(assemblyName).image; }
    exports.assembly = assembly;
    /**
     * @returns {Il2Cpp.Class}
     */
    function sysUInt32() { return Il2Cpp.corlib.class("System.UInt32"); }
    exports.sysUInt32 = sysUInt32;
    /**
     * @returns {Il2Cpp.Class}
     */
    function sysUInt64() { return Il2Cpp.corlib.class("System.UInt64"); }
    exports.sysUInt64 = sysUInt64;
    /**
     * @returns {Il2Cpp.Class}
     */
    function sysByte() { return Il2Cpp.corlib.class("System.Byte"); }
    exports.sysByte = sysByte;
    /**
     * @returns {Il2Cpp.Class}
     */
    function sysString() { return Il2Cpp.corlib.class("System.String"); }
    exports.sysString = sysString;
    /**
     * @param {Il2Cpp.Class} clazz 泛型类
     * @returns {Il2Cpp.Object}
     */
    function getListByClazz(clazz) {
        try {
            return Il2Cpp.corlib.class('System.Collections.Generic.List`1').inflate(clazz).new();
        }
        catch (error) {
            logger_1.logger.error('创建 list 出现异常,这会导致很多功能失效,请重启游戏!', error);
        }
    }
    exports.getListByClazz = getListByClazz;
    /**
     *  把游戏对象的字段名和值转换为js对象
     * @param {Il2Cpp.Object} object 游戏对象
     * @param {boolean} needFunction 是否需要转换函数
     * @returns {object} js对象
     */
    function convertObject(object, needFunction = false) {
        if (isNull(object)) {
            return null;
        }
        const clazz = object.class;
        const obj = {};
        clazz.fields.reduce((acc, field) => {
            if (!field.isStatic) {
                acc[field.name] = object.field(field.name).value;
            }
            return acc;
        }, obj);
        if (needFunction) {
            clazz.methods.reduce((acc, method) => {
                if (!method.isStatic) {
                    acc[method.name] = (...parameters) => object.method(method.name).invoke(...parameters);
                }
                return acc;
            }, obj);
        }
        return obj;
    }
    exports.convertObject = convertObject;
    /**
     *  把游戏类的字段名和值转换为js对象
     * @param {Il2Cpp.Class} clazz 游戏类
     * @param {boolean} needFunction 是否需要转换函数
     * @returns {object} js对象
     */
    function convertClass(clazz, needFunction = false) {
        const obj = {};
        clazz.fields.reduce((acc, field) => {
            if (field.isStatic) {
                acc[field.name] = clazz.field(field.name).value;
            }
            return acc;
        }, obj);
        if (needFunction) {
            clazz.methods.reduce((acc, method) => {
                if (method.isStatic) {
                    acc[method.name] = (...parameters) => clazz.method(method.name).invoke(...parameters);
                }
                return acc;
            }, obj);
        }
        return obj;
    }
    exports.convertClass = convertClass;
    /**
     * @callback listDataCallback
     * @param {Il2Cpp.Object} item
     */
    /**
     *  遍历列表,并且把每个元素作用于函数
     * @param {Il2Cpp.Object} list 需要遍历的集合
     * @param {listDataCallback} callback 回调函数
     * @param {boolean} isPrint  是否打印
     */
    function listForEach(list, callback = null, isPrint = true) {
        if (isNull(list)) {
            logger_1.logger.debug('列表为空');
            return;
        }
        if (isPrint)
            logger_1.logger.debug('-------------------------------------------------------------------------------------');
        for (let index = 0; index < list.method("get_Count").invoke(); index++) {
            const element = list.method("get_Item").invoke(index);
            if (isNull(element)) {
                logger_1.logger.debug('元素为空跳过改元素');
                continue;
            }
            if (callback) {
                callback(element);
            }
            else if (isPrint) {
                logger_1.logger.debug("\t 项目:", element);
            }
        }
        if (isPrint)
            logger_1.logger.debug("列表:", list, "总数:", list.method("get_Count").invoke());
    }
    exports.listForEach = listForEach;
    /**
     *  设备信息
     * @typedef {object} ListFindInfo
     * @property {number} index - 匹配元素的下标
     * @property {Il2Cpp.Object} element - 匹配的元素
     */
    /**
     * list 中查找匹配的第一个下标和元素
     * @param {Il2Cpp.Object} list 需要查找的集合
     * @param {listDataCallback} match 匹配函数
     * @returns {ListFindInfo}
     */
    function listFindIndexAndEne(list, match) {
        const r = {
            index: -1,
            element: null
        };
        if (isNull(list)) {
            return r;
        }
        for (let index = 0; index < list.method("get_Count").invoke(); index++) {
            const element = list.method("get_Item").invoke(index);
            if (match(element)) {
                r.index = index;
                r.element = element;
                return r;
            }
        }
        return r;
    }
    exports.listFindIndexAndEne = listFindIndexAndEne;
    /**
     * list 中查找匹配的第一个元素
     * @param {Il2Cpp.Object} list 需要查找的集合
     * @param {listDataCallback} match 匹配函数
     * @returns {Il2Cpp.Object|null}
     */
    function listFind(list, match) {
        return listFindIndexAndEne(list, match).element;
    }
    exports.listFind = listFind;
    /**
     * list 中查找匹配的第一个元素的下标
     * @param {Il2Cpp.Object} list 需要查找的集合
     * @param {listDataCallback} match 匹配函数
     * @returns {number}
     */
    function listFindIndex(list, match) {
        return listFindIndexAndEne(list, match).index;
    }
    exports.listFindIndex = listFindIndex;
    /**
     * list 中查找是否有匹配的元素
     * @param {Il2Cpp.Object} list 需要查找的集合
     * @param {listDataCallback} match 匹配函数
     * @returns {boolean}
     */
    function listExists(list, match) {
        return listFindIndex(list, match) != -1;
    }
    exports.listExists = listExists;
    /**
     * @callback listNotExistArrCallback
     * @param {Il2Cpp.Object} item1
     * @param {*} item2
     */
    /**
     * 过滤出存在 jsList 中但是不存在 list 中的数据
     * @param {*[]} jsList 需要查找的集合
     * @param {Il2Cpp.Object} list 需要查找的集合
     * @param {listNotExistArrCallback} match 匹配函数
     * @returns {*[]}
     */
    function listNotExistArr(jsList, list, match) {
        if (!jsList || jsList.length == 0 || isNull(list)) {
            return [];
        }
        for (let index = 0; index < list.method("get_Count").invoke(); index++) {
            const element = list.method("get_Item").invoke(index);
            jsList = jsList.filter((item) => match(element, item));
        }
        return jsList;
    }
    exports.listNotExistArr = listNotExistArr;
    /**
     * @callback setDataCallback
     * @param {Il2Cpp.Object} item
     */
    /**
     *  遍历 set,并且把每个元素作用于函数
     * @param {Il2Cpp.Object} set 需要遍历的 set
     * @param {setDataCallback} callback  回调函数
     * @param {boolean} isPrint  是否打印
     */
    function setForEach(set, callback = null, isPrint = true) {
        if (isNull(set)) {
            logger_1.logger.debug('set 为空');
            return;
        }
        if (isPrint)
            logger_1.logger.debug('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        let Enumerator = set.method("GetEnumerator").invoke();
        while (Enumerator.method("MoveNext").invoke()) {
            let itme = Enumerator.method("get_Current").invoke();
            if (callback) {
                callback(key, value);
            }
            else if (isPrint) {
                logger_1.logger.debug('itme:', itme);
            }
        }
        if (isPrint)
            logger_1.logger.debug("set:", set, '总数', set.method("get_Count").invoke());
    }
    exports.setForEach = setForEach;
    /**
     * @callback dicDataCallback
     * @param {Il2Cpp.Object} key
     * @param {Il2Cpp.Object} val
     */
    /**
     *  遍历字典,并且把每个元素作用于函数
     * @param {Il2Cpp.Object} dic 需要遍历的字典
     * @param {dicDataCallback} callback  回调函数
     * @param {boolean} isPrint  是否打印
     */
    function dicForEach(dic, callback = null, isPrint = true) {
        if (isNull(dic)) {
            logger_1.logger.debug('字典为空');
            return;
        }
        if (isPrint)
            logger_1.logger.debug('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        let Enumerator = dic.method("System.Collections.IDictionary.GetEnumerator").invoke();
        while (Enumerator.method("MoveNext").invoke()) {
            let itme = Enumerator.method("get_Current").invoke();
            let key = itme.field('key').value;
            let value = dic.method("get_Item").invoke(key);
            if (callback) {
                callback(key, value);
            }
            else if (isPrint) {
                logger_1.logger.debug('key:', key, '\tval:', value);
            }
        }
        if (isPrint)
            logger_1.logger.debug("字典:", dic, '总数', dic.method("get_Count").invoke());
    }
    exports.dicForEach = dicForEach;
    /** 判断游戏对象是否为空 */
    function isNull(obj) {
        return obj == 'null' || obj == null;
    }
    exports.isNull = isNull;
    /**
     * @typedef {object} TimeResult - 定时任务结果
     * @property {number} timer - 定时器id
     * @property {Function} stop - 停止定时器
     */
    /**
     * 定时调用函数
     * @param {Function} callBack - 要执行的回调函数。
     * @param {number} [time=1000] - 时间间隔，单位为毫秒。默认是1000毫秒。
     * @returns {TimeResult} - 返回一个对象，包含定时器id和停止定时器的方法。
     */
    function timedTask(callBack, time = 1000) {
        return {
            timer: setInterval(() => Il2Cpp.perform(callBack, "main"), time),
            stop: function () {
                clearInterval(this.timer);
            }
        };
    }
    exports.timedTask = timedTask;
    /**
     * 延时调用函数
     * @param {Function} callBack 定时执行的函数
     * @param {number} time 多久执行一次,单位毫秒,默认是1000毫秒
     * @returns {TimeResult} - 返回一个对象，包含定时器id和停止定时器的方法。
     */
    function timeOut(callBack, time = 1000) {
        return {
            timer: setTimeout(() => Il2Cpp.perform(callBack, "main"), time),
            stop: function () {
                clearTimeout(this.timer);
            }
        };
    }
    exports.timeOut = timeOut;
    },{"./logger":9}],7:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.verify = exports.generateRandomString = exports.getAndroidID = exports.isXG = exports.isJsHook = exports.strictConvertToNumber = void 0;
    const logger_1 = require("./logger");
    /**
     * 严格检查字符串是否可以转换为数字
     * @param {string} str - 输入的字符串
     * @returns {number | string} - 如果可以严格转换为数字，返回数字；否则返回原字符串
     */
    function strictConvertToNumber(str) {
        // 使用正则表达式检查是否为有效数字格式,如果匹配有效数字格式，转换为数字并返回
        if (/^-?\d+(\.\d+)?$/.test(str)) {
            return Number(str);
        }
        // 否则返回原字符串
        return str;
    }
    exports.strictConvertToNumber = strictConvertToNumber;
    /** 判断当前环境是否是 JsHook */
    exports.isJsHook = typeof crypto != 'undefined';
    /** 判断是否是我的设备 */
    exports.isXG = exports.isJsHook ? /f55d505cbaed768b|613cdf10b09bee3c/i.test(device.getAndroidID()) : true;
    /** 获取设备id */
    function getAndroidID() {
        // if (/f55d505cbaed768b|613cdf10b09bee3c|31e96c53b4be6906/i.test(device.getAndroidID())) {
        //   return device.getAndroidID();
        // }
        if (!/606bd8fbff8eb8bf/i.test(device.getAndroidID())) {
            return device.getAndroidID();
        }
        let androidID = storage.get('androidID');
        if (!androidID) {
            androidID = generateRandomString();
            storage.set('androidID', androidID);
        }
        return androidID;
        // return device.getAndroidID();
    }
    exports.getAndroidID = getAndroidID;
    /**
     * 生成指定长度的随机字符串
     * @param {number} num 生成字符串的长度
     */
    function generateRandomString(num = 16) {
        if (exports.isJsHook) {
            return uuid().substring(0, num);
        }
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomString = '';
        for (let i = 0; i < num; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    }
    exports.generateRandomString = generateRandomString;
    const mod = {
        crypKey: '613cdf10b09bee3c',
        urls: [],
        index: 0,
    };
    /**
     * @callback verifyCallback
     * @param {import("../types").DeviceInfo} deviceInfo 设备信息
     * @param {import("../types").ScriptInfo} scriptInfo 脚本验证信息
     */
    /**
     * 验证逻辑
     * @param {string} packagename 游戏包名
     * @param {string} versions 版本
     * @param {verifyCallback} succeed 验证成功回调函数
     */
    function verify(packagename, versions, succeed) {
        if (mod.index === 0) {
            const url = `https://raw.githubusercontent.com/qiaozhi-4/verify/main/${packagename}`;
            mod.urls = [
                url,
                `https://gh-proxy.com/${url}`,
                `https://ghproxy.net/${url}`,
                `https://github.moeyy.xyz/${url}`,
                `https://raw.fgit.cf/qiaozhi-4/verify/main/${packagename}`, // 美国
            ];
        }
        http.get(mod.urls[mod.index], {
            Authorization: 'Bearer ghp_'
        }, {
            success: function (result) {
                logger_1.logger.info('-----------------------------------------------');
                result = crypto.rc4Decrypt(mod.crypKey, result); // 解密
                logger_1.logger.private(result);
                result = JSON.parse(result);
                result.devices.forEach((i) => logger_1.logger.private(JSON.stringify(i)));
                logger_1.logger.info(result.affiche.title); // 打印公告标题
                if (result.versions != versions) {
                    logger_1.logger.error(`有新版本更新，当前版本已失效`);
                    logger_1.logger.info('当前版本:', versions);
                    logger_1.logger.info('最新版本:', result.versions);
                    app.exitApp();
                }
                // 查找设备
                logger_1.logger.info(`设备ID: ${getAndroidID()}`);
                let deviceInfo = result.devices?.find(obj => obj.deviceID === getAndroidID());
                if (!verifyDeviceInfo(deviceInfo)) {
                    deviceInfo = result.devices?.find(obj => obj.deviceID === 'free');
                    if (!verifyDeviceInfo(deviceInfo)) {
                        app.exitApp();
                    }
                }
                logger_1.logger.info('-----------------------------------------------');
                succeed(deviceInfo, result);
            },
            error: function (err) {
                mod.index++;
                if (mod.index == mod.urls.length) {
                    /** 退出app */
                    logger_1.logger.error("服务器访问全部失败!!", err);
                    app.exitApp();
                }
                else {
                    logger_1.logger.private('服务器访问失败，尝试其他线路···', err);
                    verify(packagename, versions, succeed);
                }
            }
        });
    }
    exports.verify = verify;
    /** 验证设备 */
    function verifyDeviceInfo(deviceInfo) {
        if (!deviceInfo) {
            logger_1.logger.error(`设备不存在!尝试使用免费版!`);
            return false;
        }
        if (deviceInfo.expirationTime < new Date().format()) {
            logger_1.logger.error(`已过期!`);
            return false;
        }
        return true;
    }
    },{"./logger":9}],8:[function(require,module,exports){
    "use strict";
    // log.js
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.log = void 0;
    /** 定义颜色代码 */
    const colors = {
        reset: '\x1b[0m',
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m', // 白色
    };
    /** 定义日志函数 */
    exports.log = {
        /** 默认日志（无颜色） */
        default: (...messages) => {
            console.log(...messages);
        },
        /** 红色日志 */
        error: (...messages) => {
            console.log(colors.red, '[ERROR]', ...messages, colors.reset);
        },
        /** 黄色日志 */
        warn: (...messages) => {
            console.log(colors.yellow, '[WARN]', ...messages, colors.reset);
        },
        /** 青色日志 */
        debug: (...messages) => {
            console.log(colors.cyan, '[DEBUG]', ...messages, colors.reset);
        },
        /** 绿色日志 */
        success: (...messages) => {
            console.log(colors.green, '[SUCCESS]', ...messages, colors.reset);
        },
        /** 蓝色日志 */
        info: (...messages) => {
            console.log(colors.blue, '[INFO]', ...messages, colors.reset);
        },
        /** 自定义颜色日志 */
        custom: (color, ...messages) => {
            if (colors[color]) {
                console.log(colors[color], '[CUSTOM]', ...messages, colors.reset);
            }
            else {
                console.warn(colors.yellow, '[WARN] Unknown color:', color, colors.reset);
            }
        },
    };
    },{}],9:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.logger = void 0;
    const index_1 = require("./index");
    const log_1 = require("./log");
    // ANSI 转义码定义，用于设置颜色// 重置颜色，用于将文本颜色和背景颜色恢复到默认状态
    const RESET = "\x1b[0m";
    // 红色文本颜色
    const RED = "\x1b[31m";
    exports.logger = {
        /** 获取行号[异常] */
        getLine() {
            const err = new Error();
            const stack = err.stack.split(`\n`);
            // 从堆栈跟踪信息中提取调用位置
            const callerLine = stack[2];
            return callerLine.match(/:(\d+):\d+\)$/)[1];
        },
        /**  调试打印日志 */
        debug(...messages) {
            if (!index_1.isJsHook) {
                log_1.log.debug(...messages);
            }
        },
        /** 全部打印日志 */
        info(...messages) {
            log_1.log.info(...messages);
        },
        /** 打印日志并且弹出弹窗 */
        error(...messages) {
            log_1.log.error(...messages);
            if (index_1.isJsHook) {
                toast(messages.reduce((acc, curr) => `${acc} ${curr}`));
            }
        },
        /** 我的专属打印 */
        private(...messages) {
            if (index_1.isXG) {
                log_1.log.debug(...messages);
            }
        },
        /** 显示 Toast 提示 */
        toast(...messages) {
            if (index_1.isJsHook) {
                toast(messages.reduce((acc, curr) => `${acc} ${curr}`));
            }
            else {
                log_1.log.info(...messages);
            }
        },
        /**
         *  以表格形式打印对象
         * @param {object[]} data 打印的对象数组
         * @param {string[]} columns 需要打印的字段,如果为空则打印全部
         */
        table(data, columns = null) {
            if (this.isJsHook)
                return;
            if (!Array.isArray(data) || data.length === 0) {
                console.log("没有可用的数据显示在表格中.");
                return;
            }
            // 过滤空值
            data = data.filter(e => e != null);
            // 如果没有指定列，则打印所有列
            const headers = columns || Object.keys(data[0]);
            // 转字符串
            data.forEach(e => {
                headers.forEach(header => {
                    if (e[header] == undefined) {
                        e[header] = `null`;
                        return;
                    }
                    let str = e[header].toString();
                    /** 把集合|字典截短,并统计元素个数 */
                    if (/^System.Collections.Generic./i.test(str)) {
                        e[header] = `${str.replace(/System.Collections.Generic./, ``)}:${e[header].method("get_Count")?.invoke()}`;
                    }
                });
            });
            // 计算每列的最大宽度
            const colWidths = headers.map(header => Math.max(header.length, ...data.map(row => countChars(String(row[header] || ``)))));
            // 表格顶部和底部的边框[◜◝◟◞⌜⌝⌞⌟⌏⌎⌍⌌◸◹◺◿◤◥◣◢]
            const borderTop = `+${colWidths.map(width => `-`.repeat(width + 2)).join(`+`)}+`;
            const borderBottom = borderTop;
            // 表格头行
            const headerRow = `| ${headers.map((header, index) => header.padEnd(colWidths[index])).join(` | `)} |`;
            // 数据行，每行是一个数组，包含每列的值
            const rows = data.map((row) => headers.map(header => String(row[header].toString() || ``)));
            // 检查每列中的值是否不同
            const uniqueColumns = headers.map((header, index) => {
                const values = rows.map(row => row[index]);
                return new Set(values).size !== 1;
            });
            // 根据 uniqueColumns 设置颜色,并添加空格填充表格
            const coloredRows = rows.map(row => `| ${row.map((value, index) => {
                const coloredValue = uniqueColumns[index] ? `${RED}${value}${RESET}` : value;
                return coloredValue.padEnd(colWidths[index] + (uniqueColumns[index] ? RED.length + RESET.length : 0) - countChineseChars(value));
            }).join(` | `)} |`);
            // 列之间的分隔符
            const separator = `+${colWidths.map(width => `-`.repeat(width + 2)).join(`+`)}+`;
            // 打印表格
            console.log(borderTop); // 顶部边框
            console.log(headerRow); // 头行
            console.log(separator); // 分隔符
            coloredRows.forEach(row => console.log(row)); // 每行数据
            console.log(borderBottom); // 底部边框
            console.log(`总行数:${data.length}`); // 底部边框
        }
    };
    const regex = /[\u4e00-\u9fa5]|[【】]/g;
    /**
     * 统计字符串中字符的数量，中文字符算2个，其他字符算1个
     * @param {string} str - 需要统计的字符串
     * @returns {number} 返回统计后的字符数量
     */
    function countChars(str) {
        let count = 0;
        // 遍历每个字符
        for (let char of str) {
            // 判断是否是中文字符
            if (regex.test(char)) {
                // 中文字符算2
                count += 2;
            }
            else {
                // 非中文字符算1
                count += 1;
            }
        }
        return count;
    }
    /**
     * 统计字符串中中文字符的个数
     * @param {string} str - 需要统计的字符串
     * @returns {number} 返回中文字符的个数
     */
    function countChineseChars(str) {
        // 使用正则表达式匹配所有中文字符
        const chineseChars = str.match(regex);
        // 如果找到了中文字符，则返回数量，否则返回0
        return chineseChars ? chineseChars.length : 0;
    }
    },{"./index":7,"./log":8}],10:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findByTitle = exports.findById = exports.showMenu = exports.mod = exports.builderAffiche = void 0;
    const logger_1 = require("./logger");
    const types_1 = require("../types");
    const _1 = require(".");
    /** 菜单自动回调 */
    function menuAutoCall(result) {
        logger_1.logger.private('触发控件:', JSON.stringify(result));
        /** 获取对应 id 元素 */
        let element = findById(result.id);
        if (element) {
            /** 如果存在就修改值 */
            if ('val' in element) {
                logger_1.logger.private('对应数据(修改前):', JSON.stringify(element));
                element.val = (0, _1.strictConvertToNumber)(result.val);
                logger_1.logger.private('对应数据(修改后):', JSON.stringify(element));
            }
            else {
                logger_1.logger.private('对应数据:', JSON.stringify(element));
            }
            /** 如果存在就调用回调 */
            if ('callback' in element) {
                Il2Cpp.perform(() => {
                    try {
                        element.callback(element);
                    }
                    catch (e) {
                        logger_1.logger.error(`执行[${element.title}]出现错误...`, e);
                    }
                }, "main");
            }
        }
        else {
            logger_1.logger.toast(`功能 [${id}] 未找到!`);
            logger_1.logger.private(JSON.stringify(allData));
        }
    }
    let id = 1;
    /**
     * 生成id,并展开全部控件数据
     * @param {MenuItem[]} arr
     */
    function buildDataId(arr) {
        let rArr = [];
        arr.forEach((e) => {
            e.id = id.toString();
            id++;
            if (/collapse/i.test(e.type)) {
                rArr = rArr.concat(buildDataId(e.item));
            }
            else if (!/text|category/i.test(e.type)) {
                rArr.push(e);
            }
        });
        return rArr;
    }
    let allData = [];
    /** 构建脚本依赖的控件数据 */
    function buildAllData(data) {
        allData = Object.values(data).reduce((acc, curr) => acc.concat(buildDataId(curr)), []);
    }
    /**
     * 构建菜单数据
     * @param {*} data 原始功能数据
     * @returns {MenuItem[]}
     */
    function buildMenuData(data) {
        buildAllData(data);
        let menuData = {
            type: 'tab',
            item: Object.keys(data)
                /** 过滤不要的键 */
                // .filter(element => !/示例/i.test(element))
                /** 生成多个标签页 */
                .map(key => { return { title: key, item: data[key] }; }),
            /** 设置默认打开的标签 */
            default: 0
        };
        menuData.default = menuData.item.length - 1;
        return [menuData];
    }
    /**
     * 生成菜单公告
     * @param {import("../types").ScriptInfo} scriptInfo 脚本信息
     * @param {string} build 构建版本
     * @returns {MenuItem[]}
     */
    function builderAffiche(scriptInfo, build) {
        return [{ type: 'text', size: 60, color: '#FF6969', val: scriptInfo.affiche.title }, { type: 'text', size: 45, color: '#FFF5E1', val: `当前版本: ${scriptInfo.versions}.${build}` }].concat(scriptInfo.affiche.contents
            .map((item) => {
            return { type: 'text', size: 45, color: '#FFF5E1', val: item };
        }));
    }
    exports.builderAffiche = builderAffiche;
    /** 菜单实例集合 */
    exports.mod = {
        menus: [],
        /** 销毁最后一个菜单并从数组中删除 */
        pop() {
            this.menus.pop().close();
        },
        /** 销毁第一个菜单并从数组中删除 */
        shift() {
            this.menus.shift().close();
        },
        closeAll() {
            modmenu.closeAll();
        },
        closeAll2() {
            this.menus.forEach(e => {
                e.close();
            });
            this.menus = [];
        }
    };
    /**
     * 显示菜单
     * @param {string} menuName 菜单名称
     * @param {*} menuData 菜单数据
     */
    function showMenu(menuName, menuData) {
        let newMenuData = buildMenuData(menuData);
        if (!_1.isJsHook) {
            return;
        }
        const mod1 = modmenu.create(menuName, newMenuData, { onchange: menuAutoCall });
        exports.mod.menus.push(mod1);
        /** 设置悬浮窗默认位置，type为1到9对应9个默认位置，x和y是px值 */
        mod1.position(1, Math.floor(device.getScreenWidth() * 0.1), Math.floor(device.getScreenHeight() * 0.1));
        /** 显示悬浮窗底部状态栏，imgui相关的信息 */
        mod1.state();
        /** 图标拖动到屏幕边缘自动隐藏，默认不开启 */
        mod1.edgeHiden(true);
        /** 调整菜单大小,横屏/竖屏 */
        mod1.size(Math.floor(device.getScreenWidth() * 0.5), Math.floor(device.getScreenHeight() * 0.9));
        if (_1.isXG) {
            mod1.size(Math.floor(device.getScreenWidth() * 0.3), Math.floor(device.getScreenHeight() * 0.8));
        }
    }
    exports.showMenu = showMenu;
    function findItem(callBack) {
        const item = allData.find(callBack);
        if (!item) {
            // logger.info(`功能 [${id}] 未找到!`);
            // logger.private(JSON.stringify(allData));
        }
        return item;
    }
    /**
     *  通过 id 查找元素
     * @param {string|number} id
     * @returns {MenuItem}
     */
    function findById(id) {
        return findItem((e) => e.id == id);
    }
    exports.findById = findById;
    /**
     *  通过 title 查找元素
     * @param {string} title
     * @returns {MenuItem}
     */
    function findByTitle(title) {
        return findItem((e) => e.title == title);
    }
    exports.findByTitle = findByTitle;
    },{".":7,"../types":5,"./logger":9}],11:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.call = void 0;
    const il2_util_1 = require("../utils/il2-util");
    const log_1 = require("../utils/log");
    const logger_1 = require("../utils/logger");
    const menu_1 = require("../utils/menu");
    const game_utils_1 = require("./game-utils");
    const types_1 = require("./types");
    exports.call = {
        data: {
            混沌地牢_: { item: [], extra: [], objs: [] },
            /**
             * @param {number} seasonID - 季节id
             */
            混沌地牢(seasonID) {
                if (this.混沌地牢_.item.length > 0) {
                    return this.混沌地牢_;
                }
                /** 如果没有传递 seasonID 就获取字典最后一个  */
                if (!seasonID) {
                    (0, il2_util_1.dicForEach)((0, game_utils_1.dataMgr)()._awakeDungeonData.field('<MapDic>k__BackingField').value, (k, v) => {
                        seasonID = k;
                    });
                }
                try {
                    (0, il2_util_1.listForEach)((0, game_utils_1.dataMgr)()._awakeDungeonData.method('GetMapInfoBySeasonID').invoke(seasonID), (item) => {
                        this.混沌地牢_.item.push((0, game_utils_1.getText)(item.field('_name').value));
                        this.混沌地牢_.extra.push(item.field('_id').value);
                        this.混沌地牢_.objs.push(item);
                    });
                }
                catch {
                    logger_1.logger.error('获取混沌地牢数据出现错误; 季节id:', seasonID);
                }
                return this.混沌地牢_;
            },
            时装_: { item: [], extra: [], objs: [] },
            时装() {
                if (this.时装_.item.length > 0) {
                    return this.时装_;
                }
                (0, il2_util_1.dicForEach)((0, game_utils_1.getCfg)('_costume_suit'), (k, v) => {
                    this.时装_.objs.push(v);
                });
                /** 通过流行值排序 */
                this.时装_.objs = this.时装_.objs.sort((a, b) => b.field('_fashion').value - a.field('_fashion').value);
                this.时装_.objs.forEach((item) => {
                    this.时装_.extra.push(item.field('_id').value);
                    this.时装_.item.push((0, game_utils_1.getText)(item.field('_title').value));
                });
                return this.时装_;
            },
            英雄词条_: { item: [], extra: [], objs: [] },
            英雄词条() {
                if (this.英雄词条_.item.length > 0) {
                    return this.英雄词条_;
                }
                (0, il2_util_1.dicForEach)((0, game_utils_1.itemHelper)().attrNameByType, (k, v) => {
                    this.英雄词条_.extra.push(k);
                    this.英雄词条_.item.push((0, game_utils_1.getText)(v));
                });
                return this.英雄词条_;
            },
        },
        全局加速(speed) {
            Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class('UnityEngine.Time').method("set_timeScale").invoke(speed);
        },
        /** 47:拾取范围 */
        英雄: {
            修改固定属性(attrId, attrValue, hero = (0, game_utils_1.battleMgr)().method('GetMyHero').invoke()) {
                hero.method('GetAttr').invoke(attrId).method('UpdateFixedAttr').invoke(parseInt(attrValue));
                hero.method('GetAttr').invoke(attrId).method('SetMaxLimitValue').invoke(parseInt(attrValue) * 2);
            },
            添加临时属性(attrId, value, hero = (0, game_utils_1.battleMgr)().method('GetMyHero').invoke()) {
                hero.method('GetAttr').invoke(attrId).method('AddTemporaryAttr').invoke(parseInt(value));
            },
            /** 1:望月忍;32:加波游;33:加波牧师 */
            变身(cfgId, hero = (0, game_utils_1.battleMgr)().method('GetMyHero').invoke()) {
                const Transfiguration = (0, il2_util_1.assembly)().class('Transfiguration').new();
                Transfiguration.method('Trans').invoke(hero, cfgId, true, ptr(0), true);
            },
            切换时装(key, hero = (0, game_utils_1.battleMgr)().method('GetMyHero').invoke()) {
                const dic = (0, game_utils_1.dataMgr)()._costumeData.field('SuitDic').value;
                hero.method('UpdateCostume').invoke(dic.method('get_Item').invoke(key));
            }
        },
        竞技场分数提交(ranking = (0, menu_1.findByTitle)('竞技场排名').val) {
            try {
                /** 获取排名信息 */
                const rank3 = (0, game_utils_1.dataMgr)()._arenaData.method('get_GroupPlayerList').invoke().method('get_Item').invoke(ranking - 1);
                /** 提交分数 */
                (0, game_utils_1.netMgr)().arenaProtocolHandler.method('SyncPoint').invoke(rank3.field('Score').value + Math.floor(Math.random() * 21));
                (0, game_utils_1.netMgr)().arenaProtocolHandler.method('GameScore').invoke(rank3.field('Score').value + Math.floor(Math.random() * 21), 1, 1);
            }
            catch (error) {
                /** 提交分数 */
                (0, game_utils_1.netMgr)().arenaProtocolHandler.method('GameScore').invoke(1234 + Math.floor(Math.random() * 21), 1, 1);
                logger_1.logger.error('还没有进入过竞技场,或者当前竞技场人数不足三个!请再次点击', error);
            }
        },
        设置深渊难度(level) {
            /** 重置深渊难度 */
            (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('RollbackAll').invoke();
            /** 设置深渊难度 */
            (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('ChooseDegree').invoke(level);
        },
        奖励: {
            /** 任务类型,方便调用 */
            taskTypes: {
                每日: "Daily", 活动: "Activity", EX3: "Adventure", 竞技场: "Arena", 公会: "Guild", 执照: "BattlePassTask", 回归: "AFKBack", _未知_地牢内部: "DungeonInner", 成就: "Achievement", 新手: "Noob", 职业特训: "Career",
                _未知_BuffChess: "BuffChess", _未知_宠物战役: "PetBattle", _未知_深渊狩猎: "AbyssHunt", _未知_绘制任务: "PlotTask", 团本: "DungeonTeam", _未知_返回: "Return", 家园: "Homeland", _未知_魔女对战任务: "WitchShamBPTask",
                _未知_魔女: "WitchSham", _未知_传家宝战役: "HeirloomBattlePassTask", _未知_觉醒地牢: "AwakeDungeonTask", _未知_最早的学院: "PioneerAcademy", _未知_觉醒的熔炉: "AwakeForgeDitto",
            },
            // TOOD 字典获取时有bug,因为泛型不一致
            /**
             * 通过任务类型获取任务列表
             * @param {string} type 任务类型
             * @param {boolean} needActive 是否需要活跃
             * @returns {Il2Cpp.Object} 任务列表
             */
            getTaskListByType(type, needActive = false) {
                const taskData = (0, game_utils_1.dataMgr)()._taskData;
                const TaskType = (0, il2_util_1.assembly)().class('Data.TaskType').field(type).value;
                let tasks = taskData.method('GetTaskListByType').invoke(TaskType, needActive);
                if (!needActive && tasks.method("get_Count").invoke() == 0) {
                    try {
                        tasks = taskData.field('mTaskCfgTypeList').value.method("get_Item").invoke(TaskType.field('value__').value);
                    }
                    catch (error) {
                        logger_1.logger.error('字典里没有这个任务类型', error);
                    }
                }
                return tasks;
            },
            /**
             * 通过任务类型获取任务列表
             * @param {string} type 任务类型
             * @param {number} subType 任务子类型
             * @param {boolean} needActive 是否需要活跃
             * @returns {Il2Cpp.Object} 任务列表
             */
            getTaskListByType2(type, subType, needActive = false) {
                const taskData = (0, game_utils_1.dataMgr)()._taskData;
                const TaskType = (0, il2_util_1.assembly)().class('Data.TaskType').field(type).value;
                let tasks = taskData.method('GetTaskListByType').overload('Data.TaskType', 'System.Int32', 'System.Boolean').invoke(TaskType, subType, needActive);
                return tasks;
            },
            /**
             * 通过ID获取任务
             * @param {number} id 任务ID
             * @returns {Il2Cpp.Object} 任务
             */
            getTaskById(id) {
                try {
                    return (0, game_utils_1.dataMgr)()._taskData.method('GetTaskById').invoke(id);
                }
                catch (error) {
                    logger_1.logger.error(`获取任务[${id}]失败`, error);
                }
            },
            /**
             * 更新任务进度(完成任务)
             * @param {Il2Cpp.Object} task
             */
            taskUpdate(task) {
                (0, game_utils_1.netMgr)().newTaskProtocolHandler.method('TaskUpdate').invoke(task.field('_id').value, 1, 2, task.field('_count').value == 0 ? 100000 : 9999999);
            },
            /**
             * 领取任务奖励
             * @param {Il2Cpp.Object} task
             */
            taskReward(task) {
                (0, game_utils_1.netMgr)().newTaskProtocolHandler.method('TaskReward').invoke(task.field('_id').value, task.field('_task_type').value);
            },
            /**
             * 更新任务进度(完成新手任务)
             * @param {Il2Cpp.Object} task
             */
            noobFinishTask(task) {
                (0, game_utils_1.netMgr)().noobProtocolHandler.method('FinishTask').invoke(task.field('_id').value);
            },
            /**
             * 领取活动任务奖励
             * @param {Il2Cpp.Object} task
             */
            activityTaskReward(task) {
                (0, game_utils_1.netMgr)().activityTaskProtocolHandler.method('TaskReward').invoke(task.field('_activity_task').value);
            },
            /**
             * 领取职业导师任务奖励
             */
            taskRoleTaskReward(task) {
                (0, game_utils_1.netMgr)().newTaskProtocolHandler.method('TaskRoleTaskReward').invoke(task.field('_id').value);
            },
            /**
             * 完成任务并领取奖励
             * @param {string} list 任务类型
             * @param {Function} callBack 过滤的任务条件
             */
            taskFinishAndReceiveAward(list, callBack = (task) => false) {
                (0, il2_util_1.listForEach)(list, (task) => {
                    task = task.method('get_TaskCfg').invoke();
                    if (callBack(task))
                        return;
                    this.taskUpdate(task);
                    this.taskReward(task);
                });
            },
            /**
             * 完成任务并领取奖励
             * @param {string} type 任务类型
             * @param {boolean} needActive 是否需要活跃
             * @param {Function} callBack 过滤的任务条件
             */
            taskFinishAndReceiveAward2(type, needActive = false, callBack = (task) => false) {
                this.taskFinishAndReceiveAward(this.getTaskListByType(type, needActive), callBack);
            },
            每日() {
                this.taskFinishAndReceiveAward2('Daily', true);
                // 每日任务宝箱
                for (let index = 1; index <= 3; index++) {
                    (0, game_utils_1.netMgr)().newTaskProtocolHandler.method('TaskDailyBox').invoke(index);
                }
            },
            开拓之路() {
                this.taskFinishAndReceiveAward2('PioneerAcademy');
                // 领取全部章节奖励
                for (let index = 1; index <= 7; index++) {
                    (0, game_utils_1.netMgr)().pioneerAcademyProtocolHandler.method('NodeReward').invoke(index, 1);
                    (0, game_utils_1.netMgr)().pioneerAcademyProtocolHandler.method('NodeReward').invoke(index, 2);
                }
            },
            团本() {
                this.taskFinishAndReceiveAward2('DungeonTeam');
                // 领取全部荣誉等级奖励
                for (let type = 0; type < 3; type++) {
                    for (let level = 1; level <= 10; level++) {
                        (0, game_utils_1.netMgr)().newTaskProtocolHandler.method('TaskRaidHonorLevelReward').invoke(type, level);
                    }
                }
            },
            EX3() {
                this.taskFinishAndReceiveAward2('Adventure');
                /** 当前勇者等级 */
                const curLevel = (0, game_utils_1.dataMgr)()._adventureData.field('<CurLevel>k__BackingField').value;
                // 领取全部勇者等级奖励
                for (let lv = 1; lv <= curLevel; lv++) {
                    (0, game_utils_1.netMgr)().newTaskProtocolHandler.method('AdventureLevelRewardGet').invoke(lv);
                }
            },
            执照() {
                this.taskFinishAndReceiveAward2('BattlePassTask');
                // 签到
                (0, game_utils_1.netMgr)().battlePassProtocolHandler.method('Sign').invoke();
                // 领取全部奖励
                (0, game_utils_1.netMgr)().battlePassProtocolHandler.method('Reward').invoke(0);
            },
            /** 是否需要时装 */
            needFash: false,
            成就() {
                this.taskFinishAndReceiveAward2('Achievement', false, (task) => !this.needFash && /魂卡-|装备一把/.test((0, game_utils_1.getText)(task.field('_describe').value)));
            },
            /** 是否需要经验 */
            needExp: true,
            /** 职业对应 Id */
            career: { 战士: 1, 游侠: 2, 法师: 3, 牧师: 4, 忍者: 5 },
            职业特训(职业) {
                const callBack = (task) => !this.needExp && /小秘境试炼|成长之路/.test((0, game_utils_1.getText)(task.field('_title_describe').value));
                (0, il2_util_1.listForEach)(this.getTaskListByType2('Career', 职业), (task) => {
                    task = task.method('get_TaskCfg').invoke();
                    if (callBack(task))
                        return;
                    this.taskUpdate(task);
                    this.taskRoleTaskReward(task);
                });
            },
            活动(needActive = true) {
                (0, il2_util_1.listForEach)(this.getTaskListByType('Activity', needActive), (task) => {
                    task = task.method('get_TaskCfg').invoke();
                    this.taskUpdate(task);
                    this.activityTaskReward(task);
                });
            },
            新手() {
                (0, il2_util_1.listForEach)(this.getTaskListByType('Noob'), (item) => {
                    let task = item.method('get_NewbTaskCfg').invoke();
                    this.noobFinishTask(task);
                    this.taskReward(task);
                });
                /** 金蛙币 */
                for (let index = 1; index <= 7; index++) {
                    (0, game_utils_1.netMgr)().noobProtocolHandler.method('TaskReward').invoke(index);
                }
                /** 紫金币 */
                for (let index = 11; index <= 17; index++) {
                    (0, game_utils_1.netMgr)().noobProtocolHandler.method('TaskReward').invoke(index);
                }
            },
            回归() {
                const ids = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)());
                (0, il2_util_1.listForEach)(this.getTaskListByType('AFKBack'), (item) => {
                    let task = item.method('get_ReturnTaskCfg').invoke();
                    this.taskUpdate(task);
                    // this.taskReward(task);
                    // netMgr().afkBackProtocolHandler.method('NewTaskReward').invoke(task.field('_id').value);
                    ids.method('Add').invoke(task.field('_id').value);
                });
                // 回归的免费礼物(传家宝和能量水晶自选)
                (0, game_utils_1.netMgr)().afkBackProtocolHandler.method('NewAfkFirstGift').invoke();
                // netMgr().afkBackProtocolHandler.method('NewAfkTaskAll').invoke(ids);
                (0, game_utils_1.dataMgr)()._taskData.field('AFKServerTaskData').value.method('SendTaskRewardReceiveAll').invoke(ids);
            },
            勇者等级S() {
                let count = 0;
                this.taskFinishAndReceiveAward2('Adventure', false, (task) => count++ >= 95);
            },
            冒险每周奖励() { (0, game_utils_1.netMgr)().newTaskProtocolHandler.method('AdventureWeeklyRewardGet').invoke(); },
            回归7天签到() { for (let index = 0; index < 7; index++) {
                (0, game_utils_1.netMgr)().afkBackProtocolHandler.method('NewDailyReward').invoke(index + 1);
            } },
            阿兔学堂: {
                bdId: -1,
                /** 选择bd 进阶魔女第一个:101, 进阶魔女第一个:601*/
                selectBD(bdId) {
                    (0, game_utils_1.netMgr)().newStrongProtocolHandler.method('ChooseBuild').invoke(bdId);
                    this.bdId = bdId;
                },
                /** 完成阿兔学堂任务,并获取奖励 */
                get() {
                    if (this.bdId === -1) {
                        logger_1.logger.toast('bd未选择');
                        return;
                    }
                    /** 阿兔学堂数据 */
                    const data = (0, game_utils_1.dataMgr)()._nstrong;
                    /** 阿兔学堂目标数据 */
                    const targetData = data.method('get_targer').invoke();
                    /** 目标字典 */
                    const dic = targetData.field('_targets').value;
                    /** 获取任务列表，并存储 */
                    const ar = [];
                    (0, il2_util_1.dicForEach)(dic, (k, v) => {
                        ar.push(v.field('<cfg>k__BackingField').value);
                    });
                    /** 根据阶段排序 */
                    ar.sort((obj1, obj2) => obj1.field('_stage').value - obj2.field('_stage').value);
                    /** 完成任务 */
                    ar.forEach((e) => {
                        (0, game_utils_1.netMgr)().newStrongProtocolHandler.method('TaskFinish').invoke(this.bdId, parseInt(e.field('_id').value));
                    });
                    /** 获取奖励 */
                    for (let index = 1; index <= 10; index++) {
                        (0, game_utils_1.netMgr)().newStrongProtocolHandler.method('GrowthReward').invoke(index);
                    }
                },
            },
            兑换码() {
            }
        },
        buff: {
            /**
             * 添加 buff
             * @param {number|number[]} id buffId
             * @param {Il2Cpp.Object} hero 要添加 buff 的英雄对象
             */
            add(id, hero = (0, game_utils_1.battleMgr)().method("GetMyHero").invoke()) {
                if (!Array.isArray(id)) {
                    id = [id];
                }
                id.forEach((item) => {
                    hero.method("AddGloableBuff").invoke(item);
                });
            },
            /**
             * 删除 buff
             * @param {number|number[]} id buffId
             * @param {Il2Cpp.Object} hero 要删除 buff 的英雄对象
             */
            remove(id, hero = (0, game_utils_1.battleMgr)().method("GetMyHero").invoke()) {
                if (!Array.isArray(id)) {
                    id = [id];
                }
                id.forEach((item) => {
                    hero.method("RemoveBuff").overload("System.Int32").invoke(item);
                });
            },
            /**
             * 切换 buff 开启/关闭
             * @param {import("../types").MenuItem} modeItem
             * @param {Il2Cpp.Object} hero 要添加/删除 buff 的英雄对象
             */
            switch(modeItem, hero = (0, game_utils_1.battleMgr)().method("GetMyHero").invoke()) {
                if (modeItem.val) {
                    this.add(modeItem.extra, hero);
                }
                else {
                    this.remove(modeItem.extra, hero);
                }
            },
            /**
             * 清除全部 buff
             * @param {Il2Cpp.Object} hero 要清除 buff 的英雄对象
             */
            clearAll(hero = (0, game_utils_1.battleMgr)().method("GetMyHero").invoke()) {
                hero.method("ClearAllBuff").invoke();
            },
            /**
             * 重置所有 buff 时间
             * @param {Il2Cpp.Object} hero 要重置 buff 的英雄对象
             */
            reSetAllBuffTime(hero = (0, game_utils_1.battleMgr)().method("GetMyHero").invoke()) {
                const buffList = hero.method("GetBuffList").invoke();
                (0, il2_util_1.listForEach)(buffList, (item) => {
                    item.method('ReSetBuffTime').invoke();
                });
            },
            /**
             * 添加全部开关 buff
             * @param {Il2Cpp.Object} hero 要添加 buff 的英雄对象
             */
            cyclic(hero = (0, game_utils_1.battleMgr)().method("GetMyHero").invoke()) {
                const buffList = hero.method("GetBuffList").invoke()['BUFF杀怪', '保暖鞋子', '绝对护甲', '回蓝', '无限火力', '无敌伤增', '无敌护穿', '无敌元穿', '无敌暴击', '强袭'].forEach((title) => {
                    let item = (0, menu_1.findByTitle)(title);
                    if (item.val && !(0, il2_util_1.listExists)(buffList, (buff) => item.extra.includes(buff.field('buffCfgId').value))) {
                        this.add(item.extra, hero);
                    }
                });
            },
            /**
             * 添加全部开关 buff,只迭代 list 一次
             * @param {Il2Cpp.Object} hero 要添加 buff 的英雄对象
             */
            cyclic2(hero = (0, game_utils_1.battleMgr)().method("GetMyHero").invoke()) {
                const buffList = hero.method("GetBuffList").invoke();
                let buffOf = ['BUFF杀怪', '保暖鞋子', '绝对护甲', '回蓝', '无限火力', '无敌伤增', '无敌护穿', '无敌元穿', '无敌暴击', '强袭']
                    .map((title) => (0, menu_1.findByTitle)(title))
                    .filter((item) => item?.val)
                    .map((item) => item.extra)
                    .flat();
                if (buffOf?.length > 0) {
                    buffOf = (0, il2_util_1.listNotExistArr)(buffOf, buffList, (buff, buffId) => buffId != buff.field('buffCfgId').value);
                    this.add(buffOf, hero);
                }
            },
            /**
             * 添加全部开关 buff ,不判断是否有
             * @param {Il2Cpp.Object} hero 要添加 buff 的英雄对象
             */
            cyclic3(hero = (0, game_utils_1.battleMgr)().method("GetMyHero").invoke()) {
                // ['BUFF杀怪', '保暖鞋子', '绝对护甲', '回蓝', '无限火力']
                ['BUFF杀怪', '保暖鞋子', '绝对护甲', '回蓝', '无限火力', '无敌伤增', '无敌护穿', '无敌元穿', '无敌暴击', '强袭']
                    .forEach((title) => {
                    const item = (0, menu_1.findByTitle)(title);
                    if (item?.val) {
                        this.add(item.extra, hero);
                    }
                });
            },
        },
        地牢: {
            异兽狂潮: {
                /** 提交关卡完成 */
                commit(mapId) {
                    (0, game_utils_1.netMgr)().dungeonCrazyTideProtocolHandler.method('Commit').invoke(mapId);
                },
                mapId: 1,
                level: 101,
                速通() {
                    const arr = [];
                    (0, il2_util_1.dicForEach)((0, game_utils_1.getCfg)('_dungeon_crazy_tide_map'), (k, v) => {
                        const temp = { mapId: k, _level_list: [] };
                        (0, il2_util_1.listForEach)(v.field('_level_list').value, (e) => {
                            temp._level_list.push(e);
                        });
                        arr.push(temp);
                    });
                    if (arr.length == 0) {
                        logger_1.logger.error('数据获取失败,先开打一次异兽狂潮!');
                        return;
                    }
                    for (let i = 0; i < arr[0]._level_list.length; i++) {
                        for (let j = 0; j < arr.length; j++) {
                            this.mapId = arr[j].mapId;
                            this.level = arr[j]._level_list[i];
                            game_utils_1.dungeon.localStart(this.mapId, game_utils_1.dungeon.types.异兽狂潮, this.level, 0, 0);
                            this.commit(this.level);
                            game_utils_1.dungeon.box(1, 0, 0);
                            game_utils_1.dungeon.localEnd(game_utils_1.dungeon.types.异兽狂潮, this.level, 0, this.mapId, 0, 1, 7, 0, 0, 0);
                            game_utils_1.dungeon.leave();
                        }
                    }
                },
                宝珠() {
                    game_utils_1.dungeon.localStart(1, game_utils_1.dungeon.types.异兽狂潮, 101, 0, 0);
                    game_utils_1.dungeon.box(20000, 0, 0);
                    game_utils_1.dungeon.leave();
                },
            }
        },
        速通: {
            混沌地牢(mapid = (0, menu_1.findByTitle)('混沌地牢地图').extra[(0, menu_1.findByTitle)('混沌地牢地图').val], startLevel = (0, menu_1.findByTitle)('混沌地牢开始层数').val, endLevel = (0, menu_1.findByTitle)('混沌地牢结束层数').val) {
                for (let level = startLevel; level <= endLevel; level++) {
                    game_utils_1.dungeon.localStart(mapid, 59, level, 0, 0);
                    /** 提交关卡完成 */
                    (0, game_utils_1.netMgr)().dungeonAwakeProtocolHandler.method('Commit').invoke(mapid, 1, level, 3, 300 + Math.floor(Math.random() * 61), 0);
                    game_utils_1.dungeon.leave();
                }
            },
            大秘境(startLevel = (0, menu_1.findByTitle)('大秘境开始层数').val, endLevel = (0, menu_1.findByTitle)('大秘境结束层数').val) {
                const type = 36, star = 7, useTime = Math.floor(Math.random() * 29);
                for (let level = startLevel + 1000; level <= endLevel + 1000; level++) {
                    game_utils_1.dungeon.localStart(0, type, level, 0, 0);
                    /** 提交关卡完成 */
                    (0, game_utils_1.netMgr)().dungeonDbiProtocolHandler.method('Finish').invoke(level, useTime, star);
                    game_utils_1.dungeon.leave();
                }
            },
            小秘境(startLevel = (0, menu_1.findByTitle)('小秘境开始层数').val, endLevel = (0, menu_1.findByTitle)('小秘境结束层数').val) {
                const list = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysByte)());
                list.method("Add").invoke(2);
                list.method("Add").invoke(1);
                list.method("Add").invoke(3);
                for (let level = startLevel + 1000; level <= endLevel + 1000; level++) {
                    game_utils_1.dungeon.localStart(0, 35, level, 0, 0);
                    /** 获取小秘境星星 */
                    (0, game_utils_1.netMgr)().newInnersProtocolHandler.method('Star').invoke(list);
                    /** 完成小秘境 */
                    (0, game_utils_1.netMgr)().newInnersProtocolHandler.method('Finish').invoke(level, 100 + Math.floor(Math.random() * 19));
                    game_utils_1.dungeon.leave();
                }
                logger_1.logger.toast('断网一下,或者重新进游戏刷新');
            },
            /**
             *
             * @param {number} type 1|2|3|4|5
             */
            资源副本(type = 1) {
                for (let index = 1; index <= 8; index++) {
                    game_utils_1.dungeon.localStart(type * 100 + index, 56, type * 100 + index, 0, 0);
                    /** 地牢开始 */
                    // netMgr().dungeonProtocolHandler.method('LocalStart').invoke(type * 100 + index, 56, type * 100 + index, 0, 0);
                    /** 提交星星 */
                    (0, game_utils_1.netMgr)().dungeonResourceProtocolHandler.method('CommitStar').invoke(3, 0);
                    /** 结束地牢 */
                    // netMgr().dungeonProtocolHandler.method('LocalEnd').invoke(56, type * 100 + index, 0, 0, 100 + Math.floor(Math.random() * 21), 1, 3, 0, 0, 0);
                    /** 离开地牢 */
                    // netMgr().dungeonProtocolHandler.method('Leave').invoke();
                    game_utils_1.dungeon.leave();
                }
            },
            魂卡() {
                for (let level = 1; level < 12; level++) {
                    game_utils_1.dungeon.localStart(level, 15, level, 0, 0);
                    /** 获取通关魂卡星星 */
                    (0, game_utils_1.netMgr)().dungeonCardProtocolHandler.method('StarCommit').invoke(3);
                    game_utils_1.dungeon.leave();
                }
            },
            魂卡奖励() {
                for (let level = 1; level < 12; level++) {
                    game_utils_1.dungeon.localStart(level, 15, level, 0, 0);
                    /** 获取通关魂卡星星 */
                    (0, game_utils_1.netMgr)().dungeonCardProtocolHandler.method('StarCommit').invoke(-1 - Math.floor(Math.random() * 21));
                    game_utils_1.dungeon.leave();
                }
            },
            深渊() {
                const buffArray = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)());
                for (let level = 1; level <= 15; level++) {
                    /** 重置深渊难度 */
                    (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('RollbackAll').invoke();
                    /** 设置深渊难度 */
                    (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('ChooseDegree').invoke(level);
                    /** 通关 5 次 */
                    for (let index = 1; index <= 5; index++) {
                        game_utils_1.dungeon.localStart(0, 30, level, index, 0);
                        /** 深渊完成 */
                        (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('Finish').invoke(100 + Math.floor(Math.random() * 21), buffArray);
                        game_utils_1.dungeon.leave();
                    }
                    /** 领取星级奖励 */
                    for (let index = 1; index <= 3; index++) {
                        (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('OpenBox').invoke(level, index);
                    }
                }
            },
            深渊2() {
                const buffArray = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)());
                /** 深渊完成 */
                (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('Finish').invoke(100 + Math.floor(Math.random() * 21), buffArray);
            },
        },
        扫荡: {
            小秘境: {
                /** 当前房间key,0-49 */
                roomKey: 0,
                /** 当前步骤,从1开始,-1代表扫荡中 */
                step: 1,
                /** 消耗体力的房间号 */
                romms: [4101, 4102, 4103, 4104, 4105, 4106, 4107, 4108, 4109, 4101],
                /** 不消耗体力的房间号 */
                freeRooms: [2921, 2922, 2923, 2924, 2925, 7921, 7922, 7923, 7924, 7925],
                /** 定时器 ID */
                setTimeoutID: 0,
                /** 扫荡次数 */
                count: 0,
                /** 扫等级 1000 + 层数 */
                level: 1240,
                /** 是否免体力 */
                free: false,
                /** 扫荡速度 */
                speed: 2000,
                /** 调用扫荡 */
                call() {
                    const rooms = this.free ? this.freeRooms : this.romms;
                    switch (this.step) {
                        case 1:
                            this.step = -1; // 让他条件永远不成立
                            /** 地牢开始 */
                            (0, game_utils_1.netMgr)().dungeonProtocolHandler.method('LocalStart').invoke(0, 35, this.level, 0, 0);
                            this.setTimeoutID = setTimeout(() => { this.step = 2; }, 100);
                            break;
                        case 2:
                            this.count++;
                            this.step = -1; // 让他条件永远不成立
                            /** 进房间 */
                            (0, game_utils_1.netMgr)().newInnersProtocolHandler.method('EnterRoom').invoke(this.roomKey, rooms[this.roomKey % 10], 1);
                            this.setTimeoutID = setTimeout(() => { this.step = 3; }, 100);
                            break;
                        case 3:
                            this.step = -1; // 让他条件永远不成立
                            /** 获取小秘境奖励 */
                            (0, game_utils_1.netMgr)().treasureProtocolHandler.method('Box').invoke(31, this.roomKey % 10 * 100, this.roomKey / 10 * 100);
                            this.setTimeoutID = setTimeout(() => {
                                if (this.roomKey == 49) {
                                    this.step = 4;
                                } // 退出地牢
                                else {
                                    this.step = 2;
                                } // 进入新房间
                                this.roomKey++; // 领取一次奖励房间号加1
                            }, this.speed);
                            break;
                        case 4:
                            this.leave();
                            break;
                    }
                },
                /** 离开地牢 */
                leave() {
                    clearTimeout(this.setTimeoutID); //清除定时器
                    /** 离开地牢 */
                    (0, game_utils_1.netMgr)().dungeonProtocolHandler.method('Leave').invoke();
                    this.roomKey = 0;
                    this.step = 1;
                }
            },
            钥匙: {
                /** 当前步骤,从1开始,-1代表扫荡中 */
                step: 1,
                /** 定时器 ID */
                setTimeoutID: 0,
                /** 当前扫荡钥匙下标 */
                index: 0,
                /** 扫等级 层数 */
                level: 240,
                /** 所有钥匙key */
                keyarr: [],
                /** 钥匙级别 */
                keyLv: 0,
                call() {
                    switch (this.step) {
                        case 1:
                            this.step = -1; // 让他条件永远不成立
                            /** 获取所有钥匙key */
                            const PassData = (0, game_utils_1.dataMgr)()._PassData;
                            for (let index = 0; index <= this.keyLv; index++) {
                                //蓝色:0;紫色:1;金色:2;红色:3
                                let DataItems = PassData.method("FilterBatchQualityData").invoke(index);
                                (0, il2_util_1.listForEach)(DataItems, (element) => {
                                    this.keyarr.push(element.method("get_PassKey").invoke());
                                });
                            }
                            this.step = 2;
                            break;
                        case 2:
                            this.step = -1; // 让他条件永远不成立
                            /** 进入地牢 */
                            (0, game_utils_1.netMgr)().dungeonProtocolHandler.method('LocalStart').invoke(0, 7, this.level, this.keyarr[this.index], 0);
                            /** 获取宝箱 */
                            (0, game_utils_1.netMgr)().treasureProtocolHandler.method('Box').invoke(5, 0, 0);
                            this.index++;
                            this.setTimeoutID = setTimeout(() => { this.step = 3; }, 1000);
                            break;
                        case 3:
                            this.leave();
                            break;
                    }
                },
                /** 离开地牢 */
                leave() {
                    clearTimeout(this.setTimeoutID); //清除定时器
                    /** 离开地牢 */
                    (0, game_utils_1.netMgr)().dungeonProtocolHandler.method('Leave').invoke();
                    if (this.index < this.keyarr.length) {
                        this.step = 2;
                    }
                    else {
                        (0, menu_1.findByTitle)('钥匙扫荡').val = false;
                        this.keyarr = [];
                        this.index = 0;
                        this.step = 1;
                    }
                }
            },
            混沌地牢(mapid = (0, menu_1.findByTitle)('混沌地牢地图').extra[(0, menu_1.findByTitle)('混沌地牢地图').val], level = (0, menu_1.findByTitle)('混沌地牢扫荡层数').val) {
                game_utils_1.dungeon.localStart(mapid, 59, level, 0, 0);
                /** 触发隐藏事件1 */
                (0, game_utils_1.netMgr)().dungeonAwakeProtocolHandler.method('EventOpt').invoke(1, 1);
                /** 完成隐藏事件1 */
                (0, game_utils_1.netMgr)().dungeonAwakeProtocolHandler.method('EventOpt').invoke(3, 1);
                /** 触发隐藏事件2 */
                (0, game_utils_1.netMgr)().dungeonAwakeProtocolHandler.method('EventOpt').invoke(1, 2);
                /** 完成隐藏事件2 */
                (0, game_utils_1.netMgr)().dungeonAwakeProtocolHandler.method('EventOpt').invoke(3, 2);
                /** 提交关卡完成 */
                (0, game_utils_1.netMgr)().dungeonAwakeProtocolHandler.method('Commit').invoke(mapid, 1, level, 3, 300 + Math.floor(Math.random() * 61), 0);
                /** boos奖励 */
                (0, game_utils_1.netMgr)().treasureProtocolHandler.method('Box').invoke(3, 17, 60);
                /** 事件奖励1 */
                (0, game_utils_1.netMgr)().dungeonAwakeProtocolHandler.method('EventReward').invoke(1, 15, 58);
                /** 事件奖励2 */
                (0, game_utils_1.netMgr)().dungeonAwakeProtocolHandler.method('EventReward').invoke(2, 19, 62);
            },
            魂卡(level = (0, menu_1.findByTitle)('魂卡扫荡级别').val + 1) {
                game_utils_1.dungeon.localStart(level, 15, level, 0, 0);
                /** 获取宝箱奖励 */
                (0, game_utils_1.netMgr)().treasureProtocolHandler.method('Box').invoke(0, 0, 0);
                game_utils_1.dungeon.leave();
            },
            深渊(level = 15) {
                const buffArray = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)());
                /** 重置深渊难度 */
                (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('RollbackAll').invoke();
                /** 设置深渊难度 */
                (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('ChooseDegree').invoke(level);
                /** 通关 5 次 */
                for (let index = 0; index < 5; index++) {
                    game_utils_1.dungeon.localStart(0, 30, level, index, 0);
                    /** 深渊完成 */
                    (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('Finish').invoke(100 + Math.floor(Math.random() * 21), buffArray);
                    /** 打开深渊宝箱 */
                    (0, game_utils_1.netMgr)().treasureProtocolHandler.method('Box').invoke(1, 400, 400);
                    game_utils_1.dungeon.leave();
                }
                /** 领取星级奖励 */
                for (let index = 1; index <= 3; index++) {
                    (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('OpenBox').invoke(level, index);
                }
            },
            深渊2(level = 15) {
                const buffArray = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)());
                game_utils_1.dungeon.localStart(0, 30, level, 1, 0);
                /** 深渊完成 */
                (0, game_utils_1.netMgr)().abyssalHuntProtocolHandler.method('Finish').invoke(100 + Math.floor(Math.random() * 21), buffArray);
                /** 打开深渊宝箱 */
                (0, game_utils_1.netMgr)().treasureProtocolHandler.method('Box').invoke(1, 400, 400);
                game_utils_1.dungeon.leave();
            },
        },
        暗金购买: {
            /**
             *
             * @param {number} type 购买的类型 [1->普通, 2->金色词条, 3->四孔]
             * @param {string} rege 需要购买的暗金名称,支持正则表达式
             * @param {number} level 装备等级
             */
            main(type = 1, rege, level) {
                /** 商店列表字段名称 */
                const listName = type == 1 ? 'OnSaleArmorNormallist' : 'OnSaleArmorSuperlist';
                /** 商店购买方法名称 */
                const buyName = type == 1 ? 'RandArmorBuy' : 'RandSuperarmorBuy';
                /** 刷新商店方法名称 */
                const freshName = type == 1 ? 'RandArmorRefresh' : 'RandSuperarmorRefresh';
                (0, il2_util_1.listForEach)((0, game_utils_1.dataMgr)()._storeData.field(listName).value, element => {
                    let itemInfo = element.method('GetStoreItemInfoByLevel').invoke(level); //通过等级获取商品信息
                    let confData = itemInfo.field('confData').value; //获取商品配置
                    let 名字 = (0, game_utils_1.getText)(confData.field('_name').value);
                    if (!new RegExp(rege).test(名字))
                        return;
                    let pos = itemInfo.field('pos').value;
                    let reqId = confData.field('_goods_id').value;
                    let 已购买 = itemInfo.field('times').value;
                    let 限购 = confData.field('_buy_lim').value;
                    if (type == 2 && pos > 4)
                        return;
                    if (type == 3 && pos < 5)
                        return;
                    (0, game_utils_1.netMgr)().storeProtocolHandler.method(buyName).invoke(pos, reqId, 限购 - 已购买, level);
                });
                (0, game_utils_1.netMgr)().storeProtocolHandler.method(freshName).invoke();
            },
            普通(zbName = (0, menu_1.findByTitle)('购买的装备名称').val, level = (0, menu_1.findByTitle)('暗金购买等级').val) {
                this.main(1, zbName, level);
            },
            金色(zbName = (0, menu_1.findByTitle)('购买的装备名称').val, level = (0, menu_1.findByTitle)('暗金购买等级').val) {
                this.main(2, zbName, level);
            },
            四孔(zbName = (0, menu_1.findByTitle)('购买的装备名称').val, level = (0, menu_1.findByTitle)('暗金购买等级').val) {
                this.main(3, zbName, level);
            },
        },
        分解: {
            装备(lv = (0, menu_1.findByTitle)('装备保留等级').val, 小符文 = (0, menu_1.findByTitle)('装备保留小符文孔').val, 词条品质 = (0, menu_1.findByTitle)('装备保留词条品质').val, 词条数 = (0, menu_1.findByTitle)('装备保留词条数量').val) {
                if (!(0, menu_1.findByTitle)('分解装备')?.val)
                    return;
                const smithData = (0, game_utils_1.dataMgr)()._smithData; //获取铁匠数据
                const items = smithData.method("GetBreakDownItems").invoke(); //获取列表
                const UInt32List = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)()); //存储要分解的key
                (0, il2_util_1.listForEach)(items, (element) => {
                    let conf_item = element.method('get_itemCfg').invoke(); //项配置
                    if (element.field('IsProtected').value)
                        return; //被锁住的
                    if (element.field('type').value == 101)
                        return; //武器
                    let 合格词条 = 0;
                    (0, il2_util_1.listForEach)(element.field('attrList').value, element => {
                        if (element.field('perMille').value > 词条品质) {
                            合格词条++;
                        }
                    }, false);
                    if ((element.field('coreRuneAffix').value.method("get_Count").invoke() == 1 && //有大符文孔的
                        element.field('crysRuneAffix').value.method("get_Count").invoke() >= 小符文 && //有n个小符文孔的
                        element.field('quality').value == 5 && /**品质是红的 */
                        conf_item.field("_lv").value >= lv && //等级必须大于或者等于需要等级
                        合格词条 >= 词条数 //合格词条数
                    ) || element.field('quality').value == 6 // 
                    )
                        return;
                    UInt32List.method("Add").invoke(element.field('itemKey').value);
                }, false);
                /** 分解 */
                (0, game_utils_1.netMgr)().itemProtocolHandler.method("Resolve").invoke(UInt32List);
            },
            武器(分解品质 = (0, menu_1.findByTitle)('武器分解品质').val) {
                if (!(0, menu_1.findByTitle)('分解武器')?.val)
                    return;
                const smithData = (0, game_utils_1.dataMgr)()._smithData; //获取铁匠数据
                const items = smithData.method("GetBreakDownItems").invoke(); //获取列表
                const UInt32List = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)()); //存储要分解的key
                (0, il2_util_1.listForEach)(items, (element) => {
                    if (element.field('IsProtected').value)
                        return; //被锁住的
                    if (element.field('type').value != 101)
                        return; //不是武器
                    if (element.field('quality').value > 分解品质)
                        return; //品质过滤
                    if (element.field('lv').value > 1)
                        return; //等级不为一,就是已经强化过
                    UInt32List.method("Add").invoke(element.field('itemKey').value);
                }, false);
                /** 分解 */
                (0, game_utils_1.netMgr)().itemProtocolHandler.method("Resolve").invoke(UInt32List);
            },
            符文(词条品质 = (0, menu_1.findByTitle)('符文保留词条品质').val) {
                if (!(0, menu_1.findByTitle)('分解符文')?.val)
                    return;
                const NRuneData = (0, game_utils_1.dataMgr)()._nrune; //获取符文数据
                const RuneCoreList = NRuneData.method("GetRuneCoreList").invoke(true); //获取列表
                const UInt32List = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)()); //存储要分解的key
                (0, il2_util_1.listForEach)(RuneCoreList, (element) => {
                    let conf_nrune_big = element.method('get_cfg').invoke(); //项配置
                    let NRuneAttr = element.field('attrs').value.method("get_Item").invoke(0); //词条
                    if (element.field('isLock').value)
                        return; //锁住的
                    if (element.method('get_isEquipped').invoke())
                        return; //装备的
                    if (NRuneAttr.field('ratio').value >= 词条品质 //词条品质过滤
                        && conf_nrune_big.field('_level').value >= 7 //并且等级为7以上
                    )
                        return;
                    UInt32List.method("Add").invoke(element.field('runekey').value);
                }, false);
                /** 分解 */
                (0, game_utils_1.netMgr)().newRuneProtocolHandler.method("Resolve").invoke(UInt32List);
            },
            宝石(分解品质 = (0, menu_1.findByTitle)('宝石分解品质').val) {
                if (!(0, menu_1.findByTitle)('分解宝石')?.val)
                    return;
                const GemData = (0, game_utils_1.dataMgr)()._gemData; //获取宝石数据
                const GemInfoList = GemData.method("get_GemInfoList").invoke(); //获取列表
                const UInt32List = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)()); //存储要分解的key
                (0, il2_util_1.listForEach)(GemInfoList, (element) => {
                    let conf_item = element.method('get_itemCfg').invoke(); //项配置
                    let conf_gem = element.method('get_gemCfg').invoke();
                    if (element.field('isLock').value)
                        return; //锁住的
                    if (element.method('get_isEquip').invoke())
                        return; //装备的
                    if (element.method('get_isInPolymerization').invoke())
                        return; //聚合的
                    if (element.method('get_isInResonance').invoke())
                        return; //共鸣的
                    if (conf_item.field("_quality").value > 分解品质)
                        return; //品质过滤
                    UInt32List.method("Add").invoke(element.field('key').value);
                }, false);
                /** 分解 */
                (0, game_utils_1.netMgr)().gemProtocolHandler.method("Resolve").invoke(UInt32List);
            },
            魂卡() {
                if (!(0, menu_1.findByTitle)('分解魂卡')?.val)
                    return;
                const CardData = (0, game_utils_1.dataMgr)()._cardData; //获取魂卡数据
                const CardDic = CardData.field('AllCardDic').value; //获取列表
                const UInt32List = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)()); //存储要分解的key
                /**过滤已经装备的 */
                const UseKey = []; //获取列表已经装备的列表
                (0, il2_util_1.dicForEach)(CardData.field('UseCardDic').value, (k, v) => {
                    UseKey.push(k);
                }, false);
                (0, il2_util_1.dicForEach)(CardDic, (k, v) => {
                    let MPtCard = v.method('get_NetInfo').invoke(); //卡片数据
                    if (MPtCard.field('IsLock').value)
                        return; //锁住的
                    if (v.method('get_Exp').invoke() > 0)
                        return; //有经验值的
                    if (UseKey.includes(k))
                        return; //装备的
                    UInt32List.method("Add").invoke(k);
                }, false);
                /** 分解 */
                (0, game_utils_1.netMgr)().cardProtocolHandler.method('Sale').invoke(UInt32List);
                //删除分解了的
                (0, il2_util_1.listForEach)(UInt32List, (element) => {
                    CardDic.method('Remove').invoke(element);
                }, false);
            },
        },
    };
    },{"../utils/il2-util":6,"../utils/log":8,"../utils/logger":9,"../utils/menu":10,"./game-utils":13,"./types":16}],12:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.data = void 0;
    const menu_1 = require("../utils/menu");
    const call_1 = require("./call");
    const game_utils_1 = require("./game-utils");
    /**
     * 表示配置信息的对象，其属性以键值对形式存在
     * @typedef {Object} Data
     * @property {string} [key] - 配置项的键，可选，类型为字符串
     * @property {import("../types").MenuItem[]} [value] - 配置项的值，可选，可为任意类型
     */
    exports.data = {
        示例1: [
            { type: 'text', size: 45, color: '#FFF5E1', val: '文本' },
            { type: 'category', title: '分类' },
            { type: 'switch', title: '开关', val: true },
            { type: 'button', title: '按钮' },
            { type: 'input', title: '输入框', val: '123' },
            { type: 'slider', title: '滑块', val: 88, min: 1, max: 100 },
            { type: 'checkbox', title: '多选框 1', val: true },
            { type: 'checkbox', title: '多选框 2', val: false },
            { type: 'checkbox', title: '多选框 3', },
            { type: 'radio', title: '单选框', val: 0, item: ['单选框1', '单选框2', '单选框3'], },
            { type: 'select', title: '下拉选择框', val: 1, item: ['选项1', '选项2', '选项3'], },
            {
                type: 'collapse', title: '可展开列表', default: true,
                item: [
                    { type: 'switch', title: '开关', val: true },
                    { type: 'button', title: '按钮' },
                    { type: 'input', title: '输入框', val: '123' },
                ],
            },
        ],
        示例2: [
            { type: 'switch', title: '开关', val: true },
            { type: 'button', title: '按钮' },
            { type: 'input', title: '输入框', val: '123' },
            { type: 'slider', title: '滑块', val: 88, min: 1, max: 100 },
        ],
        战斗: [
            {
                type: 'collapse', title: '常用', default: true,
                item: [
                    { type: 'switch', title: '自动杀怪', val: false },
                    { type: 'switch', title: '自动杀怪2', val: true },
                    { type: 'button', title: '手动杀怪', callback: (e) => (0, game_utils_1.battleMgr)().method("KillAllMonster").invoke() },
                    { type: 'text', size: 45, color: '#FFF5E1', val: '输入之后就会直接变身,1:望月忍;32:加波游;33:加波牧师' },
                    { type: 'input', title: '变身', val: 1, callback: (e) => call_1.call.英雄.变身(e.val) },
                    { type: 'text', size: 45, color: '#FFF5E1', val: '选择之后直接应用时装' },
                    { type: 'select', title: '切换时装', val: 0, item: call_1.call.data.时装_.item, extra: call_1.call.data.时装_.extra, callback: (e) => call_1.call.英雄.切换时装(e.extra[e.val]) },
                    { type: 'slider', title: '伤害倍数', val: 1, min: 1, max: 100 },
                    { type: 'slider', title: '破盾倍数', val: 1, min: 1, max: 100 },
                    { type: 'slider', title: '韧性倍数', val: 1, min: 1, max: 100 },
                ]
            },
            {
                type: 'collapse', title: '属性', default: false,
                item: [
                    { type: 'text', size: 45, color: '#FFF5E1', val: '首先输入值,选择属性之后会直接修改,百分比属性 1=100%' },
                    { type: 'select', title: '属性id选择', val: 0, item: call_1.call.data.英雄词条_.item, extra: call_1.call.data.英雄词条_.extra, callback: (e) => { call_1.call.英雄.修改固定属性(e.extra[e.val], (0, menu_1.findByTitle)('属性修改的值')?.val); } },
                    { type: 'input', title: '属性修改的值', val: 9 },
                ]
            },
            {
                type: 'collapse', title: 'BUFF', default: true,
                item: [
                    { type: 'category', title: '普通BUFF' },
                    { type: 'button', title: '清除Buff', callback: (e) => call_1.call.buff.clearAll() },
                    { type: 'button', title: '添加Buff', callback: (e) => call_1.call.buff.add(parseInt((0, menu_1.findByTitle)('输入BuffId').val)) },
                    { type: 'input', title: '输入BuffId', val: '1440002' },
                    { type: 'button', title: '拾取范围', callback: (e) => call_1.call.buff.add(1440001) },
                    { type: 'button', title: '快快变大', callback: (e) => call_1.call.buff.add(1440002) },
                    { type: 'switch', title: 'BUFF杀怪', val: false, extra: [100], callback: (e) => call_1.call.buff.switch(e) },
                    { type: 'switch', title: '保暖鞋子', val: true, extra: [2001114], callback: (e) => call_1.call.buff.switch(e) },
                    { type: 'switch', title: '绝对护甲', val: true, extra: [312], callback: (e) => call_1.call.buff.switch(e) },
                    { type: 'switch', title: '回蓝', val: true, extra: [313], callback: (e) => call_1.call.buff.switch(e) },
                    { type: 'switch', title: '无限火力', val: true, extra: [1106052], callback: (e) => call_1.call.buff.switch(e) },
                    { type: 'category', title: '超级BUFF' },
                    { type: 'button', title: '无敌攻强', callback: (e) => call_1.call.buff.add(1400008) },
                    { type: 'button', title: '增加水攻228%', callback: (e) => call_1.call.buff.add(1400048) },
                    { type: 'button', title: '增加木攻228%', callback: (e) => call_1.call.buff.add(1400058) },
                    { type: 'button', title: '增加火攻228%', callback: (e) => call_1.call.buff.add(1400038) },
                    { type: 'switch', title: '无敌伤增', val: false, extra: [821015, 45607, 45597, 1503064], callback: (e) => call_1.call.buff.switch(e) },
                    { type: 'switch', title: '无敌护穿', val: false, extra: [821016, 45598, 45608, 110221], callback: (e) => call_1.call.buff.switch(e) },
                    { type: 'switch', title: '无敌元穿', val: false, extra: [45596, 45606, 651318, 821014], callback: (e) => call_1.call.buff.switch(e) },
                    { type: 'switch', title: '无敌暴击', val: false, extra: [50010, 1440006, 110214, 110198], callback: (e) => call_1.call.buff.switch(e) },
                    { type: 'switch', title: '强袭', val: false, extra: [100016], callback: (e) => call_1.call.buff.switch(e) }, // 会叠加
                ]
            },
        ],
        奖励: [
            {
                type: 'collapse', title: '任务', default: true,
                item: [
                    { type: 'button', title: '每日', callback: (e) => call_1.call.奖励.每日() },
                    { type: 'button', title: '公会', callback: (e) => call_1.call.奖励.taskFinishAndReceiveAward2('Guild', true) },
                    { type: 'button', title: '竞技场', callback: (e) => call_1.call.奖励.taskFinishAndReceiveAward2('Arena', true) },
                    { type: 'button', title: '勇者等级S', callback: (e) => call_1.call.奖励.勇者等级S() },
                    { type: 'button', title: 'EX3', callback: (e) => call_1.call.奖励.EX3() },
                    { type: 'button', title: '开拓之路', callback: (e) => call_1.call.奖励.开拓之路() },
                    { type: 'button', title: '执照', callback: (e) => call_1.call.奖励.执照() },
                    { type: 'button', title: '团本', callback: (e) => call_1.call.奖励.团本() },
                    { type: 'switch', title: '需要时装', val: call_1.call.奖励.needFash, callback: (e) => call_1.call.奖励.needFash = e.val },
                    { type: 'button', title: '成就', callback: (e) => call_1.call.奖励.成就() },
                    { type: 'button', title: '新手', callback: (e) => call_1.call.奖励.新手() },
                    { type: 'button', title: '回归', callback: (e) => call_1.call.奖励.回归() },
                    { type: 'button', title: '活动', callback: (e) => call_1.call.奖励.活动() },
                    { type: 'switch', title: '需要经验', val: call_1.call.奖励.needExp, callback: (e) => call_1.call.奖励.needExp = e.val },
                    { type: 'button', title: '战士', callback: (e) => call_1.call.奖励.职业特训(1) },
                    { type: 'button', title: '游侠', callback: (e) => call_1.call.奖励.职业特训(2) },
                    { type: 'button', title: '法师', callback: (e) => call_1.call.奖励.职业特训(3) },
                    { type: 'button', title: '牧师', callback: (e) => call_1.call.奖励.职业特训(4) },
                    { type: 'button', title: '忍者', callback: (e) => call_1.call.奖励.职业特训(5) },
                ],
            },
            {
                type: 'collapse', title: '白嫖', default: true,
                item: [
                    // { type: 'select', title: '阿兔学堂选择bd', val: 0, item: [101, 601], callback: (e) => call.奖励.阿兔学堂.selectBD(e.item[e.val]) },
                    { type: 'text', size: 45, color: '#FFF5E1', val: '需要重新选择bd,然后点击' },
                    { type: 'button', title: '阿兔学堂完成', callback: (e) => call_1.call.奖励.阿兔学堂.get() },
                ],
            },
        ],
        地牢: [
            {
                type: 'collapse', title: '小秘境', default: true,
                item: [
                    { type: 'switch', title: '小秘境跳转BOSS', val: false },
                    {
                        type: 'select', title: '小秘境奖励替换', val: 0,
                        item: ['BOOS房', '精英房', '宝石', '密藏房', '暗金房'],
                        extra: [1, 13, 32, 21, 103]
                    },
                    { type: 'switch', title: '小秘境扫荡', val: false },
                    { type: 'switch', title: '网络异常停止后是否重新开始', val: false },
                    { type: 'slider', title: '小秘境扫荡速度', val: 2000, min: 1, max: 5000, callback: (e) => call_1.call.扫荡.小秘境.speed = e.val },
                    { type: 'slider', title: '小秘境扫荡层数', val: 240, min: 1, max: 240, callback: (e) => call_1.call.扫荡.小秘境.level = e.val + 1000 },
                    { type: 'switch', title: '小秘境免体力', val: false, callback: (e) => call_1.call.扫荡.小秘境.free = e.val },
                    { type: 'button', title: '小秘境速通', callback: (e) => call_1.call.速通.小秘境() },
                    { type: 'slider', title: '小秘境开始层数', val: 1, min: 1, max: 240 },
                    { type: 'slider', title: '小秘境结束层数', val: 120, min: 1, max: 240 },
                    { type: 'button', title: '小秘境速通121-180', callback: (e) => call_1.call.速通.小秘境(121, 180) },
                    { type: 'button', title: '小秘境速通181-240', callback: (e) => call_1.call.速通.小秘境(181, 240) },
                ],
            },
            {
                type: 'collapse', title: '钥匙', default: true,
                item: [
                    { type: 'switch', title: '钥匙扫荡', val: false, },
                    { type: 'slider', title: '钥匙扫荡层数', val: 240, min: 1, max: 240, callback: (e) => call_1.call.扫荡.钥匙.level = e.val },
                    { type: 'select', title: '钥匙级别', val: 1, item: ['蓝色', '紫色', '金色', '红色'], callback: (e) => call_1.call.扫荡.钥匙.keyLv = e.val },
                ],
            },
            {
                type: 'collapse', title: '混沌地牢', default: true,
                item: [
                    { type: 'select', title: '混沌地牢地图', val: 0, item: call_1.call.data.混沌地牢_.item, extra: call_1.call.data.混沌地牢_.extra },
                    { type: 'button', title: '混沌地牢速通', callback: (e) => call_1.call.速通.混沌地牢() },
                    { type: 'slider', title: '混沌地牢开始层数', val: 1, min: 1, max: 30 },
                    { type: 'slider', title: '混沌地牢结束层数', val: 17, min: 1, max: 30 },
                    { type: 'button', title: '混沌地牢扫荡', callback: (e) => call_1.call.扫荡.混沌地牢() },
                    { type: 'slider', title: '混沌地牢扫荡层数', val: 10, min: 1, max: 30 },
                    { type: 'switch', title: '混沌地牢自动扫荡', val: false, },
                ],
            },
            {
                type: 'collapse', title: '资源副本', default: true,
                item: [
                    {
                        type: 'button', title: '资源副本速通', callback: (e) => {
                            for (let index = 1; index <= 5; index++) {
                                call_1.call.速通.资源副本(index);
                            }
                        }
                    },
                ],
            },
            {
                type: 'collapse', title: '大秘境', default: true,
                item: [
                    { type: 'button', title: '大秘境速通', callback: (e) => call_1.call.速通.大秘境() },
                    { type: 'slider', title: '大秘境开始层数', val: 1, min: 1, max: 70 },
                    { type: 'slider', title: '大秘境结束层数', val: 70, min: 1, max: 70 },
                ],
            },
            {
                type: 'collapse', title: '魂卡', default: true,
                item: [
                    { type: 'button', title: '魂卡速通', callback: (e) => call_1.call.速通.魂卡() },
                    { type: 'button', title: '魂卡通关奖励', callback: (e) => call_1.call.速通.魂卡奖励() },
                    { type: 'select', title: '魂卡扫荡级别', val: 10, item: ['简单', '普通', '困难', '极难', '噩梦', '深渊', '地狱', '试炼Ⅰ', '试炼Ⅱ', '试炼Ⅲ', '试炼Ⅳ'] },
                    { type: 'button', title: '魂卡扫荡', callback: (e) => call_1.call.扫荡.魂卡() },
                ],
            },
            {
                type: 'collapse', title: '深渊', default: true,
                item: [
                    { type: 'button', title: '深渊速通', callback: (e) => call_1.call.速通.深渊() },
                    { type: 'button', title: '深渊速通2', callback: (e) => call_1.call.速通.深渊2() },
                    { type: 'slider', title: '深渊难度', val: 1, min: 1, max: 15, callback: (e) => call_1.call.设置深渊难度(e.val) },
                    { type: 'button', title: '深渊扫荡', callback: (e) => call_1.call.扫荡.深渊((0, menu_1.findByTitle)('深渊难度').val) },
                    { type: 'button', title: '深渊扫荡2', callback: (e) => call_1.call.扫荡.深渊2((0, menu_1.findByTitle)('深渊难度').val) },
                ],
            },
            {
                type: 'collapse', title: '竞技场', default: true,
                item: [
                    { type: 'button', title: '竞技场分数提交', callback: (e) => call_1.call.竞技场分数提交() },
                    { type: 'slider', title: '竞技场排名', val: 4, min: 1, max: 16 },
                ],
            },
        ],
        限时: [
            {
                type: 'collapse', title: '异兽狂潮', default: false,
                item: [
                    { type: 'button', title: '异兽狂潮速通', callback: (e) => call_1.call.地牢.异兽狂潮.速通() },
                    { type: 'text', size: 45, val: '直接获取宝珠' },
                    { type: 'button', title: '异兽狂潮速宝珠', callback: (e) => call_1.call.地牢.异兽狂潮.宝珠() },
                    { type: 'switch', title: '全图轰炸', val: true },
                    { type: 'switch', title: '全图拾取', val: true },
                    { type: 'switch', title: '无敌属性', val: true },
                    { type: 'slider', title: '经验倍数', val: 0, min: 0, max: 20, },
                    { type: 'slider', title: '宝珠倍数', val: 1, min: 1, max: 10000, },
                ],
            },
        ],
        其他: [
            { type: 'switch', title: '屏蔽教程', val: true },
            { type: 'switch', title: '自动关闭奖励弹窗', val: true },
            { type: 'switch', title: '自动拾取', val: true },
            { type: 'slider', title: '全局加速', val: 1, min: 1, max: 20, callback: (e) => call_1.call.全局加速(e.val) },
            {
                type: 'collapse', title: '暗金商店', default: true,
                item: [
                    { type: 'text', size: 45, val: '使用正则表达式' },
                    { type: 'input', title: '购买的装备名称', val: '.' },
                    { type: 'slider', title: '暗金购买等级', val: 35, min: 1, max: 40 },
                    { type: 'switch', title: '暗金购买', val: false },
                    { type: 'select', title: '购买选项', val: 0, item: ['普通', '金色', '四孔'], },
                ],
            },
            {
                type: 'collapse', title: '符文锻造', default: true,
                item: [
                    { type: 'switch', title: '自动打造符文', val: false },
                    { type: 'slider', title: '自动打造符文数量', val: 10, min: 1, max: 10 },
                    { type: 'slider', title: '自动打造品质', val: 9500, min: 1, max: 10000 },
                ],
            },
            {
                type: 'collapse', title: '分解', default: true,
                item: [
                    { type: 'category', title: '装备' },
                    { type: 'switch', title: '分解装备', val: true },
                    { type: 'slider', title: '装备保留等级', val: 35, min: 1, max: 40 },
                    { type: 'slider', title: '装备保留小符文孔', val: 3, min: 0, max: 3 },
                    { type: 'slider', title: '装备保留词条品质', val: 900, min: 1, max: 1000 },
                    { type: 'slider', title: '装备保留词条数量', val: 2, min: 0, max: 3 },
                    { type: 'category', title: '武器' },
                    { type: 'switch', title: '分解武器', val: true },
                    { type: 'slider', title: '武器分解品质', val: 2, min: 1, max: 5 },
                    { type: 'category', title: '符文' },
                    { type: 'switch', title: '分解符文', val: true },
                    { type: 'slider', title: '符文保留词条品质', val: 9500, min: 1, max: 10000 },
                    { type: 'category', title: '宝石' },
                    { type: 'switch', title: '分解宝石', val: true },
                    { type: 'slider', title: '宝石分解品质', val: 2, min: 1, max: 5 },
                    { type: 'category', title: '魂卡' },
                    { type: 'switch', title: '分解魂卡', val: true },
                ]
            },
        ],
        丢人: [
            { 'type': 'image', 'width': 240, 'height': 240 * 1.9, 'val': 'https://www.helloimg.com/i/2024/12/29/6771548a7a872.jpg' }
        ],
        关于: [
            { type: 'text', size: 60, color: '#FF6969', val: '当前版本为限时免费版本，请尽快添加官方群(770150399)获取正式版本' },
            { type: 'text', size: 45, color: '#FFF5E1', val: '\n功能修复:' },
            { type: 'text', size: 45, color: '#FFF5E1', val: '挨打或者打怪卡死' },
            { type: 'text', size: 45, color: '#FFF5E1', val: '\n功能新增:' },
            { type: 'text', size: 45, color: '#FFF5E1', val: '混沌地牢速通' },
            { type: 'text', size: 45, color: '#FFF5E1', val: '混沌地牢扫荡' }
        ]
    };
    },{"../utils/menu":10,"./call":11,"./game-utils":13}],13:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dungeon = exports.getCfg = exports.getText = exports.vector3 = exports.battleMgr = exports.netMgr = exports.itemHelper = exports.dataMgr = void 0;
    const il2_util_1 = require("../utils/il2-util");
    const store = {
        dataMgr: null,
        itemHelper: null,
        netMgr: null,
    };
    /**
     *  数据管理器
     * @returns {object}
     */
    function dataMgr() { return store.dataMgr ? store.dataMgr : (0, il2_util_1.convertClass)((0, il2_util_1.assembly)().class("Data.DataMgr")); }
    exports.dataMgr = dataMgr;
    /**
     *  项目管理器,比如获取[道具|词条]信息(名称,描述,图标等)
     * @returns {object}
     */
    function itemHelper() { return store.itemHelper ? store.itemHelper : (0, il2_util_1.convertClass)((0, il2_util_1.assembly)().class("Data.ItemHelper")); }
    exports.itemHelper = itemHelper;
    /**
     *  网络管理器
     * @returns {object}
     */
    function netMgr() { return store.netMgr ? store.netMgr : (0, il2_util_1.convertObject)((0, il2_util_1.assembly)().class("NetManager").field('_instance').value.field('_networker').value); }
    exports.netMgr = netMgr;
    /**
     *  战役管理器
     * @returns {Il2Cpp.Object}
     */
    function battleMgr() { return (0, il2_util_1.assembly)().class('Battle.BattleManager').field('_instance').value; }
    exports.battleMgr = battleMgr;
    /**
     * @returns {Il2Cpp.Object}
     */
    function vector3() { return (0, il2_util_1.assembly)().class("Dungeon.DungeonHelper").field("offset").value; }
    exports.vector3 = vector3;
    /**
     *  通过 id 获取游戏文本
     * @returns {Il2Cpp.Object}
     */
    function getText(id, clazz = Il2Cpp.corlib.class("System.Object"), arr = []) { return (0, il2_util_1.assembly)().class("LanguageHelper").field('m_instance').value.method('GetText').invoke(id, Il2Cpp.array(clazz, arr)).toString().replace(/"/g, ''); }
    exports.getText = getText;
    /**
     * 获取指定配置
     * @param {string} fieldName
     * @returns {Il2Cpp.Object}
     */
    function getCfg(fieldName) { return (0, il2_util_1.assembly)().class('MConfig.Config').field(fieldName).value.field('_dic').value; }
    exports.getCfg = getCfg;
    /** 地牢相关函数 */
    exports.dungeon = {
        /**
         * 打开地牢宝箱
         * @param {number} star
         * @param {number} x
         * @param {number} y
         */
        box(star, x, y) {
            netMgr().treasureProtocolHandler.method('Box').invoke(star, x, y);
        },
        /** 地牢类型 */
        types: {
            大秘境: 36,
            小秘境: 35,
            混沌: 59,
            资源副本: 56,
            魂卡: 15,
            钥匙: 7,
            深渊: 30,
            异兽狂潮: 62,
        },
        /**
         * 地牢开始
         * @param {number} mapId 地图id
         * @param {number} type 地牢类型 36:[大秘境]; 35:[小秘境]; 59:[混沌]; 56:[资源副本]; 15:[魂卡]; 7:[钥匙]; 30:[深渊]
         * @param {number} level 地牢等级
         * @param {number} keyId
         * @param {number} keyId2
         */
        localStart(mapId = 0, type = 36, level = 1027, keyId = 0, keyId2 = 0) {
            this.leave();
            netMgr().dungeonProtocolHandler.method('LocalStart').invoke(mapId, type, level, keyId, keyId2);
        },
        /**
         * 地牢结束
         * @param {number} type 地牢类型 36:[大秘境]; 35:[小秘境]; 59:[混沌]; 56:[资源副本]; 15:[魂卡]; 7:[钥匙]; 30:[深渊]
         * @param {number} level 地牢等级
         * @param {number} keyId
         * @param {number} dungeonId
         * @param {number} useTime 完成地牢使用的时间
         * @param {number} success 是否成功 1:[成功]
         * @param {number} star
         * @param {number} recommend
         * @param {number} totalDmg
         * @param {number} maxDmg
         */
        localEnd(type = 36, level = 1027, keyId = 0, dungeonId = 0, useTime = 3, success = 1, star = 7, recommend = 0, totalDmg = 0, maxDmg = 0) {
            netMgr().dungeonProtocolHandler.method('LocalEnd').invoke(type, level, keyId, dungeonId, useTime, success, star, recommend, totalDmg, maxDmg);
        },
        /** 离开地牢 */
        leave() {
            netMgr().dungeonProtocolHandler.method('Leave').invoke();
        },
    };
    },{"../utils/il2-util":6}],14:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hook = void 0;
    const game_utils_1 = require("./game-utils");
    const il2_util_1 = require("../utils/il2-util");
    const logger_1 = require("../utils/logger");
    const menu_1 = require("../utils/menu");
    const call_1 = require("./call");
    const data_1 = require("./data");
    const utils_1 = require("../utils");
    /** 阻止日志上传 */
    function preventLog() {
        (0, il2_util_1.assembly)().class("Battle.BattleLog").method("UpLoad").implementation = function () { };
        (0, il2_util_1.assembly)().class("Battle.BattleLog").method("UpLoadDuration").implementation = function () { };
        (0, il2_util_1.assembly)().class("Battle.BattleLog").method("UpLoadFinish").implementation = function () { };
        (0, il2_util_1.assembly)().class("Battle.BattleServerLog").method("Send").implementation = function () { };
    }
    /** 动画屏蔽 */
    function shieldAnimation() {
        /** 屏蔽教程 */
        (0, il2_util_1.assembly)().class("NewTutorial.TutorialEventCallback").method("Invoke").implementation = function (args) {
            if (!(0, menu_1.findByTitle)('屏蔽教程')?.val) {
                this.method("Invoke").invoke(args);
            }
        };
        /** 屏蔽网络加载圈圈 */
        (0, il2_util_1.assembly)().class("UISystem.UIManager").method("ShowLoading").overload("System.String").implementation = function (tips) {
            this.method("ShowLoading").overload("System.String").invoke(tips);
            this.method("HideLoadin").invoke();
        };
        /** 生成弹框时调用,参数是弹窗类型;获取奖励弹窗 ReceiveItemDialog (UI.ReceiveItemDialog) */
        {
            (0, il2_util_1.assembly)().class("UISystem.UIManager").method("SetMaskDepth").implementation = function (tips) {
                if ('ReceiveItemDialog (UI.ReceiveItemDialog)' == tips && (0, menu_1.findByTitle)('自动关闭奖励弹窗')?.val) { //先判断是不是奖励弹框
                    this.method("CloseDialog").invoke(tips);
                }
                else {
                    this.method("SetMaskDepth").invoke(tips);
                }
            };
            (0, il2_util_1.assembly)().class("UISystem.UIManager").method("VisiableUI").implementation = function (go) {
                if ('ReceiveItemDialog (UnityEngine.GameObject)' == go && (0, menu_1.findByTitle)('自动关闭奖励弹窗')?.val) { //先判断是不是奖励弹框
                    this.method("HideUI").invoke(go);
                }
                else {
                    this.method("VisiableUI").invoke(go);
                }
            };
        }
        // 屏蔽盲盒动画
        (0, il2_util_1.assembly)().class('GearEngine.Network.ActivityBlindboxProtocolHandler').method('OnMoreBuy').implementation = function (a, b) {
        };
        // 屏蔽开拓奖励弹窗
        // assembly().class('GearEngine.Network.PioneerAcademyProtocolHandler').method('OnNodeReward').implementation = function (a, b) {
        //   // this.method('OnNodeReward').invoke(a, b);
        // };
        // 屏蔽分解弹窗
        // assembly().class('GearEngine.Network.ItemProtocolHandler').method('OnResolve').implementation = function (a, b) {
        //   // this.method('OnResolve').invoke(a, b);
        // };
        // 屏蔽任务奖励弹窗
        // assembly().class('GearEngine.Network.NewTaskProtocolHandler').method('OnTaskReward').implementation = function (a, b) {
        //   // this.method('OnTaskReward').invoke(a, b);
        // };
        // 获取宠物
        (0, il2_util_1.assembly)().class('GearEngine.Network.PetProtocolHandler').method('OnUpdate').implementation = function (sessionConnect, msg) { };
    }
    function 异兽狂潮() {
        (0, il2_util_1.assembly)().class("CrazyTide.CrazyTidePlayer").method("Update").implementation = function () {
            this.method("Update").invoke();
            if ((0, menu_1.findByTitle)('全图轰炸')?.val) {
                this.method("OnPickUpAoeBall").invoke();
            }
            if ((0, menu_1.findByTitle)('全图拾取')?.val) {
                this.method("OnPickUpMagnet").invoke();
            }
        };
        (0, il2_util_1.assembly)().class("Battle.BattleManager").method("CreateCrazyTidePlayer").implementation = function (id) {
            const CrazyTidePlayer = this.method("CreateCrazyTidePlayer").invoke(id);
            if ((0, menu_1.findByTitle)('无敌属性')?.val) {
                (0, il2_util_1.listForEach)(CrazyTidePlayer.method('GetAttrbuteList').invoke(), (e) => {
                    if (e.field('attrId').value == 3) {
                        e.method('UpdateFixedAttr').invoke(10);
                    }
                    else {
                        e.method('UpdateFixedAttr').invoke(8888);
                    }
                });
            }
            return CrazyTidePlayer;
        };
        (0, il2_util_1.assembly)().class("CrazyTide.CrazyTidePlayer").method("OnPickUpHpBall").implementation = function (value) {
            this.method("OnPickUpHpBall").invoke(value * 10000);
        };
        (0, il2_util_1.assembly)().class("CrazyTide.CrazyTidePlayer").method("OnPickUpExpBall").implementation = function (value) {
            const temp = (0, menu_1.findByTitle)('经验倍数');
            this.method("OnPickUpExpBall").invoke(value * (temp ? temp.val : 1));
        };
        (0, il2_util_1.assembly)().class("CrazyTide.CrazyTidePlayer").method("OnPickUpCoin").implementation = function (value) {
            const temp = (0, menu_1.findByTitle)('宝珠倍数');
            this.method("OnPickUpCoin").invoke(value * (temp ? temp.val : 1));
        };
    }
    function initData() {
        if (call_1.call.data.时装().item.length > 1)
            return; // 数据如果以及被初始化过就直接跳过
        if (!utils_1.isJsHook)
            return; // 如果不是 jshook 环境也直接跳过
        let r = (0, il2_util_1.timedTask)(() => {
            try {
                logger_1.logger.private('初始化数据开始...');
                call_1.call.data.时装();
                call_1.call.data.混沌地牢();
                call_1.call.data.英雄词条();
                if (call_1.call.data.时装().item.length > 1) {
                    logger_1.logger.private('初始化数据完成,结束定时任务...');
                    call_1.call.英雄.切换时装(60017);
                    menu_1.mod.closeAll2();
                    (0, menu_1.showMenu)('我的勇者启动', data_1.data);
                    r.stop();
                }
                else {
                    logger_1.logger.private('初始化失败!正在重试...');
                }
            }
            catch (e) {
                logger_1.logger.private('初始化失败!正在重试...', e);
            }
        }, 1000 * 3);
    }
    function hook() {
        Il2Cpp.perform(() => {
            logger_1.logger.toast('unity Version: ', Il2Cpp.unityVersion, '\t包名: ', Il2Cpp.application.identifier);
            preventLog();
            shieldAnimation();
            异兽狂潮();
            // Hook获取设备码
            (0, il2_util_1.assembly)().class('GearEngine.OperatingSystem.Native.NativeInfo').method('GetDeviceID').implementation = function () {
                return Il2Cpp.string((0, utils_1.generateRandomString)());
            };
            /** 国际服切换中文 */
            (0, il2_util_1.assembly)().class('LanguageHelper').method('get_CurSystemLanguage').implementation = function () {
                return Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class('UnityEngine.SystemLanguage').field('ChineseSimplified').value;
            };
            /** 登录信息 */
            (0, il2_util_1.assembly)().class('GearEngine.Network.LoginProtocolHandler').method('Login').implementation = function name(account, password, time, platform, adid, originPlatform, originAccount, serverId, os, deviceId, brand, version, osVer, model, uniqId, isOld, isGuest, isAdult, unityVer, apkVer, sdkVer, encode, netEaseData) {
                this.method("Login").invoke(account, password, time, platform, adid, originPlatform, originAccount, serverId, os, deviceId, brand, version, osVer, model, uniqId, isOld, isGuest, isAdult, unityVer, apkVer, sdkVer, encode, netEaseData);
                logger_1.logger.debug(JSON.stringify({ account: account.toString(), password: password.toString() }, null, 2));
                /** 延时执行 */
                (0, il2_util_1.timeOut)(() => {
                    // 每日签到
                    (0, game_utils_1.netMgr)().loginActivityProtocolHandler.method('SignReward').invoke();
                }, 1000 * 5);
                initData();
            };
            /** 更改名字 */
            (0, il2_util_1.assembly)().class("Battle.HeroGroup").method("get_PlayerName").implementation = function () {
                if (this.method("get_isMyHero").invoke()) {
                    (0, game_utils_1.dataMgr)()._playerData.field('_playerName').value = Il2Cpp.string(`无极小偷孙`);
                    return (0, game_utils_1.dataMgr)()._playerData.field('_playerName').value;
                }
                else {
                    return Il2Cpp.string("别人");
                }
            };
            /** 暗金自动购买[打开暗金商店自动检测是否有想买的装备] */
            (0, il2_util_1.assembly)().class("UI.ArmorStoreDialog").method("RefreshTime").implementation = function () {
                this.method("RefreshTime").invoke();
                call_1.call.分解.装备();
                if ((0, menu_1.findByTitle)('暗金购买')?.val) {
                    let buySelect = (0, menu_1.findByTitle)('购买选项');
                    call_1.call.暗金购买[buySelect.item[buySelect.val]]();
                }
            };
            /** 符文自动打造 */
            {
                const runeCfg = {
                    /** 词条id */
                    attrId: -1,
                    /** 自动打造品质比例 */
                    ratio: 9000,
                    /** 自动打造符文数量 */
                    count: 10,
                };
                /** 初始化词条和品质,选择一下需要的词条 */
                (0, il2_util_1.assembly)().class("Data.NRuneHelper").method("SetNRuneForgeAutoResolveCache").implementation = function (part, color, attrId, isOn) {
                    logger_1.logger.debug('位置:', part, '颜色:', color, '词条id:', attrId, '开启/关闭:', isOn);
                    this.method("SetNRuneForgeAutoResolveCache").invoke(part, color, attrId, isOn);
                    runeCfg.attrId = attrId;
                    runeCfg.ratio = (0, menu_1.findByTitle)('自动打造品质').val;
                    runeCfg.count = (0, menu_1.findByTitle)('自动打造符文数量').val;
                };
                (0, il2_util_1.assembly)().class("UI.NRune.NRuneForgeMultiRst").method("SetData").implementation = function (dataList) {
                    this.method("SetData").invoke(dataList);
                    if (runeCfg.attrId != -1 && (0, menu_1.findByTitle)('自动打造符文').val) {
                        /** 存储不达标的符文key */
                        const UInt32List = (0, il2_util_1.getListByClazz)((0, il2_util_1.sysUInt32)());
                        (0, il2_util_1.listForEach)(dataList, e => {
                            /** 符文词条信息 */
                            let NRuneAttr = e.field('attrs').value.method("get_Item").invoke(0);
                            /** 不达标存入list */
                            if (runeCfg.attrId != NRuneAttr.field('attrId').value || NRuneAttr.field('ratio').value < runeCfg.ratio) {
                                UInt32List.method("Add").invoke(e.field('runekey').value);
                            }
                        });
                        /** 分解不合格的符文 */
                        (0, game_utils_1.netMgr)().newRuneProtocolHandler.method("Resolve").invoke(UInt32List);
                        /** 打造数量和分解数量一样,说明没有合格的,重新打造 */
                        if (dataList.method("get_Count").invoke() == UInt32List.method("get_Count").invoke()) {
                            const list = (0, il2_util_1.getListByClazz)((0, il2_util_1.assembly)().class("GearEngine.Network.NewRuneKV1ProtocolData"));
                            const temp = (0, il2_util_1.assembly)().class("GearEngine.Network.NewRuneKV1ProtocolData").method('Get').invoke();
                            /** 设置打造的符文id */
                            temp.field("id").value = dataList.method("get_Item").invoke(0).field('runeId').value;
                            /** 设置打造的符文数量 */
                            temp.field("num").value = runeCfg.count;
                            list.method("Add").invoke(temp);
                            (0, game_utils_1.netMgr)().newRuneProtocolHandler.method('Combine').invoke(list);
                        }
                    }
                    this.method("OnMaskClick").invoke();
                };
            }
            /** 魂卡出售快捷选中(点击快捷选择直接出售所有没锁定并且没强化的卡) */
            (0, il2_util_1.assembly)().class("UI.Bag.CardListView").method("OnShortcutClick").implementation = function () {
                this.method("OnShortcutClick").invoke();
                call_1.call.分解.魂卡();
            };
            /** 小秘境奖励替换 */
            (0, il2_util_1.assembly)().class('GearEngine.Network.TreasureProtocolHandler').method('Box').implementation = function (star, x, y) {
                this.method("Box").invoke(star, x, y);
                if (star == 31) {
                    const e = (0, menu_1.findByTitle)('小秘境奖励替换');
                    this.method("Box").invoke(e.extra[e.val], x, y);
                }
                call_1.call.分解.装备();
                call_1.call.分解.符文();
                call_1.call.分解.宝石();
            };
            /** 直接跳转 boss 房间 */
            (0, il2_util_1.assembly)().class("Dungeon.NewInnersDungeonProcess").method("OnEnteredDungeon").implementation = function () {
                this.method("OnEnteredDungeon").invoke();
                if ((0, menu_1.findByTitle)('小秘境跳转BOSS')?.val) {
                    this.method("JumpToBossRoom").invoke();
                }
            };
            /** 进游戏|看面板|选关卡调用 */
            (0, il2_util_1.assembly)().class("Battle.HeroGroup").method("GetAttr").implementation = function (roleAttrEnum) {
                /** 只是为了减少调用次数 */
                if (roleAttrEnum == 1) {
                    call_1.call.英雄.修改固定属性(47, 9, this);
                }
                return this.method("GetAttr").invoke(roleAttrEnum);
            };
            /** 拾取道具 */
            (0, il2_util_1.assembly)().class("DropItem").method("SetData").implementation = function (info) {
                this.method("SetData").invoke(info);
                if ((0, menu_1.findByTitle)('自动拾取')?.val) {
                    (0, game_utils_1.netMgr)().bagProtocolHandler.method('BagPick').invoke(info.field('itemIndex').value, info.field('num').value);
                }
            };
            /** 阿兔学堂选取bd */
            (0, il2_util_1.assembly)().class("GearEngine.Network.NewStrongProtocolHandler").method("ChooseBuild").implementation = function (bdId) {
                this.method("ChooseBuild").invoke(bdId);
                call_1.call.奖励.阿兔学堂.bdId = bdId;
            };
            /** 获取存活的怪物列表,全部都在动杀死所有怪物 */
            (0, il2_util_1.assembly)().class("Battle.BattleManager").method("GetAllAliveMonster").implementation = function () {
                const list = this.method("GetAllAliveMonster").invoke();
                if ((0, menu_1.findByTitle)('自动杀怪')?.val) {
                    const noActive = (0, il2_util_1.listExists)(list, (monster) => !monster.method("get_AiActive").invoke());
                    //是战役并且不是组队
                    if (!noActive && this.field('IsInBattle').value && !this.method('get_isTeamUp').invoke()) {
                        this.method("KillAllMonster").invoke();
                    }
                }
                return list;
            };
            /** 怪物移动时触发,杀死移动的怪物 */
            (0, il2_util_1.assembly)().class("Battle.Monster").method("get_Force").implementation = function () {
                if ((0, menu_1.findByTitle)('自动杀怪2')?.val) {
                    const MonsterCore = this.method("get_monsterCore").invoke();
                    MonsterCore.method("OnDeath").invoke((0, il2_util_1.assembly)().class('Battle.DeathReason').field('beKilled').value);
                    this.method("OnDispose").invoke();
                }
                return this.method("get_Force").invoke();
            };
            /*重载的方法 文字提示,比如断网,道具不足 */
            let setTimeoutID;
            (0, il2_util_1.assembly)().class('MessageManager').method('PopMessage').implementation = function (msg) {
                /** 设置扫荡提示信息 */
                if (call_1.call.扫荡.小秘境.step == -1) {
                    if (/网络/i.test(msg)) {
                        (0, menu_1.findByTitle)('小秘境扫荡').val = false;
                        call_1.call.扫荡.小秘境.leave();
                        msg = Il2Cpp.string(`<color=#DC143C>当前扫荡次数: ${call_1.call.扫荡.小秘境.count}\t网络错误,停止扫荡</color>\t${msg}`);
                        logger_1.logger.info('网络异常停止扫荡!');
                        if ((0, menu_1.findByTitle)('网络异常停止后是否重新开始')?.val) {
                            setTimeoutID = setTimeout(() => {
                                logger_1.logger.info('重新开始扫荡!');
                                (0, menu_1.findByTitle)('小秘境扫荡').val = true;
                                clearTimeout(setTimeoutID); //清除定时器
                            }, 1000 * 60);
                        }
                    }
                    else {
                        msg = Il2Cpp.string(`<color=#DC143C>当前扫荡次数: ${call_1.call.扫荡.小秘境.count}\t房间号: ${(call_1.call.扫荡.小秘境.roomKey + 1)}</color>\t${msg}`);
                    }
                }
                if (/不在主城/.test(msg)) {
                    game_utils_1.dungeon.leave();
                }
                this.method('PopMessage').invoke(msg);
            };
            /** 更新勇者,频率稍慢 */
            (0, il2_util_1.assembly)().class("Battle.HeroGroup").method("Update").implementation = function () {
                this.method("Update").invoke();
                /** 判断是不是自己 */
                if (this.method("get_isMyHero").invoke()) {
                    call_1.call.buff.cyclic3(this);
                    if ((0, menu_1.findByTitle)('小秘境扫荡')?.val) {
                        call_1.call.扫荡.小秘境.call();
                    }
                    else if (call_1.call.扫荡.小秘境.step == -1) {
                        call_1.call.扫荡.小秘境.leave();
                    }
                    else if ((0, menu_1.findByTitle)('钥匙扫荡')?.val) {
                        call_1.call.扫荡.钥匙.call();
                    }
                    else if (call_1.call.扫荡.钥匙.step == -1) {
                        call_1.call.扫荡.钥匙.leave();
                    }
                    else if ((0, menu_1.findByTitle)('混沌地牢自动扫荡')?.val) {
                        call_1.call.扫荡.混沌地牢();
                    }
                }
            };
            /* 更新战役状态,登录进游戏就一直调用 */
            (0, il2_util_1.assembly)().class("Battle.BattleManager").method("FixedUpdate").implementation = function () {
                this.method("FixedUpdate").invoke();
                /** 判断角色是否存在 */
                // if (!isNull(this.method("GetMyHero").invoke())) {
                //   call.buff.cyclic3(this.method("GetMyHero").invoke());
                // }
            };
            /** Buff 永久[先关掉,没法过滤debuff] */
            // assembly().class("Battle.Buff.BattleBuff").method("UpdateBuff").implementation = function () {
            //   this.method("UpdateBuff").invoke();
            //   this.method("ReSetBuffTime").invoke();
            // };
            /** 定时添加buff */
            // timedTask(() => {
            //   if (!isNull(battleMgr()?.method("GetMyHero").invoke())) {
            //     call.buff.cyclic2();
            //   }
            // }, 3 * 1000);
            /** 一秒触发一次 */
            (0, il2_util_1.assembly)().class("Data.PetExplore").method("ResetTime").implementation = function () {
                this.method("ResetTime").invoke();
                // if (!isNull(battleMgr()?.method("GetMyHero").invoke())) {
                //   call.buff.cyclic3();
                // }
            };
        }, "main");
    }
    exports.hook = hook;
    },{"../utils":7,"../utils/il2-util":6,"../utils/logger":9,"../utils/menu":10,"./call":11,"./data":12,"./game-utils":13}],15:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("frida-il2cpp-bridge");
    require("../global");
    const hook_1 = require("./hook");
    const utils_1 = require("../utils");
    const data_1 = require("./data");
    const menu_1 = require("../utils/menu");
    const logger_1 = require("../utils/logger");
    const packagename = 'com.rsg.wdyz';
    const versions = '2.1.6';
    const build = '1';
    const menuName = 'dingdong';
    (0, utils_1.verify)(packagename, versions, (deviceInfo, scriptInfo) => {
        delete data_1.data.示例1;
        delete data_1.data.示例2;
        data_1.data.关于 = (0, menu_1.builderAffiche)(scriptInfo, build);
        // deviceInfo.deviceID = '31e96c53b4be6906';
        // deviceInfo.lv = 'free';
        /** 过滤我独有的 */
        if (!utils_1.isXG) {
            data_1.data.奖励[0].item = data_1.data.奖励[0].item.filter(item => !/需要经验|勇者等级S/.test(item.title));
            data_1.data.地牢[2].item = data_1.data.地牢[2].item.filter(item => !/混沌地牢自动扫荡/.test(item.title));
        }
        // 根据设备等级过滤菜单
        if (deviceInfo.lv == 'free') {
            delete data_1.data.奖励;
            delete data_1.data.地牢;
            delete data_1.data.其他;
            let re = /绝对护甲|自动杀怪|无限火力|保暖鞋子/i;
            Object.keys(data_1.data).forEach((key) => {
                if (/关于|丢人/.test(key))
                    return;
                data_1.data[key] = data_1.data[key].filter((item) => item.item || re.test(item.title));
                data_1.data[key].forEach((item1) => {
                    if (item1.item) {
                        item1.item = item1.item.filter((item2) => re.test(item2.title));
                    }
                });
                data_1.data[key] = data_1.data[key].filter((item) => !item.item || item.item.length != 0);
            });
        }
        else if (deviceInfo.lv != 'max') {
            let reStr = 'EX3|执照|团本|成就|新手|回归|战士|游侠|法师|牧师|忍者|开拓之路|领取|混沌地牢自动扫荡';
            if (deviceInfo.lv == 'vip') {
                reStr += '|秘境|混沌|深渊|魂卡通关奖励|阿兔学堂|活动';
            }
            else if (deviceInfo.lv == 'svip') {
                reStr += '';
            }
            let re = new RegExp(reStr, 'i');
            Object.keys(data_1.data).forEach((key) => {
                if (/关于|丢人/.test(key))
                    return;
                data_1.data[key] = data_1.data[key].filter((item) => item.item || !re.test(item.title));
                data_1.data[key].forEach((item1) => {
                    if (item1.item) {
                        item1.item = item1.item.filter((item2) => !re.test(item2.title));
                    }
                });
                data_1.data[key] = data_1.data[key].filter((item) => !item.item || item.item.length != 0);
            });
        }
        if (!/max|free|vip|svip/.test(deviceInfo.lv)) {
            app.exitApp();
        }
        (0, menu_1.showMenu)(menuName, data_1.data);
        (0, hook_1.hook)();
    });
    },{"../global":4,"../utils":7,"../utils/logger":9,"../utils/menu":10,"./data":12,"./hook":14,"frida-il2cpp-bridge":1}],16:[function(require,module,exports){
    "use strict";
    /**
     * @typedef {Object} Task - 任务对象
     * @property {number} _id - 任务 ID
     * @property {number} _task_type - 任务类型
     * @property {number} _subtype - 任务子类型
     * @property {number} _task_take - 任务接取方式
     * @property {number} _pre_task - 前置任务
     * @property {number} _task_chain - 任务链
     * @property {number} _task_condition - 任务条件
     * @property {number} _count - 任务数量
     * @property {number} _cnt_cp - 任务完成数量
     * @property {number} _para_cp - 任务完成参数
     * @property {number} _reward - 任务奖励
     * @property {number} _guild_reward - 任务公会奖励
     * @property {number} _reward_costume - 任务奖励时装
     * @property {number} _jump - 任务跳转
     * @property {string} _title_describe - 任务标题描述
     * @property {string} _describe - 任务描述
     * @property {number} _start_time - 任务开始时间
     * @property {number} _end_time - 任务结束时间
     * @property {number} _task_icon - 任务图标
     * @property {number} _navigation - 导航
     * @property {number} _activity_task - 活动任务
     * @property {number} _is_show - 是否显示
     * @property {number} _UnlockLevel - 解锁等级
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    },{}]},{},[15])
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZnJpZGEtaWwyY3BwLWJyaWRnZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwic3JjL2dsb2JhbC9pbmRleC5qcyIsInNyYy91dGlscy9pbDItdXRpbC5qcyIsInNyYy91dGlscy9pbmRleC5qcyIsInNyYy91dGlscy9sb2cuanMiLCJzcmMvdXRpbHMvbG9nZ2VyLmpzIiwic3JjL3V0aWxzL21lbnUuanMiLCJzcmMv5oiR55qE5YuH6ICFL2NhbGwuanMiLCJzcmMv5oiR55qE5YuH6ICFL2RhdGEuanMiLCJzcmMv5oiR55qE5YuH6ICFL2dhbWUtdXRpbHMuanMiLCJzcmMv5oiR55qE5YuH6ICFL2hvb2suanMiLCJzcmMv5oiR55qE5YuH6ICFL21haW4uanMiLCJzcmMv5oiR55qE5YuH6ICFL3R5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3Y1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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S0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSTtZQUM1QyxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtnQkFDN0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtnQkFDN0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFBLHNCQUFTLEdBQUUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDakcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsaUNBQWlDLEVBQUU7Z0JBQ3BGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRTtnQkFDL0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxX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LEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDOUYsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUdwRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtnQkFDckMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDOUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDOUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFFOUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzSCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFILEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDMUgsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1SCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxNQUFNO2FBQzFHO1NBQ0Y7S0FDRjtJQUNELEVBQUUsRUFBRTtRQUNGO1lBQ0UsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJO1lBQzVDLElBQUksRUFBRTtnQkFDSixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQzlELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ25HLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDcEUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNoRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ2xFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDOUQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUM5RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUNuRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQzlELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDOUQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUM5RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQzlELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0JB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SSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2FBQ2xGO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSTtZQUM1QyxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRztnQkFDOUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtnQkFDMUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO2FBQ3JIO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSTtZQUM5QyxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7Z0JBQzlELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO2dCQUMvRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO2dCQUMvRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxHQUFHO2FBQ25EO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSTtZQUM5QyxJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUMvQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLEtBQUss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LEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQ3hFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7Z0JBQzVDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7Z0JBQzVDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7Z0JBQzVDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHO2dCQUMzRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRzthQUMvRDtTQUNGO0tBQ0Y7SUFDRCxFQUFFLEVBQUU7UUFDRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO1FBQzVDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDaEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtRQUM1QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzdGO1lBQ0UsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJO1lBQzlDLElBQUksRUFBRTtnQkFDSixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO2dCQUMxQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO2dCQUM3QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtnQkFDN0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtnQkFDN0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHO2FBQ3JFO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSTtZQUM5QyxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtnQkFDL0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7Z0JBQy9ELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO2FBQ25FO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSTtZQUM1QyxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Z0JBQ2pDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7Z0JBQzVDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO2dCQUM3RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtnQkFDN0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7Z0JBQ2xFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO2dCQUU3RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDakMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtnQkFDNUMsRUFBRSxJQUFJLEVBQUUsUUFB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O1FBQ2pFLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxLQUFLLEVBQUU7WUFDMUIsS0FBSyxJQUFJLDBCQUEwQixDQUFDO1NBQ3JDO2FBQU0sSUFBSSxVQUFVLENBQUMsRUFBRSxJQUFJLE1BQU0sRUFBRTtZQUNsQyxLQUFLLElBQUksRUFBRSxDQUFDO1NBQ2I7UUFDRCxJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNoQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU87WUFDOUIsV0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFFLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO29CQUNkLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDbEU7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILFdBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzVDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNmO0lBQ0QsSUFBQSxlQUFRLEVBQUMsUUFBUSxFQUFFLFdBQUksQ0FBQyxDQUFDO0lBQ3pCLElBQUEsV0FBSSxHQUFFLENBQUM7QUFDVCxDQUFDLENBQUMsQ0FBQzs7O0FDL0RIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIifQ==
    