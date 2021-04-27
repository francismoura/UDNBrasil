import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import React from 'react'

export default function PaginationBasic (props) {

  let active = props.currentPage;
  let items = [];
  let totalItens = props.totalPosts;
  let postPerPages = props.itensPorPagina;

  for (let number = 1; number <= Math.ceil(totalItens / postPerPages); number++) {
    items.push(
      <PageItem key={number} active={number === active} onClick={() => { props.paginate(number)} }>
        {number}
      </PageItem>,
    );
  }

  const PaginationBasic = (
      <Pagination>{items}</Pagination>
  );

  return PaginationBasic;

};
