import {useEffect,useState} from "react";
import axios from "axios";
let CancelToken = axios.CancelToken;

export function useBooksApi(value)
{

    let [data,setData] = useState("");
    let [loading,setLoading] = useState(false);

    useEffect(()=>{
        setData([]);
        setLoading(true);
        let cancel;
        if(value != "")
        {
        axios.get("http://openlibrary.org/search.json",{
            params:{
                q:value,
                page:1
            },
            cancelToken: new    CancelToken((c)=> cancel=c)
        }).then((res)=>{
           
            if(res.data.docs != undefined)
            {
                setData([...new Set(res.data.docs.map((item)=>{
                    return item.title
                }))])
            }

        }).catch((e)=>{
           if(axios.isCancel(e))
           {
               return;
           }else
           {
               console.log(e);
           }
        })

        return ()=>{
            cancel();
        }
    }else
    {
        setData([])
    }

    setLoading(false)

    },[value,loading]);


    return [data];

}