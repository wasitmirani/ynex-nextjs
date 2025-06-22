class Helper {
    public static base_url = window.location.origin;

 
    public static getBaseUrl() {
        return this.base_url;
    }
    
    appendValidateClass =(errors:any, value:string)=> {
        console.log("Errors:", errors);
        console.log("Value:", value);
        if (errors && errors.some((error: { field: string }) => error.field === value)) {
            console.log("Error found for field:", value);
            return "validate border-red-500 dark:border-red-500/50";
        }
        return "";
    }
}


export const Helpers = new Helper();
