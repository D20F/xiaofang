
import { format, parse, getDay } from "date-fns";

var mixin = {
    data() {
        return {
            timeouter: "",
            date: "",
            time: "",
            years: "",
        };
    },
    created() {
        this.getTime();
    },
    methods: {
        getTime() {
            let time = new Date();
            this.date = format(parse(time), "YYYY-MM-DD");
            this.time = format(parse(time), "HH:mm");
            let years = getDay(time);
            switch (years) {
                case 1:
                    this.years = "星期一";
                    break;
                case 2:
                    this.years = "星期二";
                    break;
                case 3:
                    this.years = "星期三";
                    break;
                case 4:
                    this.years = "星期四";
                    break;
                case 5:
                    this.years = "星期五";
                    break;
                case 6:
                    this.years = "星期六";
                    break;
                case 7:
                    this.years = "星期天";
                    break;
                default:
                    break;
            }
            this.timeouter = setTimeout(() => {
                this.getTime();
            }, 1000);
        },
    },
    computed: {},
    beforeDestroy() {
        clearTimeout(this.timeouter);
        this.timeouter = null;
    }
}
export default mixin;



