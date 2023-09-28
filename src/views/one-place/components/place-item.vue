<template>
    <div class="place-item">
        <div class="row">
            <div class="information">
                <div class="left Poppins-ExtraBold">
                    Data Analysis
                </div>
                <img src="https://d2svbor5ih31il.cloudfront.net/images/one-place/date.png">
            </div>
            <div class="game Poppins-Regular">
                Game data, address Tracing and revenue analysis
            </div>
        </div>
        <div class="row rt">
            <div class="information">
                <div class="left Poppins-ExtraBold">
                    Information Platform
                </div>
                <img src="https://d2svbor5ih31il.cloudfront.net/images/one-place/game.png">
            </div>
            <div class="game Poppins-Regular">
                Official news, walkthroughs and guides, calendar reminders
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "place-item",
    props: [],
    mounted() {
        this.$nextTick(() => {

        })
    }
}
</script>

<style scoped lang="less">
.place-item {
    display: flex;
    flex-direction: row;
    padding-top: 95px;

    .row {
        width: 259px;
        display: flex;
        flex-direction: column;

        .information {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .left {
                font-size: 24px;
                line-height: 120%;
                color: var(--col-white09);
                flex: 1;
                text-align: right;
                margin-right: 20px;
            }

            img {
                width: 70px;
                height: 70px;
            }
        }

        .game {
            text-align: right;
            font-size: 15px;
            line-height: 30px;
            color: var(--col-white67);
            padding-top: 20px;
        }

    }

    .rt {
        margin-left: 45px;
    }
}

@media screen and(max-width: 720px) {
    .place-item {
        display: flex;
        flex-direction: column;
        padding-top: 18px;
        .row {
            width: 200px;
            .information {
                .left {
                    font-size: 12px;
                }

                img {
                    width: 40px;
                    height: 40px;
                }
            }

            .game {
                text-align: right;
                font-size: 12px;
                line-height: 16px;
                padding-top: 10px;
            }
        }

        .rt {
            margin-left: 10px;
        }
    }
}

@media screen and(min-width: 720px) {
    .place-item {
        display: flex;
        flex-direction: row;
        padding-top: 18px;
        .row {
            width: 150px;
            .information {
                .left {
                    font-size: 12px;
                }

                img {
                    width: 30px;
                    height: 30px;
                }
            }

            .game {
                text-align: right;
                font-size: 12px;
                line-height: 18px;
                padding-top: 10px;
            }
        }

        .rt {
            margin-left: 10px;
        }
    }
}

@media screen and(min-width: 920px) {
    .place-item {
        display: flex;
        flex-direction: row;
        padding-top: 18px;
        .row {
            width: 200px;
            .information {
                .left {
                    font-size: 12px;
                }

                img {
                    width: 40px;
                    height: 40px;
                }
            }

            .game {
                text-align: right;
                font-size: 12px;
                padding-top: 10px;
                line-height: 18px;
            }
        }

        .rt {
            margin-left: 10px;
        }
    }
}

@media screen and(min-width: 1080px) {
    .place-item {
        display: flex;
        flex-direction: row;
        padding-top: 78px;
        .row {
            width: 239px;
            .information {
                .left {
                    font-size: 14px;
                }

                img {
                    width: 50px;
                    height: 50px;
                }
            }

            .game {
                text-align: right;
                font-size: 12px;
                padding-top: 15px;
                line-height: 18px;
            }
        }

        .rt {
            margin-left: 20px;
        }
    }
}

@media screen and(min-width: 1220px) {
    .place-item {
        display: flex;
        flex-direction: row;
        padding-top: 88px;
        .row {
            width: 239px;
            .information {
                .left {
                    font-size: 20px;
                }

                img {
                    width: 60px;
                    height: 60px;
                }
            }

            .game {
                text-align: right;
                font-size: 14px;
                padding-top: 18px;
                line-height: 22px;
            }
        }

        .rt {
            margin-left: 40px;
        }
    }
}

@media screen and(min-width: 1440px) {
    .place-item {
        display: flex;
        flex-direction: row;
        padding-top: 95px;
        .row {
            width: 259px;
            .information {
                .left {
                    font-size: 24px;
                }

                img {
                    width: 70px;
                    height: 70px;
                }
            }

            .game {
                text-align: right;
                font-size: 15px;
                padding-top: 20px;
                line-height: 23px;
            }
        }

        .rt {
            margin-left: 45px;
        }
    }
}
</style>
