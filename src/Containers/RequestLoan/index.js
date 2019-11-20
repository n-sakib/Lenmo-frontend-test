import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import Slider from 'gradient-slider';
import Pie from 'react-native-pie';

import Card from '../../Components/Card';

import LinearGradient from 'react-native-linear-gradient';
import iconBack from '../../../assets/backIcon.png';
import iconLeaf from '../../../assets/leaf.png';
import iconExclaim from '../../../assets/exclaimIcon.png';
import ProfilePhoto from '../../../assets/profilePic.png';

export default class RequestLoan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            investmentAmount: 1
        };
    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#F8F8F8',
            }}>
                <ScrollView>
                    <View style={{
                        marginTop: 20,
                        marginLeft: 26,
                        marginRight: 26
                    }}>
                        <TouchableOpacity>
                            <Image source={iconBack} />
                        </TouchableOpacity>
                        <View style={{
                            marginTop: 20,
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                marginTop: 5,
                                height: 80,
                                width: 80,
                                borderRadius: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#92C2FF'
                            }}>
                                <Image
                                    source={ProfilePhoto}
                                    style={{
                                        height: 60,
                                        width: 60,
                                        borderRadius: 30
                                    }} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <View style={{ height: 40 }}>
                                    <Text style={{
                                        fontFamily: 'Avenir-Heavy',
                                        fontSize: 20,
                                        color: 'black'
                                    }}>
                                        IO
								</Text>
                                </View>
                                <Text style={{
                                    fontFamily: 'Avenir-Heavy',
                                    fontSize: 10,
                                    color: '#9b9b9b',
                                    fontWeight: '800'
                                }}>
                                    LENMO SCORE
							</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 5,
                                }}>
                                    <View style={{
                                        justifyContent: 'center',
                                        marginRight: 3
                                    }}>
                                        <Image source={iconLeaf} />
                                    </View>
                                    <Text style={{
                                        fontFamily: 'Avenir-Heavy',
                                        fontSize: 20,
                                        color: 'black'
                                    }}> 73 </Text>
                                    <View style={{
                                        justifyContent: 'center',
                                        marginLeft: 3
                                    }}>
                                        <Image source={iconExclaim} />
                                    </View>
                                </View>
                                <Text style={{
                                    marginTop: 5,
                                    fontFamily: 'Avenir-Heavy',
                                    fontSize: 9,
                                    color: '#9b9b9b',
                                    fontWeight: '800'
                                }}>Vantage Score 4.0</Text>
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <View style={{ height: 40 }}>
                                </View>
                                <Text style={{
                                    fontFamily: 'Avenir-Heavy',
                                    fontSize: 10,
                                    color: '#9b9b9b',
                                    fontWeight: '800'
                                }}>
                                    CREDIT SCORE
							</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 5,
                                }}>
                                    <View style={{
                                        justifyContent: 'center',
                                        marginLeft: 3
                                    }}>
                                        <Pie
                                            radius={10}
                                            innerRadius={7}
                                            series={[25, 25, 25, 25]}
                                            colors={['#FF534C', '#FFA831', '#00D034', '#EBEBEB']} />
                                    </View>

                                    <Text style={{
                                        fontFamily: 'Avenir-Heavy',
                                        fontSize: 20,
                                        color: 'black'
                                    }}> 500-630 </Text>
                                    <View style={{
                                        justifyContent: 'center',
                                        marginLeft: 3
                                    }}>
                                        <Image source={iconExclaim} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 30 }}></View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <View>
                            <Card
                                color={'#00D034'}
                                title={'PAYMENT HISTORY'}
                                value={'1 yr 5 mos'}
                                icon={iconExclaim}
                            />
                            <Card
                                color={'#FFA831'}
                                title={'TOTAL ACCOUNTS'}
                                value={'2'}
                                icon={iconExclaim}
                            />
                            <Card
                                color={'#FFA831'}
                                title={'ANNUAL INCOME'}
                                value={'$53,000/yr'}
                                icon={iconExclaim}
                            />
                        </View>
                        <View>
                            <Card
                                color={'#00D034'}
                                title={'CREDIT UTILIZATION'}
                                value={'100%'}
                                icon={iconExclaim}
                            />
                            <Card
                                color={'#FFA831'}
                                title={'TOTAL ACCOUNTS'}
                                value={'11%'}
                                icon={iconExclaim}
                            />
                            <Card
                                color={'#FFA831'}
                                title={'DEROGATORY MARKS'}
                                value={'3'}
                                icon={iconExclaim}
                            />
                        </View>
                    </View>
                    <View style={{ height: 30 }}></View>
                    <View style={{
                        backgroundColor: 'white',
                        paddingLeft: 40,
                        paddingBottom: 40,
                    }}>
                        <View style={{ height: 30 }}></View>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 5,
                        }}>
                            <View>
                                <Text style={{
                                    fontFamily: 'Avenir-Heavy',
                                    fontSize: 15,
                                    color: '#BD2EFF',
                                    fontWeight: '600'
                                }}>
                                    Investment Amout
							</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: 'Avenir-Medium',
                                        fontSize: 20,
                                        color: '#000',
                                    }}>
                                        $
								</Text>
                                    <Text style={{
                                        fontFamily: 'Avenir-Medium',
                                        fontSize: 30,
                                        color: '#000',
                                        marginTop: -5,
                                        marginLeft: 5,
                                        marginRight: 5
                                    }}>
                                        970
								</Text>
                                </View>
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{
                                    fontFamily: 'Avenir-Heavy',
                                    fontSize: 15,
                                    color: '#BD2EFF',
                                    fontWeight: '600'
                                }}>
                                    Payback Period
							</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: 'Avenir-Medium',
                                        fontSize: 30,
                                        color: '#000',
                                        marginTop: -5,
                                        marginLeft: 5,
                                        marginRight: 5
                                    }}>
                                        1
								</Text>
                                    <Text style={{
                                        fontFamily: 'Avenir-Medium',
                                        fontSize: 20,
                                        color: '#000',
                                    }}>
                                        month
								</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 30 }}></View>
                        <Text style={{
                            fontFamily: 'Avenir-Heavy',
                            fontSize: 15,
                            color: '#BD2EFF',
                            fontWeight: '600'
                        }}>
                            Investment Amout
                        </Text>
                        <Text style={{
                            marginTop: 15,
                            fontFamily: 'Avenir-Roman',
                            fontSize: 15,
                            color: '#2f2f2f'
                        }}>Recommended interest rate: 3%</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 10,
                        }}>
                            <Text style={{
                                fontFamily: 'Avenir-Medium',
                                fontSize: 30,
                                color: '#000',
                                height: 30
                            }}>
                                {this.state.investmentAmount}
                            </Text>
                            <Text style={{
                                fontFamily: 'Avenir-Medium',
                                fontSize: 20,
                                color: '#000',
                            }}>
                                %
						    </Text>
                        </View>
                        <View style={{ height: 10 }}></View>
                        <View style={{ width: 300 }}>
                            <Slider
                                minimumValue={1}
                                maximumValue={100}
                                step={1}
                                onValueChange={(value) => this.setState({ investmentAmount: value })}
                                customMinimumTrack={(
                                    <LinearGradient
                                        start={{ x: .74, y: .26 }}
                                        end={{ x: 0, y: .77 }}
                                        colors={['#8760FD', '#568FFC']}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                )}
                                customThumb={(
                                    <LinearGradient
                                        start={{ x: .74, y: .26 }}
                                        end={{ x: 0, y: .77 }}
                                        colors={['#568FFC', '#6A7CFD', '#8760FD', '#A841FE', '#BF2BFF']}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            margin: 2,
                                            borderRadius: 20 / 2,
                                            borderColor: "#FFFFFF",
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 8,
                                            },
                                            shadowOpacity: 0.46,
                                            shadowRadius: 11.14,
                                            elevation: 17,
                                        }}
                                    />
                                )}
                            />
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 5,
                            }}>
                                <Text style={{
                                    fontFamily: 'Avenir-Roman',
                                    fontSize: 15,
                                    color: '#2f2f2f',
                                    marginLeft: 1
                                }}>
                                    1%
							</Text>
                                <Text style={{
                                    fontFamily: 'Avenir-Roman',
                                    fontSize: 15,
                                    color: '#2f2f2f',
                                    position: 'absolute',
                                    right: 1
                                }}>
                                    100%
							</Text>
                            </View>
                            <View style={{ height: 30 }}></View>
                            <TouchableOpacity>
                                <View style={{
                                    height: 48,
                                    width: '100%',
                                    borderRadius: 6,
                                    backgroundColor: '#fff',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    ...Platform.select({
                                        ios: {
                                            shadowColor: '#000',
                                            shadowOffset: {
                                                width: 0,
                                                height: 7,
                                            },
                                            shadowOpacity: 0.41,
                                            shadowRadius: 9.11,
                                        },
                                        android: {
                                            elevation: 10,
                                        },
                                    })
                                }}>
                                    <Text style={{
                                        fontFamily: 'Avenir-Heavy',
                                        fontSize: 15,
                                        color: '#FF4040',
                                    }}>
                                        Dismiss
							    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 20 }}></View>
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={['#568FFC', '#6A7CFD', '#8760FD', '#A841FE', '#BF2BFF',]}
                                    style={{ height: 48, widht: '100%', borderRadius: 5 }}
                                    start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                >
                                    <Text style={{
                                        fontSize: 18,
                                        fontFamily: 'Gill Sans',
                                        textAlign: 'center',
                                        margin: 10,
                                        color: 'white'
                                    }}>
                                        Make Offer
								</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


