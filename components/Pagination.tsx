"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import ReactPaginate from "react-paginate"
import { twMerge } from "tailwind-merge"

const Pagination = ({ pageCount, itemsPerPage, className = "" }: any) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const handlePageClick = (event: any) => {
    const newOffset = event.selected + 1
    router.push(pathname + "?" + createQueryString("page", newOffset))
  }

  return (
    <ReactPaginate
      className={twMerge(
        className,
        "mt-16 flex gap-6 justify-center items-center text-sm font-mono navigation",
      )}
      activeLinkClassName="text-blue"
      disabledClassName="opacity-0"
      breakLabel="..."
      nextLabel="Next"
      pageCount={pageCount === 1 ? 0 : pageCount}
      previousLabel="Prev"
      onPageChange={handlePageClick}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
