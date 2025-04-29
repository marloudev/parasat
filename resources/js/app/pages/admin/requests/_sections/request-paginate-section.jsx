import { router } from '@inertiajs/react';
import { Pagination } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';

export default function RequestPaginateSection() {
    const { request_items } = useSelector((store) => store.request_items);
    console.log('request_itemsrequest_items',request_items)
    const url = new URLSearchParams(window.location.search);
    const currentPage = url.get('page')??1;
    function next_page(e) {
      router.visit('?page='+e)
    }
  return (
    <div>
        <Pagination 
        onChange={next_page}
        defaultCurrent={currentPage} total={request_items.total} />
    </div>
  )
}
