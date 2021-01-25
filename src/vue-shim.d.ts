import Vue from 'vue'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// 全局变量设置
declare global {
  interface Window {
    i18nLocale:String
    vueVm:Object
  }
  var process: any
}


declare interface Window {
  SockJS: Object;
  Stomp: Object;
  Date:{
    Format:Function,
    [propName: string]: any
  };

}

// 全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $Message: any,
    $Modal: any
  }
}
