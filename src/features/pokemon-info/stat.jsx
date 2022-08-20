import { capitalizeWord } from "../../utils";

export default function Stat({stats=[]})
{
    return (
        <div className="card bg-transparent" style={{width: "18rem", borderStyle : 'none'}}>
            <div className="card-body" style={{padding : '0'}}>
                <h5 className="card-title">Stats</h5>
                {
                    stats.map(item => (
                        <div className="d-flex justify-content-around bg-light p-1 mb-1">
                            <div style={{width : '50%'}}>{capitalizeWord(item.stat.name)}</div>
                            <div>{item.base_stat}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}