"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { ArrowLeftIcon, Search } from "lucide-react";
// import { useDebounce } from "@uidotdev/usehooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchField = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  let isDisabled = true;
  // const debouncedQuery = useDebounce(query, 600);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  
  function handleClick() {
    router.push(pathname + '?' + createQueryString('q', query))
  }

  useEffect(() => {
    if(searchParams.get("q")) {
        setQuery(searchParams.get("q") ?? "")
    }

    return () =>{
        setQuery("")
    }
  }, [searchParams]);

  function onClear() {
    setQuery("");
  }
  return (
    <section className="flex gap-4">
      <Button
      onClick={()=>router.back()}
       className="data-[focus-visible=true]:outline-ring" 
       variant="light" 
       isIconOnly>
        <ArrowLeftIcon />
      </Button>
      <Input
        autoFocus={true}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        onClear={onClear}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              handleClick();
            }
          }}
        value={query}
        isClearable={true}
        classNames={{
          inputWrapper: " border group-data-[focus-visible=true]:ring-ring",
          clearButton: "data-[focus-visible=true]:outline-ring",
          input:"font-bold"
        }}
      />
      <Button
        className="data-[focus-visible=true]:outline-ring"
        onClick={handleClick}
        isDisabled={query.length > 0 ? !isDisabled : isDisabled}
        isIconOnly
      >
        <Search />
      </Button>
    </section>
  );
};

export default SearchField;
