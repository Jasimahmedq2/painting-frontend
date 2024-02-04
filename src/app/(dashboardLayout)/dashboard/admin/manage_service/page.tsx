"use client";

import Loading from "@/app/loading";
import PBreadCrumb from "@/components/UI/PBreadCrumb";
import ManageServiceCard from "@/components/UI/manageServiceCard";
import { useDebounced } from "@/redux/hooks";
import { useGetAllServiceQuery } from "@/redux/service/serviceApiSlice";
import { authKey } from "@/utilites/authkey";
import { getFromLocalStorage } from "@/utilites/local-storage";
import { SearchOutlined } from "@ant-design/icons";
import {
  Col,
  InputNumber,
  Row,
  Slider,
  Space,
  Pagination,
  Select,
  Input,
  Skeleton,
} from "antd";
import type { PaginationProps } from "antd";
import { SetStateAction, useState } from "react";

const sortByOptions = [
  {
    label: "sortBy",
    options: [
      { label: "price", value: "price" },
      { label: "name", value: "name" },
      { label: "description", value: "description" },
    ],
  },
];
const sortOrderOptions = [
  {
    label: "sortOrder",
    options: [
      { label: "asc", value: "asc" },
      { label: "desc", value: "desc" },
    ],
  },
];

const ManageService = () => {
  const token = getFromLocalStorage(authKey);

  const query: Record<string, any> = {};
  const [minPrice, setMinPrice] = useState<number>(50);
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [sortBy, setSortBy] = useState<string>("price");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  query["minPrice"] = minPrice;
  query["sortOrder"] = sortOrder;
  query["page"] = page;
  query["perPage"] = size;
  query["sortField"] = sortBy;
  const debouncedSearchTerm = useDebounced({
    searchQuery: search,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["search"] = debouncedSearchTerm;
  }

  const handleChangeSortBy = (value: string) => {
    setSortBy(value);
  };

  const handleChangeSortOrder = (value: string) => {
    setSortOrder(value);
  };

  const handlePriceSlider = (newValue: number) => {
    setMinPrice(newValue);
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current: number,
    pageSize: number
  ) => {
    setPage(current);
    setSize(pageSize);
  };

  const queryInfo = {
    token,
    param: { ...query },
  };

  const { data, isLoading: SisLoading } = useGetAllServiceQuery(queryInfo);
  const totalResults = data?.data?.totalResults;

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  // if (SisLoading) {
  //   return <Loading />;
  // }

  return (
    <>
      <PBreadCrumb
        items={[
          {
            label: "dashboard",
            link: "/dashboard/user/profile",
          },
        ]}
      />

      <div className=" sm:min-h-screen py-8 sm:py-12">
        <div>
          <h2 className=" p-12 text-2xl font-bold sm:text-5xl">Services</h2>
        </div>
        <div>
          <Row className="sm:pl-12 pl-2">
            <Col span={12}>
              <Slider
                min={50}
                max={10000}
                onChange={handlePriceSlider}
                value={typeof minPrice === "number" ? minPrice : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={50}
                max={10000}
                style={{ margin: "0 16px" }}
                value={minPrice}
                onChange={handlePriceSlider}
              />
            </Col>
          </Row>
          <div className="flex justify-between items-center sm:pl-12 sm:pr-12 pt-4 pl-2 pr-2  space-x-2">
            <Input
              onChange={handleSearch}
              style={{
                width: "400px",
              }}
              size="large"
              placeholder="search services"
              prefix={<SearchOutlined />}
            />
            <div className="sm:flex sm:space-x-2 sm:space-y-0 space-y-2">
              <Select
                defaultValue="price"
                style={{ width: 200 }}
                onChange={handleChangeSortBy}
                options={sortByOptions}
              />
              <Select
                defaultValue="asc"
                style={{ width: 200 }}
                onChange={handleChangeSortOrder}
                options={sortOrderOptions}
              />
            </div>
          </div>
        </div>
        {SisLoading ? (
          <Skeleton className="p-12" />
        ) : (
          <div className="p-2 sm:p-12 grid cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.data?.results?.map((service: any) => {
              return <ManageServiceCard key={service?._id} service={service} />;
            })}
          </div>
        )}
        <div className="flex justify-center pt-8">
          <Pagination
            showSizeChanger
            onChange={onShowSizeChange}
            defaultCurrent={1}
            defaultPageSize={10}
            total={totalResults}
          />
        </div>
      </div>
    </>
  );
};

export default ManageService;
