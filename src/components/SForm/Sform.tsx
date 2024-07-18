import { ChangeEvent, FC, useState } from "react"
interface SformIF {
    form: {
        name: 'string' | 'number'
        type: 'string',
        label: 'string' | undefined,
        placeholder: 'string' | undefined,
        onChange: (e: any) => any,
        error:{fn:()=>any,T:'string'}
    }[]
}

export const Sform: FC<SformIF> = ({ form }) => {
    const [_formValues, setFormValues] = useState({})

    return (
        <>
            {form?.map((ele) => {
                // const id = () => {
                //     return Date.now()
                // }
                const change = (e: ChangeEvent<HTMLInputElement>) => {
                    const value = e.target.value
                    if (ele?.onChange) ele?.onChange(value)
                    setFormValues(pre => ({ ...pre, name: value }))
                }
                return (
                    <div key={ele.name}>
                        {ele?.label && <label htmlFor={ele.name}> {ele?.label}: </label>}
                        <input id={ele.name} type={ele?.type} placeholder={ele?.placeholder} onChange={(e) => change(e)} />
                       {ele?.error?.T && <div>{ele?.error?.T}</div>}
                    </div>
                )
            })}
        </>
    )
}

