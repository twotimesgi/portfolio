import { useState, useEffect, use } from 'react';
import { headers } from "next/headers";

const useIsMobile = () => {
  const userAgent = headers().get("user-agent") || "";
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
};
export default useIsMobile;