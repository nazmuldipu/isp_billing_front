import React from "react";
import { useDispatch } from "react-redux";
import { limitchanged, pageChanged } from "../../../store/paginateSlice";
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'

const TableFotter = ({ data, columns }) => {
  const dispatch = useDispatch();

  const counter = (currentPage, totalPages) => {
    let startPage = 1;
    let length = 10;
    if (totalPages < 10) {
      length = totalPages;
    } else {
      if (currentPage < 5) {
        startPage = 1;
      } else if (currentPage + 5 >= totalPages) {
        startPage = totalPages - 9;
      } else {
        startPage = currentPage - 4;
      }
    }
    return Array.from({ length }, (v, k) => k + startPage);
  };

  const handleLimitChange = (event) => {
    dispatch(limitchanged(event.target.value));
  };

  const handlePageChange = (event) => {
    dispatch(pageChanged(event));
  };

  return (
    <tfoot>
      <tr>
        <td colSpan={columns.length}>
          <div className="bg-white px-4 py-1 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="grid grid-cols-2 sm:hidden">
              <span
                onClick={() => handlePageChange(data.prevPage)}
                className="items-center px-2 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </span>
              <span
                onClick={() => handlePageChange(data.nextPage)}
                className="ml-3 items-center px-2 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </span>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{data.pagingCounter}</span> to <span className="font-medium">{data.pagingCounter + data.limit}</span> of{' '}
                  <span className="font-medium">{data.totalDocs}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  {data.prevPage && <><span
                    onClick={() => handlePageChange(1)}
                    className="h-7 cursor-pointer relative inline-flex items-center px-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                    <span
                      onClick={() => handlePageChange(data.prevPage)}
                      className="h-7 cursor-pointer relative inline-flex items-center px-1 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </>
                  }
                  {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                  {counter(data.page, data.totalPages).map((p) => (
                    <span
                      key={p}
                      onClick={() => handlePageChange(p)}
                      aria-current="page"
                      className={`cursor-pointer ${data.page === p ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 ' : 'bg-white border-gray-300 text-gray-500'} h-7 relative inline-flex items-center px-2 border text-xs font-semibold `}
                    >
                      {p}
                    </span>
                  ))}

                  {data.nextPage && <> <span
                    onClick={() => handlePageChange(data.nextPage)}
                    className="h-7 cursor-pointer relative inline-flex items-center px-1 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                    <span
                      onClick={() => handlePageChange(data.totalPages)}
                      className="h-7 cursor-pointer relative inline-flex items-center px-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Next</span>
                      <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                    </span></>}


                  <span className="text-gray-500 hidden md:inline-flex relative items-center pl-8 pr-1 text-sm font-medium">Pages</span>

                  <select
                    onChange={handleLimitChange}
                    className="h-7 text-gray-500 rounded-md hover:bg-gray-50 hidden md:inline-flex relative items-center px-2 border text-sm font-medium"
                    aria-label="Page limit"
                  >
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="32">32</option>
                    <option value="64">64</option>
                  </select>
                </nav>
              </div>
            </div>
          </div>

        </td>
      </tr>
    </tfoot>
  );
};

export default TableFotter;
