import {promptError} from './notification';
import * as qs from "qs";

export const controller = new AbortController();
export const Http = {
    /**
     * get 请求
     * @param {*} url 请求地址
     */
    get: function (url: string, data: any = {}) {
        const newUrl = `${url}?${qs.stringify(data)}`;
        console.log(newUrl,data)
        const signal = controller.signal;
        return new Promise((resolve, reject) => {
            fetch(newUrl, {
                mode: "cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                signal
            })
                .then((res) => res.json())
                .then((data) => {
                    if (parseInt(data.code, 10) === 200 || data.success) {
                        resolve(data);
                        return;
                    }
                })
                .catch((err: any) => {
                    promptError(err)
                });
        });
    },

    /**
     * post 请求
     * @param {*} url 请求地址
     * @param {*} data 请求的参数
     */
    post: function (url: string, data: any) {
        return new Promise((resolve, reject) => {
            const signal = controller.signal;
            fetch(url, {
                method: "POST",
                // mode: 'cors',
                body: qs.stringify(data),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                signal
            })
                .then((res) => res.json())
                .then((response) => {
                    if (parseInt(response.code, 10) === 200) {
                        resolve(response);
                        return;
                    }
                })
                .catch((err) => {
                    promptError(err);
                });
        });
    }
};