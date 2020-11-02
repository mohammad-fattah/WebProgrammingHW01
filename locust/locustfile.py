import time
import random
from locust import HttpUser, task, between, tag


class SimulatedUser(HttpUser):
    wait_time = between(1, 2)

    @tag('write', 'go')
    @task
    def write_go(self):
        self.client.get('/go/write?Line=' + str(random.randint(1, 100)))

    @tag('write', 'nodejs')
    @task
    def write_nodejs(self):
        self.client.get('/nodejs/write?Line=' + str(random.randint(1, 100)))

    @tag('sha', 'go')
    @task
    def sha_go(self):
        self.client.post('/go/sha', json=('{' + '"First":{m},"Second":{n}'.format(
            n=random.randint(-1000, 1000), m=random.randint(-1000, 1000)) + '}'))

    @tag('sha', 'nodejs')
    @task
    def sha_nodejs(self):
        self.client.post('/nodejs/sha', json=('{' + '"First":{m},"Second":{n}'.format(
            n=random.randint(-1000, 1000), m=random.randint(-1000, 1000)) + '}'))
