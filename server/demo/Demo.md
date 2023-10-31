# Setting up Kafka

## Download Kafka with Homebrew:

`$ brew install kafka`

## Starting a Session:

**Open zookeeper:**

`$ bin/zookeeper-server-start.sh config/zookeeper.properties`

**--M1 Chips:**
bins and configs are stored in a different spot, so use this instead:
`/opt/homebrew/bin/zookeeper-server-start /opt/homebrew/etc/zookeeper/zoo.cfg`

**In separate terminal, open Kafka:**

`$ bin/kafka-server-start.sh config/server.properties`

**-- M1 Chips:**
`/opt/homebrew/bin/kafka-server-start /opt/homebrew/etc/kafka/server.properties`

## How to create a topic:

`kafka-topics --create --bootstrap-server localhost:<port> --replication-factor <# of factor> --partitions <# of partitions. --topic <topic name>`

**For the demo, please run this command to create a topic, "test-topic":**
`kafka-topics --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test-topic`

**List created topics:**
to confirm you created a topic correctly, please run:
`kafka-topics --list --bootstrap-server localhost:9092`

**Run Prometheus**
/opt/homebrew/bin/prometheus --config.file=../ClusterFunk/server/demo/prometheus.yml
