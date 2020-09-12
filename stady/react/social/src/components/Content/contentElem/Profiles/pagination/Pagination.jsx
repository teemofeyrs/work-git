import React, { useState } from 'react'
import classesPagination from './Pagination.module.css'

const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
        const [portionNumber, setPortionNumber] = useState(1)
        let portionSize = 10;
        let itemCount = Math.ceil(totalUsersCount / pageSize);
        let portionCount = Math.ceil(itemCount / portionSize);
        let leftPortionBorder = (portionNumber - 1) * portionSize +1;
        let rightPortionBorder = portionNumber * portionSize;
        let pages = [];
        for (let i = 1; i <= itemCount; i++) {
            pages.push(i);
        }
        const prevPortion = () => {
            setPortionNumber(portionNumber - 1);
        }
        const nextPortion = () => {
            setPortionNumber(portionNumber + 1);
        }

        return (

                <div className={classesPagination.pagination}>
                    { portionNumber > 1 && <span onClick={prevPortion}
                                                   className={classesPagination.arrowButton}> prev</span>}
                    {
                        pages.filter(p => (p<=rightPortionBorder && p>=leftPortionBorder) ).map(p => (<span className={currentPage === p && classesPagination.currentUserPage}
                                              onClick={() => {
                                                  onPageChanged(p)
                                              }}>{p}</span>))
                    }
                    { portionNumber < portionCount && <span onClick={nextPortion}
                                                              className={classesPagination.arrowButton}> next</span>}
                </div>
        );
}

export default Pagination;
