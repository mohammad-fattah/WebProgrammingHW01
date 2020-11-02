# WebProgrammingHW01 : Locust
All tests are performed with the same parameters.
Arguments are randomly generated
| Users count | Spawn rate |
| :-: | :-: |
| 500 | 100 |

## How to test
```
cd /path/to/locustfile.py
locust --exclude-tags lang_tag algorythm_tag
```
## Abstract
| Name | Average | Median | RPS |
| :-: | :-: | :-: | :-: |
| /nodejs/sha | 8495 | 8200 | 46.8 |
| /nodejs/write | 6735 | 6100 | 63 |
| /go/sha | 1498 | 1500 | 168.8 |
| /go/write | 1568 | 1500 | 159.9 |

## Screenshots
![nodejs_sha](https://github.com/AryanAhadinia/WebProgrammingHW01/blob/main/media/nodejs_sha.png)
![nodejs_sha_graph](https://github.com/AryanAhadinia/WebProgrammingHW01/blob/main/media/nodejs_sha_graph.png)
![nodejs_write](https://github.com/AryanAhadinia/WebProgrammingHW01/blob/main/media/nodejs_write.png)
![nodejs_write_graph](https://github.com/AryanAhadinia/WebProgrammingHW01/blob/main/media/nodejs_write_graph.png)
![go_sha](https://github.com/AryanAhadinia/WebProgrammingHW01/blob/main/media/go_sha.png)
![go_sha_graph](https://github.com/AryanAhadinia/WebProgrammingHW01/blob/main/media/go_sha_graph.png)
![go_write](https://github.com/AryanAhadinia/WebProgrammingHW01/blob/main/media/go_write.png)
![go_write_graph](https://github.com/AryanAhadinia/WebProgrammingHW01/blob/main/media/go_write_graph.png)
