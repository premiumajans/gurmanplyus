'use client'

import { Provider } from "react-redux";
import { store } from ".";
import React, { ReactNode } from "react";

interface IStorageProvider {
  children: ReactNode;
}

export function StorageProvider({ children }: IStorageProvider) {
  return <Provider store={store}>{children}</Provider>;
}
