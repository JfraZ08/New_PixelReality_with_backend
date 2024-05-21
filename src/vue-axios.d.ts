declare module 'vue-axios' {
    import { PluginFunction } from 'vue';
    import { AxiosInstance } from 'axios';
  
    interface VueAxios {
      install: PluginFunction<never>;
    }
  
    const VueAxios: VueAxios;
  
    export default VueAxios;
  }
  