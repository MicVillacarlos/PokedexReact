type ReportWebVitalsProps = {
  onPerfEntry:any
}

const reportWebVitals = (props: ReportWebVitalsProps) => {
  if (props.onPerfEntry && props.onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(props.onPerfEntry);
      getFID(props.onPerfEntry);
      getFCP(props.onPerfEntry);
      getLCP(props.onPerfEntry);
      getTTFB(props.onPerfEntry);
    });
  }
};

export default reportWebVitals;
