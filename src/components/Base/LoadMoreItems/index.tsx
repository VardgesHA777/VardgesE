import React, { ReactNode, useEffect, useState } from 'react';
import { Button } from '@landlord-tech/opp-ui-kit';
import { PropertiesData } from '../../../types/types';
import { LoadMoreBtn, LoadMoreItemsS } from '../Propertie/style';
import { useAppState, useAppDispatch } from '../../../contexts/store';
import { NoListDataTypography } from '../../../pages/PropertyView/components/Units/Unit/styles';

const LoadMoreItems = ({
  children,
  paramsName = '',
  hook,
  noDataText,
  extraParams = {},
}: {
  children: ReactNode;
  paramsName?: string;
  hook: any;
  extraParams?: any;
  noDataText: string;
}) => {
  const dispatch = useAppDispatch();
  const { profile, filterParams, contentItems } = useAppState();
  let params = new URLSearchParams();
  if (filterParams && filterParams[paramsName]) {
    params = filterParams[paramsName];
  }
  const [contentLocalData, setContentLocalData] = useState<any>(null);
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { reFetch, data } = hook(
    (data: { content: PropertiesData; totalPages: number; totalElementsCount: number }) => {
      setContentLocalData((contentLocalData || []).concat(data.content));
      setPage(data.totalPages);
      dispatch({ type: 'SET_CONTENT_ITEMS_COUNT', payload: data.totalElementsCount });
    }
  );

  const { totalElementsCount } = data || {};

  const fetch = async () => {
    if (profile && (page === 0 || page > currentPage)) {
      params.set('maintainerId', `${profile.id}`);
      params.set('size', '10');
      params.set('page', `${currentPage || 0}`);
      Object.keys(extraParams).map((key) => {
        return params.set(`${key}`, extraParams[key]);
      });
      await reFetch({
        params,
      });
    }
  };

  useEffect(() => {
    if (contentLocalData) {
      fetch().finally(() => {});
    }
  }, [profile, currentPage]);

  useEffect(() => {
    if (!contentLocalData) {
      fetch().finally(() => {});
    }
  }, [contentLocalData, profile]);

  useEffect(() => {
    if (contentLocalData) {
      dispatch({ type: 'SET_CONTENT_ITEMS', payload: contentLocalData });
      dispatch({ type: 'SET_CONTENT_ITEMS_COUNT', payload: totalElementsCount });
    }
  }, [contentLocalData, dispatch]);

  useEffect(() => {
    if (filterParams) {
      setContentLocalData(null);
      setCurrentPage(0);
    }
  }, [filterParams]);

  useEffect(() => {
    dispatch({ type: 'SET_CONTENT_ITEMS_COUNT', payload: null });
    return dispatch({ type: 'SET_CONTENT_ITEMS', payload: null });
  }, []);

  return (
    <LoadMoreItemsS>
      {children}
      {contentLocalData && (
        <>
          {page - currentPage > 1 && (
            <LoadMoreBtn>
              <Button text='Load More' onClick={() => setCurrentPage(currentPage + 1)} />
            </LoadMoreBtn>
          )}
          {contentItems?.length === 0 && (
            <NoListDataTypography component='h5' variant='h5'>
              {noDataText}
            </NoListDataTypography>
          )}
        </>
      )}
    </LoadMoreItemsS>
  );
};

export default LoadMoreItems;
