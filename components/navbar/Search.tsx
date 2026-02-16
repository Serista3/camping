'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "../ui/input"
import { useEffect, useState } from "react"
import { useDebouncedCallback } from "use-debounce"

export default function Search(){
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const [search, setSearch] = useState(searchParams.get('search')?.toString() || '')

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams)
        if(value){
            params.set('search', value)
        }else {
            params.delete('search')
        }

        replace(`/?${params.toString()}`)
    }, 500)

    useEffect(() => {
        if(!searchParams.get('search')){
            setSearch('')
        }
    }, [searchParams])

    return (
        <Input
            type="text"
            placeholder="ค้นหาสถานที่ตั้งแคมป์"
            className="max-w-sm"
            value={search}
            onChange={(e) => {
                setSearch(e.target.value)
                handleSearch(e.target.value)
            }}
        />
    )
}