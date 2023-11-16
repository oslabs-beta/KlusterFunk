import { useState, useEffect } from 'react';

const useMetricStore = (promAddress) => {
    const initialState = {
        bytesIn: [
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
        ],
        bytesOut: [
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
        ],
        cpuUsage: [
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
          ['-', '-'],
        ],
        brokerCount: [],
    };

    // setting initial state to metric store
    const [metricStore, setMetricStore] = useState(initialState);

    // constantly fetch on an interval of 2 seconds and updating our metric store, which will then update the chart
    useEffect(() => {
        const updateMetrics = async () => {
            const endPoint = `/metrics/default?promAddress=${promAddress}`;

            try {
                const res = await fetch(endPoint);

                if (!res.ok) {
                    throw Error(`Failed to fetch metrics with promAddress ${promAddress}`)
                }

                const metrics = await res.json();

                setMetricStore((prevStore) => {
                    const newStore = structuredClone(prevStore);

                    newStore.bytesIn = newStore.bytesIn.slice(1);
                    newStore.bytesIn.push(metrics.bytesIn);
                    newStore.bytesOut = newStore.bytesOut.slice(1);
                    newStore.bytesOut.push(metrics.bytesOut);
                    newStore.cpuUsage = newStore.cpuUsage.slice(1);
                    newStore.cpuUsage.push(metrics.cpuUsage);
                    newStore.brokerCount = metrics.brokerCount

                    return newStore;
                })
            } catch (error) {
                console.error(error.message);
            }
        }

        const interval = setInterval(updateMetrics, 2000);

        return () => clearInterval(interval);
    }, [promAddress, metricStore])

    // a function that resets the charts when called
    const resetMetricStore = () => {
        setMetricStore(initialState)
    }

    // when this hook is called, it returns metricStore state so it can be passed down to chart component to be graph
    // returns function that resets metricStore
    return [metricStore, resetMetricStore];
}

export default useMetricStore;