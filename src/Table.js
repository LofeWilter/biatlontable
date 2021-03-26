import React, {useEffect} from 'react';
import './styles/Table.css';
import TableItem from "./TableItem";

function Table({athletes, getData, setSearchString, setFilteredBy ,filter}) {

    const headers = ["Place", "Name", "Hits", "Shooting speed"];

    useEffect(()=>{
        getData()
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {headers.map((item,i)=>{
                            return (
                                <td className='headerItem'
                                    key={i}
                                    onClick={()=>setFilteredBy(item.toLowerCase())}
                                >{item}
                                    {filter.by === item.toLowerCase().replace(/\s/g, '') ?
                                        <span>{
                                            filter.direction ? <span>&#8593;</span> : <span>&#8595;</span>
                                        }</span> : null
                                    }
                                </td>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                {athletes.length > 0 ? athletes.map((item)=>{
                    return (
                        <TableItem
                            item={item}
                            key={item.place}
                        />
                    )
                }) : <tr><td>.....</td></tr>}
                </tbody>
            </table>
            <div className="search">
                <label><input type="text" onChange={(e => setSearchString(e.target.value))}/>Search by name</label>
            </div>
        </div>
    );
}

export default Table;
