import {useRouter} from "next/router";

const AddLink = () =>{
    const router = useRouter();

    return(
        <div>
            <div className="mini-logo">
                <img src="/assets/image/mini-logo.png" alt="mini-logo"/>
            </div>
            <div>
                <img src="/assets/image/arrow.png" alt="" className="arrow"/>
                <button type="submit" className="return-button" onClick={() => router.push(`/`) }>Return to List Page</button>
            </div>
        </div>
    );
}

export default AddLink;
