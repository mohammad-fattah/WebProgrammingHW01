import time
import random
from locust import HttpUser, task, between, tag

class SimulatedUser(HttpUser):
    wait_time = between(2, 3)

    @task
    def write_go(self):
            self.client.get('/go/write?Line=' + str(random.randint(1, 100)))
