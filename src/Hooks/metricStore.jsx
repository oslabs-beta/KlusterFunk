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

    const [metricStore, setMetricStore] = useState(initialState);

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
                    const newStore = { ...prevStore };

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

    const resetMetricStore = () => {
        setMetricStore(initialState)
    }

    return [metricStore, resetMetricStore];
}

export default useMetricStore;