// import React, {useEffect, useState} from "react";
// import {Cascader, Tag} from 'antd';
//
// // import 'antd/dist/antd.css';
//
// export interface defaultData {
//     title: string;
//     id?: string;
//     children:
//         | {
//         title: string;
//         id?: string;
//         children: never[];
//         value: string;
//     }[]
//         | [];
//     value: string;
// }
//
// export interface PropsType {
//     data: any;
//     placeholder?: string;
//     onChange: (res: defaultData[]) => void;
// }
//
// /**
//  * 给选择的目标打上标记
//  * @param optData = []
//  * @param value： number
//  */
// function f(optData, value) {
//     return optData?.map(val => {
//         try {
//             // 选中
//             if (val.value === value) {
//                 val.isSelect = true;
//                 val.label = val.label.indexOf("√") > -1 ? val.label : `√ ${val.label}`;
//             }
//             return {
//                 ...val,
//                 isSelect: !!val.isSelect, // 控制需否选中
//                 children: val.children?.length ? f(val.children, value) : [],
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     })
// }
//
// /**
//  * 给未选中的目标取消标记
//  * @param data = []
//  * @param value: number
//  */
// function f1(data, value) {
//     return data?.map(val => {
//         try {
//             if (val.value === value) {
//                 val.isSelect = false;
//                 if (val.label.indexOf('√') > -1) {
//                     val.label = val.label.split(" ")[1];
//                 }
//             }
//             return {
//                 ...val,
//                 children: val.children?.length ? f1(val.children, value) : [],
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     })
// }
//
//
// /**
//  * 递归查找指定数据
//  * @param list = []
//  * @param id: number
//  */
// function getCurrent(list, id) {
//     for (let o of list || []) {
//         if (o.value == id) return o
//         const o_ = getCurrent(o.children, id)
//         if (o_) return o_
//     }
// }
//
// /**
//  * 级联菜单多选，取消父子关联
//  * @param props
//  * @constructor
//  */
// const CascaderMui: React.FC<PropsType> = (props) => {
//
//     const {
//         options,
//         placeholder,
//         onChange,
//         defaultValue = [],
//         style = {width: '100%',},
//         expandTrigger = 'hover'
//     } = props;
//
//     const [open, setOpen] = useState(false);
//     const [state, setState] = useState({
//         select: {}, // 选中
//         noselect: {}, // 未选择
//         obj: {}, // 作为tag显示
//         opt: options,
//     });
//
//     Object.values(state.select)?.map(optvalue => {
//         f(state.opt, optvalue[optvalue.length - 1], 'onselect')
//     })
//
//     Object.values(state.noselect)?.map(noselectvalue => {
//         f1(state.opt, noselectvalue[noselectvalue.length - 1])
//     })
//
//     useEffect(() => {
//         try {
//             // 作为初始化需要   暂时没想到好的方法，现存本地解决下
//             localStorage.setItem('o', JSON.stringify(options));
//
//             let config = {};
//             let obj = {};
//
//             if (defaultValue.length) {
//                 // 有默认数据时候
//                 defaultValue.map(v => {
//
//                     const index = v[v.length - 1];
//
//                     config[index] = v;
//
//                     obj[index] = [index, getCurrent(options, index)?.label]; // 初始回显的数据处理
//                 })
//             }
//             setState((s) => ({...s, obj, select: config, opt: f(options),}))
//         } catch (e) {
//             console.log(e);
//         }
//     }, [options])
//
//     return (
//         <Cascader
//             style={style}
//             placeholder={placeholder}
//             options={state.opt}
//             changeOnSelect
//             defaultValue={state.obj}
//             expandTrigger={expandTrigger}
//             open={open}
//             onFocus={(arg) => {
//                 console.log(arg)
//                 setOpen(true);
//             }}
//             onBlur={(arg) => {
//                 setOpen(false);
//             }}
//             onChange={(v, l) => {
//
//                 try {
//                     // 记录每次点击的数据
//                     if (l && l.length > 0) {
//                         let obj = state.obj;
//                         let select = state.select;
//                         let noselect = state.noselect;
//
//                         if (obj[v[v.length - 1]]) {
//
//                             noselect[v[v.length - 1]] = v;
//                             delete obj[v[v.length - 1]];
//                             delete select[v[v.length - 1]];
//
//                         } else {
//
//                             delete noselect[v[v.length - 1]];
//                             select[v[v.length - 1]] = v;
//                             obj[v[v.length - 1]] = [l[l.length - 1].value, l[l.length - 1].label]
//                         }
//
//                         f(state.opt, v[v.length - 1])
//
//                         setState((s) => ({...s, noselect, obj, select}))
//                         onChange(Object.values(state.select))
//                     } else {
//
//                         setState({
//                             select: {},
//                             noselect: {},
//                             obj: {},
//                             opt: localStorage.getItem('o') && JSON.parse(localStorage.getItem('o')),
//                         })
//                         onChange([])//全部清空
//                     }
//                 } catch (e) {
//                     console.log(e);
//                 }
//
//             }}
//             displayRender={() => {
//                 return Object.values(state.obj).map(label => {
//                     return (
//                         <Tag closable
//                              key={label}
//                              onClose={() => {
//                                  let nos = state.noselect;
//                                  nos[label[0]] = state.select[label[0]];
//
//                                  setState((s) => ({...s, noselect: nos,}))
//
//                                  delete state.obj[label[0]];
//                                  delete state.select[label[0]];
//
//                                  onChange(Object.values(state.select));
//                              }}
//                         >
//                             {label[1]}
//                         </Tag>
//                     );
//                 })
//             }}
//         />
//     );
// };
//
// export default CascaderMui;
